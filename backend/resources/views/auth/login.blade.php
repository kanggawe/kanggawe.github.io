<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Login - Laravel Admin</title>
    
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
                            500: '#667eea',
                            600: '#5a67d8',
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
<body class="bg-gradient-to-br from-primary-500 to-secondary-500 min-h-screen flex items-center justify-center font-sans">
    <div class="bg-white rounded-2xl p-8 shadow-2xl w-full max-w-md">
        <div class="text-center mb-8">
            <h1 class="text-3xl font-bold text-gray-900 mb-2">
                <i class="fas fa-tachometer-alt mr-3"></i>Admin Login
            </h1>
            <p class="text-gray-600">Sign in to access the dashboard</p>
        </div>

        @if($errors->any())
            <div class="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6">
                <ul class="list-disc list-inside">
                    @foreach($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif

        <form method="POST" action="{{ route('login.post') }}">
            @csrf
            
            <div class="mb-6">
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" 
                       id="email" 
                       name="email" 
                       value="{{ old('email') }}" 
                       class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                       required>
            </div>

            <div class="mb-6">
                <label for="password" class="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input type="password" 
                       id="password" 
                       name="password" 
                       class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                       required>
            </div>

            <button type="submit" 
                    class="w-full bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
                <i class="fas fa-sign-in-alt mr-2"></i>Sign In
            </button>
        </form>

        <div class="mt-8 pt-6 border-t border-gray-200 text-center">
            <p class="text-gray-600 text-sm mb-2">Demo Credentials:</p>
            <p class="text-gray-800 text-sm font-medium">Email: admin@example.com</p>
            <p class="text-gray-800 text-sm font-medium">Password: password123</p>
        </div>
    </div>
</body>
</html>
