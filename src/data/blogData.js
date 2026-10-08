// Data artikel blog MITRAXCON
export const blogPosts = [
  {
    id: 1,
    slug: 'perbedaan-fiber-optic-vs-kabel-tembaga',
    title: 'Kenapa Fiber Optic Jauh Lebih Cepat dan Stabil Dibandingkan Kabel Tembaga Biasa?',
    category: 'Infrastruktur & Fiber',
    author: {
      name: 'Budi Santoso, S.T.',
      role: 'Chief Technology Officer MITRAXCON',
      avatar: 'bi-person-circle',
    },
    date: '28 Agustus 2026',
    readTime: '5 min baca',
    image: '/assets/hero-slide-1.jpg',
    featured: true,
    excerpt: 'Pahami perbedaan mendasar teknologi fiber optik berbasis transmisi foton cahaya versus tembaga elektrik, serta dampaknya pada latensi gaming, streaming 4K, dan kestabilan cuaca.',
    tags: ['Fiber Optic', 'Jaringan', 'Kecepatan Internet', 'Teknologi'],
    content: [
      {
        type: 'paragraph',
        text: 'Bagi pengguna internet rumahan maupun korporasi, istilah Fiber Optic (serat optik) tentu sudah tidak asing lagi. Namun, tahukah Anda apa yang membuat kabel serat kaca setipis helai rambut ini mampu mengalirkan data ribuan kali lebih cepat dibandingkan kabel tembaga tradisional yang telah digunakan sejak era telepon kabel?'
      },
      {
        type: 'heading',
        text: '1. Kecepatan Cahaya vs Arus Listrik'
      },
      {
        type: 'paragraph',
        text: 'Kabel tembaga konvensional (seperti kabel coaxial atau twisted pair UTP) mengirimkan data melalui sinyal impuls listrik. Sebaliknya, fiber optic mentransmisikan data dalam bentuk pulsa cahaya (foton) melalui inti kaca murni silika. Karena kecepatan cahaya di dalam kaca mencapai sekitar 200.000 km per detik, paket data berpindah hampir secara instan dari server ke perangkat Anda.'
      },
      {
        type: 'heading',
        text: '2. Kebal terhadap Gangguan Elektromagnetik (EMI) & Cuaca'
      },
      {
        type: 'paragraph',
        text: 'Salah satu musuh terbesar kabel tembaga adalah induksi elektromagnetik dari petir, trafo listrik PLN, kabel tegangan tinggi, bahkan gelombang radio. Saat hujan deras atau badai petir, sinyal tembaga sering mengalami noise dan packet loss tinggi. Fiber optic yang terbuat dari bahan isolator kaca sepenuhnya kebal terhadap gelombang elektromagnetik dan petir, sehingga internet tetap stabil dalam kondisi cuaca apa pun.'
      },
      {
        type: 'quote',
        text: '"Teknologi 100% Full Fiber MITRAXCON dirancang tanpa kompromi untuk memastikan latensi sub-5ms dan jaminan konektivitas tanpa degradasi jarak."',
        author: 'Budi Santoso, CTO MITRAXCON'
      },
      {
        type: 'heading',
        text: '3. Kapasitas Bandwidth Tanpa Batas (Future-Proof)'
      },
      {
        type: 'paragraph',
        text: 'Kabel tembaga memiliki batas fisik redaman (attenuation) yang curam seiring bertambahnya jarak. Semakin jauh Anda dari gardu DSLAM, kecepatan internet akan anjlok drastis. Serat optik memiliki redaman sinyal yang sangat rendah, mampu menempuh puluhan kilometer tanpa repeater, dan siap ditingkatkan kecepatannya hingga puluhan Gigabit per detik hanya dengan mengganti perangkat transceiver di ujung kabel tanpa perlu menggali tanah ulang.'
      },
      {
        type: 'heading',
        text: 'Kesimpulan'
      },
      {
        type: 'paragraph',
        text: 'Investasi pada jaringan 100% True Fiber Optic seperti yang dihadirkan oleh MITRAXCON bukan sekadar tentang angka kecepatan unduh, melainkan tentang kestabilan latensi rendah (*low ping*) untuk video conference jernih, cloud backup lancar, dan pengalaman gaming bebas lag.'
      }
    ]
  },
  {
    id: 2,
    slug: 'tips-posisi-router-wifi-rumah',
    title: '7 Posisi Terbaik Meletakkan Router WiFi di Rumah agar Sinyal Kuat Tanpa Deadzone',
    category: 'Tips & Tutorial',
    author: {
      name: 'Dimas Anggara',
      role: 'NOC & Field Operations Specialist',
      avatar: 'bi-person-circle',
    },
    date: '22 Agustus 2026',
    readTime: '4 min baca',
    image: '/assets/hero-slide-2.jpg',
    featured: false,
    excerpt: 'Sinyal WiFi sering drop di kamar atau lantai dua? Jangan buru-buru ganti paket, simak rahasia penempatan router dan cara mengeliminasi blind spot sinyal di rumah Anda.',
    tags: ['Tips WiFi', 'Router', 'Home Broadband', 'Optimasi'],
    content: [
      {
        type: 'paragraph',
        text: 'Banyak pelanggan mengira kecepatan internet yang lambat di kamar tidur atau sudut rumah disebabkan oleh gangguan provider. Padahal dalam 80% kasus yang kami tangani di lapangan, penyebab utamanya adalah penempatan router WiFi yang kurang tepat atau terhalang dinding tebal dan perangkat elektronik.'
      },
      {
        type: 'heading',
        text: '1. Letakkan di Titik Tengah Rumah (Central Location)'
      },
      {
        type: 'paragraph',
        text: 'Gelombang radio WiFi memancar secara melingkar (omnidirectional) 360 derajat layaknya bola lampu. Jika Anda menaruh router di pojok ruangan dekat pintu masuk utama, setengah dari jangkauan sinyal Anda terbuang ke luar rumah. Usahakan taruh router di ruang keluarga atau area tengah rumah.'
      },
      {
        type: 'heading',
        text: '2. Letakkan di Tempat Tinggi, Bukan di Lantai'
      },
      {
        type: 'paragraph',
        text: 'Lantai, karpet tebal, dan kaki meja kayu menyerap sinyal radio 2.4 GHz dan 5 GHz. Letakkan router di atas meja kerja, rak buku setinggi 1-1.5 meter, atau tempel di dinding untuk sudut pancaran yang bebas hambatan.'
      },
      {
        type: 'heading',
        text: '3. Hindari Dapur dan Perangkat Elektronik Berat'
      },
      {
        type: 'paragraph',
        text: 'Microwave, kulkas, oven, dan telepon nirkabel beroperasi pada frekuensi 2.4 GHz yang persis sama dengan frekuensi WiFi. Saat microwave menyala, sinyal WiFi bisa terdistorsi seketika. Jauhkan router minimal 3 meter dari peralatan dapur dan cermin besar.'
      },
      {
        type: 'quote',
        text: '"Posisikan antena router: satu antena tegak lurus (vertikal) dan satu antena mendatar (horizontal) agar menangkap polarisasi perangkat smartphone maupun laptop secara optimal."',
        author: 'Tips Tim Teknisi MITRAXCON'
      },
      {
        type: 'heading',
        text: '4. Gunakan Fitur Band 5 GHz untuk Jarak Dekat'
      },
      {
        type: 'paragraph',
        text: 'Router Dual-Band dari MITRAXCON menyediakan dua kanal sinyal: 2.4 GHz (jangkauan luas, kecepatan standar) dan 5 GHz (kecepatan ultra tinggi hingga ratusan Mbps, minim interferensi tetangga). Sambungkan TV pintar dan konsol game ke frekuensi 5 GHz untuk streaming 4K tanpa buffering.'
      }
    ]
  },
  {
    id: 3,
    slug: 'mengenal-serangan-ddos-dan-solusi-mitigasi',
    title: 'Mengenal Serangan DDoS pada Jaringan Bisnis dan Cara MITRAXCON Menangkalnya',
    category: 'Keamanan Siber',
    author: {
      name: 'Farhan Maulana',
      role: 'Cyber Security & Network Architect',
      avatar: 'bi-person-circle',
    },
    date: '15 Agustus 2026',
    readTime: '6 min baca',
    image: '/assets/server.png',
    featured: false,
    excerpt: 'Serangan siber tipe DDoS kini makin masif menyasar korporasi dan institusi. Pelajari cara kerja mitigasi otomatis dan proteksi Anti-DDoS hingga 1.2 Tbps dari MITRAXCON.',
    tags: ['Cyber Security', 'Anti-DDoS', 'Firewall', 'Enterprise'],
    content: [
      {
        type: 'paragraph',
        text: 'Distributed Denial of Service (DDoS) adalah salah satu jenis serangan siber tertua namun tetap menjadi ancaman paling mematikan bagi bisnis modern. Serangan ini bekerja dengan membanjiri server, router, atau port jaringan target dengan jutaan paket data sampah palsu secara serentak dari botnet global, hingga infrastruktur target lumpuh total.'
      },
      {
        type: 'heading',
        text: 'Berapa Besar Kerugian Finansial Akibat Downtime?'
      },
      {
        type: 'paragraph',
        text: 'Menurut riset industri keamanan siber, setiap menit downtime pada sistem perbankan, portal e-commerce, atau aplikasi logistik dapat menimbulkan kerugian puluhan juta rupiah, belum termasuk rusaknya reputasi merek dan komplain pelanggan.'
      },
      {
        type: 'heading',
        text: 'Arsitektur Pertahanan Anti-DDoS MITRAXCON'
      },
      {
        type: 'paragraph',
        text: 'MITRAXCON menerapkan perlindungan terdistribusi berbasis Scrubbing Center langsung di tingkat upstream. Arsitektur ini memiliki kapasitas pembersihan hingga 1.2 Tbps yang mampu mendeteksi anomali traffic Layer 3, Layer 4 (SYN Flood, UDP Flood), hingga Layer 7 (HTTP Flood) dalam hitungan detik sebelum paket berbahaya sempat menyentuh server Anda.'
      },
      {
        type: 'quote',
        text: '"Filtrasi traffic bersih (clean pipe) terjadi secara otomatis tanpa mengganggu pengguna sah yang sedang mengakses layanan Anda."',
        author: 'Farhan Maulana, Cyber Security Lead'
      },
      {
        type: 'heading',
        text: 'Langkah Pencegahan untuk Perusahaan Anda'
      },
      {
        type: 'paragraph',
        text: 'Pastikan organisasi Anda menggunakan IP Publik statis dengan proteksi firewall generasi terbaru (NGFW) dan sistem pemantauan NOC 24/7 aktif yang mendeteksi lonjakan anomali secara real-time.'
      }
    ]
  },
  {
    id: 4,
    slug: 'apa-itu-sla-dedicated-internet',
    title: 'Apa Itu Service Level Agreement (SLA) 99.9% dan Mengapa Krusial untuk Bisnis?',
    category: 'Teknologi Bisnis',
    author: {
      name: 'Ir. Hendra Wijaya, M.T.',
      role: 'Chief Executive Officer MITRAXCON',
      avatar: 'bi-person-circle',
    },
    date: '08 Agustus 2026',
    readTime: '5 min baca',
    image: '/assets/hero-slide-3.png',
    featured: false,
    excerpt: 'Bagi perbankan, hotel, e-commerce, dan operasional kantor, downtime berarti kerugian finansial. Ini alasan mengapa SLA 99.9% dengan kompensasi resmi wajib dimiliki.',
    tags: ['SLA 99.9%', 'Dedicated Internet', 'Solusi Bisnis', 'Korporasi'],
    content: [
      {
        type: 'paragraph',
        text: 'Banyak pemilik bisnis tergoda memilih paket internet rumahan biasa (best-effort broadband) untuk kantor cabang atau fasilitas produksi demi menghemat anggaran. Namun saat terjadi gangguan jaringan dan internet mati selama berjam-jam, biaya kerugian akibat pegawai tidak bisa bekerja jauh melampaui selisih biaya langganan internet bulanan.'
      },
      {
        type: 'heading',
        text: 'Apa Makna Angka SLA 99.9%?'
      },
      {
        type: 'paragraph',
        text: 'SLA (Service Level Agreement) adalah komitmen hukum tertulis dari penyedia jasa internet (ISP) kepada pelanggan mengenai tingkat ketersediaan layanan (*uptime*). SLA 99.9% berarti dalam 1 bulan (43.200 menit), total waktu gangguan yang diizinkan secara kumulatif tidak boleh melebihi 43 menit.'
      },
      {
        type: 'heading',
        text: 'Perbedaan Dedicated vs Broadband Biasa'
      },
      {
        type: 'paragraph',
        text: 'Pada layanan Dedicated Internet MITRAXCON, Anda mendapatkan rasio bandwidth 1:1 murni (unggah sama cepat dengan unduh), IP Publik Statis, jalur transmisi prioritas tanpa terpengaruh jam sibuk tetangga, serta jaminan waktu respons penanganan teknis (MTTR - Mean Time to Recovery) di bawah 15 menit oleh tim NOC berdedikasi.'
      }
    ]
  },
  {
    id: 5,
    slug: 'ekspansi-jaringan-fiber-100g-mitraxcon',
    title: 'MITRAXCON Resmi Operasikan Backbone Fiber 100G untuk Tingkatkan Kapasitas Nasional',
    category: 'Berita MITRAXCON',
    author: {
      name: 'Tim Humas MITRAXCON',
      role: 'Corporate Communications',
      avatar: 'bi-person-circle',
    },
    date: '01 Agustus 2026',
    readTime: '4 min baca',
    image: '/assets/hero-slide-1.jpg',
    featured: false,
    excerpt: 'Peningkatan kapasitas jaringan inti (core backbone) hingga 100 Gbps kini menghubungkan kota-kota strategis di Jawa, Bali, dan Sumatera untuk latensi super rendah.',
    tags: ['Berita MITRAXCON', 'Backbone 100G', 'Ekspansi', 'Infrastruktur'],
    content: [
      {
        type: 'paragraph',
        text: 'PT Mitraxcon Telekomunikasi Indonesia resmi mengumumkan penyelesaian fase modernisasi infrastruktur jaringan inti (*core network*) dengan implementasi link backbone 100 Gbps DWDM (Dense Wavelength Division Multiplexing).'
      },
      {
        type: 'heading',
        text: 'Menjawab Lonjakan Kebutuhan AI & Cloud Computing'
      },
      {
        type: 'paragraph',
        text: 'Seiring meningkatnya adopsi kecerdasan buatan (AI), migrasi sistem perbankan ke multi-cloud, dan konsumsi video streaming 4K/8K, kebutuhan bandwidth domestik di Indonesia melonjak lebih dari 45% dalam setahun terakhir. Upgrade backbone 100G ini memastikan pelanggan MITRAXCON terbebas dari bottleneck di level transmisi antarkota.'
      },
      {
        type: 'heading',
        text: 'Interkoneksi Langsung ke Pusat Data Global'
      },
      {
        type: 'paragraph',
        text: 'Peningkatan ini terhubung langsung ke titik temu bursa internet utama nasional seperti OpenIXP, IIX APJII, serta kabel bawah laut internasional ke Singapura dan Hong Kong.'
      }
    ]
  },
  {
    id: 6,
    slug: 'keunggulan-wifi-6-untuk-smart-home',
    title: 'Mengenal Router WiFi 6: Standar Baru Kecepatan dan Kestabilan Puluhan Perangkat',
    category: 'Tips & Tutorial',
    author: {
      name: 'Dimas Anggara',
      role: 'NOC & Field Operations Specialist',
      avatar: 'bi-person-circle',
    },
    date: '24 Juli 2026',
    readTime: '5 min baca',
    image: '/assets/hero-slide-2.jpg',
    featured: false,
    excerpt: 'Punya puluhan perangkat smart home, smart TV, CCTV cloud, dan smartphone aktif sekaligus? Ini alasan mengapa teknologi WiFi 6 (802.11ax) adalah pilihan tepat.',
    tags: ['WiFi 6', 'Smart Home', 'Router', 'Teknologi'],
    content: [
      {
        type: 'paragraph',
        text: 'Di era rumah pintar (*smart home*), bukan hal aneh jika sebuah rumah memiliki 15 hingga 30 perangkat yang terhubung ke jaringan WiFi secara simultan: dari CCTV cloud, smart speaker, smart bulb, laptop kerja, konsol game, hingga tablet anak.'
      },
      {
        type: 'heading',
        text: 'Keterbatasan Router WiFi 5 (802.11ac)'
      },
      {
        type: 'paragraph',
        text: 'Router generasi lama melayani perangkat satu per satu secara bergantian dengan sangat cepat. Saat perangkat yang tersambung mencapai puluhan, timbul antrean paket data yang menyebabkan latensi melonjak (bufferbloat) dan video call tersendat-sendat.'
      },
      {
        type: 'heading',
        text: 'Keajaiban Teknologi OFDMA pada WiFi 6'
      },
      {
        type: 'paragraph',
        text: 'WiFi 6 mengadopsi teknologi OFDMA (Orthogonal Frequency Division Multiple Access) yang memecah satu saluran frekuensi menjadi puluhan sub-saluran kecil. Hasilnya, router dapat mengirimkan data ke beberapa gadget berbeda sekaligus dalam satu transmisi tunggal tanpa perlu mengantre.'
      }
    ]
  }
];

export const blogCategories = [
  'Semua',
  'Infrastruktur & Fiber',
  'Tips & Tutorial',
  'Keamanan Siber',
  'Teknologi Bisnis',
  'Berita MITRAXCON'
];
