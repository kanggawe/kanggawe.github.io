<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Admin Dashboard') - Laravel Admin</title>
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: {
                            50: '#eff6ff',
                            500: '#667eea',
                            600: '#5a67d8',
                            700: '#4c51bf',
                        },
                        secondary: {
                            500: '#764ba2',
                            600: '#6b46c1',
                        }
                    }
                }
            }
        }
    </script>
</head>
<body class="bg-gray-50 font-sans">
    <!-- Sidebar -->
    <nav class="fixed top-0 left-0 h-full w-64 bg-gradient-to-br from-slate-800 to-slate-700 text-white z-50 transition-transform duration-300 ease-in-out" id="sidebar">
        <div class="p-6 border-b border-slate-600">
            <h3 class="text-xl font-bold m-0">
                <i class="fas fa-tachometer-alt mr-3"></i>Admin Panel
            </h3>
        </div>
        
        <div class="py-4">
            <div class="mb-0">
                <a href="{{ route('admin.dashboard') }}" 
                   class="block px-6 py-4 text-slate-300 no-underline transition-all duration-300 border-l-4 border-transparent hover:bg-primary-500/20 hover:text-white hover:border-primary-500 {{ request()->routeIs('admin.dashboard') ? 'bg-primary-500/20 text-white border-primary-500' : '' }}">
                    <i class="fas fa-chart-line mr-3 w-5"></i>Dashboard
                </a>
            </div>
            <div class="mb-0">
                <a href="{{ route('admin.services.index') }}" 
                   class="block px-6 py-4 text-slate-300 no-underline transition-all duration-300 border-l-4 border-transparent hover:bg-primary-500/20 hover:text-white hover:border-primary-500 {{ request()->routeIs('admin.services.*') ? 'bg-primary-500/20 text-white border-primary-500' : '' }}">
                    <i class="fas fa-cogs mr-3 w-5"></i>Services
                </a>
            </div>
            <div class="mb-0">
                <a href="{{ route('admin.contacts.index') }}" 
                   class="block px-6 py-4 text-slate-300 no-underline transition-all duration-300 border-l-4 border-transparent hover:bg-primary-500/20 hover:text-white hover:border-primary-500 {{ request()->routeIs('admin.contacts.*') ? 'bg-primary-500/20 text-white border-primary-500' : '' }}">
                    <i class="fas fa-envelope mr-3 w-5"></i>Contacts
                </a>
            </div>
            <div class="mb-0">
                <a href="/" 
                   class="block px-6 py-4 text-slate-300 no-underline transition-all duration-300 border-l-4 border-transparent hover:bg-primary-500/20 hover:text-white hover:border-primary-500">
                    <i class="fas fa-home mr-3 w-5"></i>Back to Site
                </a>
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    <div class="ml-64 min-h-screen">
        <!-- Top Navbar -->
        <div class="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center">
            <div class="flex items-center">
                <button class="lg:hidden mr-3 bg-transparent border-none text-2xl text-gray-700" onclick="toggleSidebar()">
                    <i class="fas fa-bars"></i>
                </button>
                <h4 class="text-xl font-semibold text-gray-800 m-0">@yield('title', 'Dashboard')</h4>
            </div>
            
            <div class="flex items-center">
                <span class="mr-3 text-gray-600">Welcome, {{ auth()->user()->name }}</span>
                <form method="POST" action="{{ route('logout') }}" class="inline">
                    @csrf
                    <button type="submit" class="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                        <i class="fas fa-sign-out-alt mr-1"></i>Logout
                    </button>
                </form>
            </div>
        </div>

        <!-- Content -->
        <div class="p-8">
            @if(session('success'))
                <div class="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6 flex justify-between items-center">
                    <span>{{ session('success') }}</span>
                    <button type="button" class="text-green-600 hover:text-green-800" onclick="this.parentElement.remove()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            @endif

            @if(session('error'))
                <div class="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6 flex justify-between items-center">
                    <span>{{ session('error') }}</span>
                    <button type="button" class="text-red-600 hover:text-red-800" onclick="this.parentElement.remove()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            @endif

            @yield('content')
        </div>
    </div>

    <script>
        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            sidebar.classList.toggle('translate-x-0');
            sidebar.classList.toggle('-translate-x-full');
        }

        // Close sidebar when clicking outside on mobile
        document.addEventListener('click', function(event) {
            const sidebar = document.getElementById('sidebar');
            const mobileMenuBtn = document.querySelector('button[onclick="toggleSidebar()"]');
            
            if (window.innerWidth < 1024) {
                if (!sidebar.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
                    sidebar.classList.add('-translate-x-full');
                    sidebar.classList.remove('translate-x-0');
                }
            }
        });

        // Initialize sidebar state for mobile
        if (window.innerWidth < 1024) {
            document.getElementById('sidebar').classList.add('-translate-x-full');
        }
    </script>
</body>
</html>
