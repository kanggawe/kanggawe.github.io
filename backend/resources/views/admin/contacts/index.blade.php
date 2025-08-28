@extends('layouts.admin')

@section('title', 'Contacts Management')

@section('content')
<div class="max-w-7xl mx-auto">
    <!-- Page Header -->
    <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">Contacts Management</h1>
        <p class="text-gray-600">Manage contact submissions</p>
    </div>

    <!-- Statistics -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div class="flex items-center">
                <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center text-white text-xl mr-4">
                    <i class="fas fa-envelope"></i>
                </div>
                <div>
                    <p class="text-gray-500 text-sm font-medium mb-1">Total</p>
                    <h3 class="text-2xl font-bold text-gray-900 mb-1">{{ $stats['total'] }}</h3>
                </div>
            </div>
        </div>
        <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div class="flex items-center">
                <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center text-white text-xl mr-4">
                    <i class="fas fa-clock"></i>
                </div>
                <div>
                    <p class="text-gray-500 text-sm font-medium mb-1">Pending</p>
                    <h3 class="text-2xl font-bold text-gray-900 mb-1">{{ $stats['pending'] }}</h3>
                </div>
            </div>
        </div>
        <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div class="flex items-center">
                <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center text-white text-xl mr-4">
                    <i class="fas fa-eye"></i>
                </div>
                <div>
                    <p class="text-gray-500 text-sm font-medium mb-1">Read</p>
                    <h3 class="text-2xl font-bold text-gray-900 mb-1">{{ $stats['read'] }}</h3>
                </div>
            </div>
        </div>
        <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div class="flex items-center">
                <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center text-white text-xl mr-4">
                    <i class="fas fa-reply"></i>
                </div>
                <div>
                    <p class="text-gray-500 text-sm font-medium mb-1">Replied</p>
                    <h3 class="text-2xl font-bold text-gray-900 mb-1">{{ $stats['replied'] }}</h3>
                </div>
            </div>
        </div>
    </div>

    <!-- Filter -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
        <div class="p-6">
            <form method="GET" action="{{ route('admin.contacts.index') }}" class="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                <div>
                    <label for="status" class="block text-sm font-medium text-gray-700 mb-2">Filter by Status</label>
                    <select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" 
                            id="status" name="status">
                        <option value="all" {{ request('status') === 'all' ? 'selected' : '' }}>All Status</option>
                        <option value="pending" {{ request('status') === 'pending' ? 'selected' : '' }}>Pending</option>
                        <option value="read" {{ request('status') === 'read' ? 'selected' : '' }}>Read</option>
                        <option value="replied" {{ request('status') === 'replied' ? 'selected' : '' }}>Replied</option>
                    </select>
                </div>
                <div class="flex space-x-3">
                    <button type="submit" 
                            class="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
                        <i class="fas fa-filter mr-2"></i>Filter
                    </button>
                    <a href="{{ route('admin.contacts.index') }}" 
                       class="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2 rounded-lg font-medium transition-colors duration-200">
                        <i class="fas fa-times mr-2"></i>Clear
                    </a>
                </div>
            </form>
        </div>
    </div>

    <!-- Contacts List -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200">
        <div class="p-6">
            @if($contacts->count() > 0)
                <div class="overflow-x-auto">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            @foreach($contacts as $contact)
                                <tr class="hover:bg-gray-50">
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm font-semibold text-gray-900">{{ $contact->name }}</div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <a href="mailto:{{ $contact->email }}" class="text-primary-600 hover:text-primary-900">
                                            {{ $contact->email }}
                                        </a>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm text-gray-900">{{ Str::limit($contact->subject, 30) }}</div>
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="text-sm text-gray-900">{{ Str::limit($contact->message, 50) }}</div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full 
                                            {{ $contact->status === 'pending' ? 'bg-yellow-100 text-yellow-800' : '' }}
                                            {{ $contact->status === 'read' ? 'bg-blue-100 text-blue-800' : '' }}
                                            {{ $contact->status === 'replied' ? 'bg-green-100 text-green-800' : '' }}">
                                            {{ ucfirst($contact->status) }}
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {{ $contact->created_at->format('M d, Y H:i') }}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <div class="flex space-x-2">
                                            <a href="{{ route('admin.contacts.show', $contact) }}" 
                                               class="text-primary-600 hover:text-primary-900 bg-primary-50 hover:bg-primary-100 px-3 py-1 rounded-md transition-colors duration-200">
                                                <i class="fas fa-eye"></i>
                                            </a>
                                            
                                            <form action="{{ route('admin.contacts.update-status', $contact) }}" 
                                                  method="POST" class="inline">
                                                @csrf
                                                @method('PATCH')
                                                <select name="status" 
                                                        class="text-sm border border-gray-300 rounded-md px-2 py-1 focus:ring-2 focus:ring-primary-500 focus:border-primary-500" 
                                                        onchange="this.form.submit()">
                                                    <option value="pending" {{ $contact->status === 'pending' ? 'selected' : '' }}>Pending</option>
                                                    <option value="read" {{ $contact->status === 'read' ? 'selected' : '' }}>Read</option>
                                                    <option value="replied" {{ $contact->status === 'replied' ? 'selected' : '' }}>Replied</option>
                                                </select>
                                            </form>
                                            
                                            <form action="{{ route('admin.contacts.destroy', $contact) }}" 
                                                  method="POST" class="inline"
                                                  onsubmit="return confirm('Are you sure you want to delete this contact?')">
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
                    {{ $contacts->links() }}
                </div>
            @else
                <div class="text-center py-12">
                    <i class="fas fa-envelope text-6xl text-gray-300 mb-4"></i>
                    <h5 class="text-xl font-semibold text-gray-500 mb-2">No contacts found</h5>
                    <p class="text-gray-400">No contact submissions yet.</p>
                </div>
            @endif
        </div>
    </div>
</div>
@endsection
