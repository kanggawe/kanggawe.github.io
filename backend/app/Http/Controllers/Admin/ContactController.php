<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function index(Request $request)
    {
        $query = Contact::query();

        // Filter by status
        if ($request->has('status') && $request->status !== 'all') {
            $query->where('status', $request->status);
        }

        $contacts = $query->latest()->paginate(15);
        
        // Get statistics
        $stats = [
            'total' => Contact::count(),
            'pending' => Contact::where('status', 'pending')->count(),
            'read' => Contact::where('status', 'read')->count(),
            'replied' => Contact::where('status', 'replied')->count(),
        ];

        return view('admin.contacts.index', compact('contacts', 'stats'));
    }

    public function show(Contact $contact)
    {
        return view('admin.contacts.show', compact('contact'));
    }

    public function updateStatus(Request $request, Contact $contact)
    {
        $request->validate([
            'status' => 'required|in:pending,read,replied',
        ]);

        $contact->update(['status' => $request->status]);

        return redirect()->back()->with('success', 'Contact status updated successfully.');
    }

    public function destroy(Contact $contact)
    {
        $contact->delete();

        return redirect()->route('admin.contacts.index')
            ->with('success', 'Contact deleted successfully.');
    }
}
