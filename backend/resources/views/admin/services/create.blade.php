@extends('layouts.admin')

@section('title', 'Add New Service')

@section('content')
<div class="max-w-7xl mx-auto">
    <!-- Page Header -->
    <div class="mb-8 flex justify-between items-center">
        <div>
            <h1 class="text-3xl font-bold text-gray-900 mb-2">Add New Service</h1>
            <p class="text-gray-600">Create a new service offering</p>
        </div>
        <a href="{{ route('admin.services.index') }}" 
           class="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-lg font-medium transition-colors duration-200">
            <i class="fas fa-arrow-left mr-2"></i>Back to Services
        </a>
    </div>

    <!-- Service Form -->
    <div class="max-w-4xl mx-auto">
        <div class="bg-white rounded-xl shadow-sm border border-gray-200">
            <div class="px-6 py-4 border-b border-gray-200">
                <h5 class="text-lg font-semibold text-gray-900">Service Information</h5>
            </div>
            <div class="p-6">
                <form action="{{ route('admin.services.store') }}" method="POST">
                    @csrf
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div class="md:col-span-2">
                            <label for="title" class="block text-sm font-medium text-gray-700 mb-2">
                                Title <span class="text-red-500">*</span>
                            </label>
                            <input type="text" 
                                   class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 @error('title') border-red-500 @enderror" 
                                   id="title" name="title" value="{{ old('title') }}" required>
                            @error('title')
                                <p class="mt-1 text-sm text-red-600">{{ $message }}</p>
                            @enderror
                        </div>
                        
                        <div>
                            <label for="status" class="block text-sm font-medium text-gray-700 mb-2">
                                Status <span class="text-red-500">*</span>
                            </label>
                            <select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 @error('status') border-red-500 @enderror" 
                                    id="status" name="status" required>
                                <option value="active" {{ old('status') === 'active' ? 'selected' : '' }}>Active</option>
                                <option value="inactive" {{ old('status') === 'inactive' ? 'selected' : '' }}>Inactive</option>
                            </select>
                            @error('status')
                                <p class="mt-1 text-sm text-red-600">{{ $message }}</p>
                            @enderror
                        </div>
                    </div>

                    <div class="mb-6">
                        <label for="description" class="block text-sm font-medium text-gray-700 mb-2">
                            Description <span class="text-red-500">*</span>
                        </label>
                        <textarea class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 @error('description') border-red-500 @enderror" 
                                  id="description" name="description" rows="4" required>{{ old('description') }}</textarea>
                        @error('description')
                            <p class="mt-1 text-sm text-red-600">{{ $message }}</p>
                        @enderror
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label for="icon" class="block text-sm font-medium text-gray-700 mb-2">
                                Icon (FontAwesome class)
                            </label>
                            <input type="text" 
                                   class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 @error('icon') border-red-500 @enderror" 
                                   id="icon" name="icon" value="{{ old('icon', 'fas fa-cog') }}" 
                                   placeholder="fas fa-cog">
                            <p class="mt-1 text-sm text-gray-500">Enter FontAwesome icon class (e.g., fas fa-cog, fas fa-code)</p>
                            @error('icon')
                                <p class="mt-1 text-sm text-red-600">{{ $message }}</p>
                            @enderror
                        </div>
                        
                        <div>
                            <label for="price" class="block text-sm font-medium text-gray-700 mb-2">
                                Price
                            </label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span class="text-gray-500 sm:text-sm">$</span>
                                </div>
                                <input type="number" 
                                       class="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 @error('price') border-red-500 @enderror" 
                                       id="price" name="price" value="{{ old('price') }}" 
                                       step="0.01" min="0" placeholder="0.00">
                            </div>
                            @error('price')
                                <p class="mt-1 text-sm text-red-600">{{ $message }}</p>
                            @enderror
                        </div>
                    </div>

                    <!-- Icon Preview -->
                    <div class="mb-6">
                        <label class="block text-sm font-medium text-gray-700 mb-2">Icon Preview</label>
                        <div class="p-4 border border-gray-300 rounded-lg bg-gray-50">
                            <i id="icon-preview" class="fas fa-cog text-4xl text-primary-500"></i>
                            <span class="ml-3 text-gray-600" id="icon-class">fas fa-cog</span>
                        </div>
                    </div>

                    <div class="flex justify-end space-x-3">
                        <a href="{{ route('admin.services.index') }}" 
                           class="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2 rounded-lg font-medium transition-colors duration-200">
                            Cancel
                        </a>
                        <button type="submit" 
                                class="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
                            <i class="fas fa-save mr-2"></i>Create Service
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<script>
document.getElementById('icon').addEventListener('input', function() {
    const iconClass = this.value || 'fas fa-cog';
    const preview = document.getElementById('icon-preview');
    const classDisplay = document.getElementById('icon-class');
    
    preview.className = iconClass + ' text-4xl text-primary-500';
    classDisplay.textContent = iconClass;
});
</script>
@endsection
