<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Service;
use App\Models\Contact;
use App\Models\User;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        // Get statistics
        $stats = [
            'total_services' => Service::count(),
            'active_services' => Service::where('status', 'active')->count(),
            'total_contacts' => Contact::count(),
            'pending_contacts' => Contact::where('status', 'pending')->count(),
            'total_users' => User::count(),
        ];

        // Get recent contacts
        $recent_contacts = Contact::latest()->take(5)->get();

        // Get recent services
        $recent_services = Service::latest()->take(5)->get();

        return view('admin.dashboard', compact('stats', 'recent_contacts', 'recent_services'));
    }
}
