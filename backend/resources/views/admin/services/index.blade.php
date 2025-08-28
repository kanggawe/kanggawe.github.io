@extends('layouts.admin')

@section('title', 'Services Management')

@section('content')
<div class="max-w-7xl mx-auto">
    <!-- Page Header -->
    <div class="mb-8 flex justify-between items-center">
        <div>
            <h1 class="text-3xl font-bold text-gray-900 mb-2">Services Management</h1>
            <p class="text-gray-600">Manage your services</p>
        </div>
        <a href="{{ route('admin.services.create') }}" 
           class="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
            <i class="fas fa-plus mr-2"></i>Add New Service
        </a>
    </div>

    <!-- Services List -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200">
        <div class="p-6">
            @if($services->count() > 0)
                <div class="overflow-x-auto">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Icon</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            @foreach($services as $service)
                                <tr class="hover:bg-gray-50">
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        @if($service->icon)
                                            <i class="{{ $service->icon }} text-2xl text-primary-500"></i>
                                        @else
                                            <i class="fas fa-cog text-2xl text-gray-400"></i>
                                        @endif
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm font-semibold text-gray-900">{{ $service->title }}</div>
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="text-sm text-gray-900">{{ Str::limit($service->description, 50) }}</div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        @if($service->price)
                                            <span class="text-green-600 font-semibold">${{ $service->price }}</span>
                                        @else
                                            <span class="text-gray-400">-</span>
                                        @endif
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full 
                                            {{ $service->status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800' }}">
                                            {{ ucfirst($service->status) }}
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {{ $service->created_at->format('M d, Y') }}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <div class="flex space-x-2">
                                            <a href="{{ route('admin.services.edit', $service) }}" 
                                               class="text-primary-600 hover:text-primary-900 bg-primary-50 hover:bg-primary-100 px-3 py-1 rounded-md transition-colors duration-200">
                                                <i class="fas fa-edit"></i>
                                            </a>
                                            
                                            <form action="{{ route('admin.services.toggle-status', $service) }}" 
                                                  method="POST" class="inline">
                                                @csrf
                                                @method('PATCH')
                                                <button type="submit" 
                                                        class="text-yellow-600 hover:text-yellow-900 bg-yellow-50 hover:bg-yellow-100 px-3 py-1 rounded-md transition-colors duration-200">
                                                    <i class="fas fa-toggle-{{ $service->status === 'active' ? 'off' : 'on' }}"></i>
                                                </button>
                                            </form>
                                            
                                            <form action="{{ route('admin.services.destroy', $service) }}" 
                                                  method="POST" class="inline"
                                                  onsubmit="return confirm('Are you sure you want to delete this service?')">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" 
                                                        class="text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-3 py-1 rounded-md transition-colors duration-200">
                                                    <i class="fas fa-trash"></i>
                                                </button>
                                            </form>
                                        </div>
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>

                <!-- Pagination -->
                <div class="flex justify-center mt-6">
                    {{ $services->links() }}
                </div>
            @else
                <div class="text-center py-12">
                    <i class="fas fa-cogs text-6xl text-gray-300 mb-4"></i>
                    <h5 class="text-xl font-semibold text-gray-500 mb-2">No services found</h5>
                    <p class="text-gray-400 mb-6">Create your first service to get started.</p>
                    <a href="{{ route('admin.services.create') }}" 
                       class="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
                        <i class="fas fa-plus mr-2"></i>Add New Service
                    </a>
                </div>
            @endif
        </div>
    </div>
</div>
@endsection
