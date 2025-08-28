<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    public function index()
    {
        $services = Service::latest()->paginate(10);
        return view('admin.services.index', compact('services'));
    }

    public function create()
    {
        return view('admin.services.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'icon' => 'nullable|string|max:255',
            'price' => 'nullable|numeric|min:0',
            'status' => 'required|in:active,inactive',
        ]);

        Service::create($request->all());

        return redirect()->route('admin.services.index')
            ->with('success', 'Service created successfully.');
    }

    public function edit(Service $service)
    {
        return view('admin.services.edit', compact('service'));
    }

    public function update(Request $request, Service $service)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'icon' => 'nullable|string|max:255',
            'price' => 'nullable|numeric|min:0',
            'status' => 'required|in:active,inactive',
        ]);

        $service->update($request->all());

        return redirect()->route('admin.services.index')
            ->with('success', 'Service updated successfully.');
    }

    public function destroy(Service $service)
    {
        $service->delete();

        return redirect()->route('admin.services.index')
            ->with('success', 'Service deleted successfully.');
    }

    public function toggleStatus(Service $service)
    {
        $service->update([
            'status' => $service->status === 'active' ? 'inactive' : 'active'
        ]);

        return redirect()->route('admin.services.index')
            ->with('success', 'Service status updated successfully.');
    }
}
