@extends('layouts.admin')

@section('title', 'Dashboard')

@section('content')
<div class="max-w-7xl mx-auto">
    <!-- Page Header -->
    <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
        <p class="text-gray-600">Welcome to your admin dashboard</p>
    </div>

    <!-- Statistics Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div class="flex items-center">
                <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center text-white text-xl mr-4">
                    <i class="fas fa-cogs"></i>
                </div>
                <div>
                    <p class="text-gray-500 text-sm font-medium mb-1">Total Services</p>
                    <h3 class="text-2xl font-bold text-gray-900 mb-1">{{ $stats['total_services'] }}</h3>
                    <p class="text-gray-400 text-xs">Services in database</p>
                </div>
            </div>
        </div>

        <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div class="flex items-center">
                <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center text-white text-xl mr-4">
                    <i class="fas fa-check-circle"></i>
                </div>
                <div>
                    <p class="text-gray-500 text-sm font-medium mb-1">Active Services</p>
                    <h3 class="text-2xl font-bold text-gray-900 mb-1">{{ $stats['active_services'] }}</h3>
                    <p class="text-gray-400 text-xs">Currently active</p>
                </div>
            </div>
        </div>

        <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div class="flex items-center">
                <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center text-white text-xl mr-4">
                    <i class="fas fa-envelope"></i>
                </div>
                <div>
                    <p class="text-gray-500 text-sm font-medium mb-1">Total Contacts</p>
                    <h3 class="text-2xl font-bold text-gray-900 mb-1">{{ $stats['total_contacts'] }}</h3>
                    <p class="text-gray-400 text-xs">Contact submissions</p>
                </div>
            </div>
        </div>

        <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div class="flex items-center">
                <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center text-white text-xl mr-4">
                    <i class="fas fa-clock"></i>
                </div>
                <div>
                    <p class="text-gray-500 text-sm font-medium mb-1">Pending Contacts</p>
                    <h3 class="text-2xl font-bold text-gray-900 mb-1">{{ $stats['pending_contacts'] }}</h3>
                    <p class="text-gray-400 text-xs">Awaiting response</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Quick Actions -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
        <div class="px-6 py-4 border-b border-gray-200">
            <h5 class="text-lg font-semibold text-gray-900">Quick Actions</h5>
        </div>
        <div class="p-6">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                <a href="{{ route('admin.services.create') }}" 
                   class="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white px-4 py-3 rounded-lg font-medium text-center transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
                    <i class="fas fa-plus mr-2"></i>Add New Service
                </a>
                <a href="{{ route('admin.services.index') }}" 
                   class="bg-white border border-primary-500 text-primary-500 hover:bg-primary-50 px-4 py-3 rounded-lg font-medium text-center transition-all duration-200">
                    <i class="fas fa-cogs mr-2"></i>Manage Services
                </a>
                <a href="{{ route('admin.contacts.index') }}" 
                   class="bg-white border border-primary-500 text-primary-500 hover:bg-primary-50 px-4 py-3 rounded-lg font-medium text-center transition-all duration-200">
                    <i class="fas fa-envelope mr-2"></i>View Contacts
                </a>
                <a href="/" 
                   class="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-3 rounded-lg font-medium text-center transition-all duration-200">
                    <i class="fas fa-home mr-2"></i>View Site
                </a>
            </div>
        </div>
    </div>

    <!-- Recent Activity -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Recent Contacts -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200">
            <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h5 class="text-lg font-semibold text-gray-900">Recent Contacts</h5>
                <a href="{{ route('admin.contacts.index') }}" 
                   class="text-primary-500 hover:text-primary-600 text-sm font-medium">View All</a>
            </div>
            <div class="p-6">
                @if($recent_contacts->count() > 0)
                    <div class="space-y-4">
                        @foreach($recent_contacts as $contact)
                            <div class="flex justify-between items-start p-4 bg-gray-50 rounded-lg">
                                <div class="flex-1">
                                    <h6 class="font-semibold text-gray-900 mb-1">{{ $contact->name }}</h6>
                                    <p class="text-gray-600 text-sm mb-1">{{ $contact->subject }}</p>
                                    <p class="text-gray-500 text-xs">{{ $contact->email }}</p>
                                </div>
                                <div class="text-right ml-4">
                                    <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full 
                                        {{ $contact->status === 'pending' ? 'bg-yellow-100 text-yellow-800' : '' }}
                                        {{ $contact->status === 'read' ? 'bg-blue-100 text-blue-800' : '' }}
                                        {{ $contact->status === 'replied' ? 'bg-green-100 text-green-800' : '' }}">
                                        {{ ucfirst($contact->status) }}
                                    </span>
                                    <p class="text-gray-400 text-xs mt-1">{{ $contact->created_at->diffForHumans() }}</p>
                                </div>
                            </div>
                        @endforeach
                    </div>
                @else
                    <div class="text-center py-8">
                        <p class="text-gray-500">No recent contacts</p>
                    </div>
                @endif
            </div>
        </div>

        <!-- Recent Services -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200">
            <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h5 class="text-lg font-semibold text-gray-900">Recent Services</h5>
                <a href="{{ route('admin.services.index') }}" 
                   class="text-primary-500 hover:text-primary-600 text-sm font-medium">View All</a>
            </div>
            <div class="p-6">
                @if($recent_services->count() > 0)
                    <div class="space-y-4">
                        @foreach($recent_services as $service)
                            <div class="flex justify-between items-start p-4 bg-gray-50 rounded-lg">
                                <div class="flex-1">
                                    <h6 class="font-semibold text-gray-900 mb-1">{{ $service->title }}</h6>
                                    <p class="text-gray-600 text-sm mb-1">{{ Str::limit($service->description, 50) }}</p>
                                    @if($service->price)
                                        <p class="text-green-600 text-sm font-medium">${{ $service->price }}</p>
                                    @endif
                                </div>
                                <div class="text-right ml-4">
                                    <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full 
                                        {{ $service->status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800' }}">
                                        {{ ucfirst($service->status) }}
                                    </span>
                                    <p class="text-gray-400 text-xs mt-1">{{ $service->created_at->diffForHumans() }}</p>
                                </div>
                            </div>
                        @endforeach
                    </div>
                @else
                    <div class="text-center py-8">
                        <p class="text-gray-500">No recent services</p>
                    </div>
                @endif
            </div>
        </div>
    </div>
</div>
@endsection
