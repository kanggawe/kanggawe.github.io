       // Deklarasi elemen
        const navbar = document.getElementById('navbar');
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobile-menu');
        const darkModeToggleDesktop = document.getElementById('darkModeToggleDesktop');
        const darkModeToggleMobile = document.getElementById('darkModeToggleMobile');
        const body = document.body;
        const summarizeButton = document.getElementById('summarizeButton');
        const mainContentText = document.getElementById('main-content-text');
        const summaryOutput = document.getElementById('summaryOutput');

        // Deklarasi elemen slider
        const sliderVideos = document.getElementById('sliderVideos');
        const prevButton = document.getElementById('prevButton');
        const nextButton = document.getElementById('nextButton');
        const playPauseButton = document.getElementById('playPauseButton');
        let sliderInterval;
        let isPlaying = true;
        let currentIndex = 0;
        const videos = sliderVideos.querySelectorAll('video');

        let lastScrollY = window.scrollY;

        // Fungsionalitas scroll untuk menyembunyikan/menampilkan navbar
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                navbar.classList.add('hide');
            } else {
                navbar.classList.remove('hide');
            }

            lastScrollY = currentScrollY;
            
            if (mobileMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        });

        // Fungsionalitas klik untuk menu hamburger
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });

        // Fungsionalitas tombol dark mode
        function toggleDarkMode() {
            body.classList.toggle('dark');
            navbar.classList.toggle('dark');
            
            // Periksa ikon dan teks di tombol desktop
            const iconDesktop = darkModeToggleDesktop?.querySelector('i');
            const textDesktop = darkModeToggleDesktop?.querySelector('span');
            // Periksa ikon dan teks di tombol mobile
            const iconMobile = darkModeToggleMobile?.querySelector('i');
            const textMobile = darkModeToggleMobile?.querySelector('span');

            if (body.classList.contains('dark')) {
                if (iconDesktop) {
                    iconDesktop.classList.remove('fa-moon');
                    iconDesktop.classList.add('fa-sun');
                    textDesktop.textContent = 'Light';
                }
                if (iconMobile) {
                    iconMobile.classList.remove('fa-moon');
                    iconMobile.classList.add('fa-sun');
                    textMobile.textContent = 'Light';
                }
            } else {
                if (iconDesktop) {
                    iconDesktop.classList.remove('fa-sun');
                    iconDesktop.classList.add('fa-moon');
                    textDesktop.textContent = 'Dark';
                }
                if (iconMobile) {
                    iconMobile.classList.remove('fa-sun');
                    iconMobile.classList.add('fa-moon');
                    textMobile.textContent = 'Dark';
                }
            }
        }
        
        // Memanggil fungsi dark mode saat tombol diklik
        if (darkModeToggleDesktop) {
            darkModeToggleDesktop.addEventListener('click', toggleDarkMode);
        }
        if (darkModeToggleMobile) {
            darkModeToggleMobile.addEventListener('click', toggleDarkMode);
        }
        
        // --- Fungsionalitas Slider Video ---
        function updateSlider() {
            const videoWidth = videos[0].clientWidth;
            sliderVideos.style.transform = `translateX(${-currentIndex * videoWidth}px)`;
            
            // Kontrol pemutaran video
            videos.forEach((video, index) => {
                if (index === currentIndex) {
                    video.play();
                } else {
                    video.pause();
                }
            });

            // Perbarui tombol play/pause
            if (isPlaying) {
                playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
            } else {
                playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
            }
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % videos.length;
            updateSlider();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + videos.length) % videos.length;
            updateSlider();
        }
        
        function startAutoSlide() {
            if (!sliderInterval) {
                sliderInterval = setInterval(nextSlide, 5000); // Waktu ganti slide 5 detik
            }
        }

        function stopAutoSlide() {
            clearInterval(sliderInterval);
            sliderInterval = null;
        }

        function togglePlayPause() {
            isPlaying = !isPlaying;
            if (isPlaying) {
                startAutoSlide();
                videos[currentIndex].play();
                playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
            } else {
                stopAutoSlide();
                videos[currentIndex].pause();
                playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
            }
        }

        // Event Listeners untuk slider
        nextButton.addEventListener('click', () => {
            stopAutoSlide();
            nextSlide();
            if (isPlaying) startAutoSlide();
        });
        
        prevButton.addEventListener('click', () => {
            stopAutoSlide();
            prevSlide();
            if (isPlaying) startAutoSlide();
        });
        
        playPauseButton.addEventListener('click', togglePlayPause);

        // Memastikan slider diinisialisasi saat halaman dimuat
        window.addEventListener('load', () => {
            updateSlider(); // Posisikan slider di awal
            startAutoSlide(); // Mulai otomatis
        });

        // Responsif: perbarui posisi slider saat ukuran jendela berubah
        window.addEventListener('resize', updateSlider);


        // --- Fungsionalitas Gemini API ---
        summarizeButton.addEventListener('click', async () => {
            const originalText = mainContentText.textContent.trim();
            const prompt = `Ringkas teks berikut ini dalam beberapa kalimat:\n\n${originalText}`;
            
            // Tampilkan loading state
            summarizeButton.disabled = true;
            summarizeButton.textContent = 'Meringkas...';
            summaryOutput.style.display = 'block';
            summaryOutput.innerHTML = 'Memuat ringkasan...';

            let retries = 0;
            const maxRetries = 3;
            let delay = 1000;

            try {
                while (retries < maxRetries) {
                    try {
                        const chatHistory = [{ role: "user", parts: [{ text: prompt }] }];
                        const payload = { contents: chatHistory };
                        const apiKey = "";
                        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
                        
                        const response = await fetch(apiUrl, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(payload)
                        });

                        if (!response.ok) {
                            if (response.status === 429) {
                                throw new Error('Rate limit exceeded, retrying...');
                            }
                            throw new Error(`API request failed with status: ${response.status}`);
                        }

                        const result = await response.json();
                        
                        if (result.candidates && result.candidates.length > 0 &&
                            result.candidates[0].content && result.candidates[0].content.parts &&
                            result.candidates[0].content.parts.length > 0) {
                            const summaryText = result.candidates[0].content.parts[0].text;
                            summaryOutput.innerHTML = `<p>${summaryText}</p>`;
                            break; // Keluar dari loop jika berhasil
                        } else {
                            throw new Error('Unexpected API response structure.');
                        }

                    } catch (err) {
                        console.error('Error fetching summary:', err);
                        if (retries < maxRetries - 1 && err.message.includes('Rate limit')) {
                            retries++;
                            await new Promise(res => setTimeout(res, delay));
                            delay *= 2; // Exponential backoff
                        } else {
                            throw err;
                        }
                    }
                }
            } catch {
                summaryOutput.innerHTML = '<p style="color: red;">Gagal membuat ringkasan. Silakan coba lagi.</p>';
            } finally {
                summarizeButton.disabled = false;
                summarizeButton.textContent = 'Ringkas Konten dengan Gemini ✨';
            }
        });