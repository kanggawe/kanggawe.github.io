<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\ServiceController;
use App\Http\Controllers\Admin\ContactController;

// Authentication routes
Route::get('/login', function () {
    return view('auth.login');
})->name('login');

Route::post('/login', function () {
    $credentials = request()->only('email', 'password');
    
    if (auth()->attempt($credentials)) {
        return redirect()->intended('/admin');
    }
    
    return back()->withErrors([
        'email' => 'The provided credentials do not match our records.',
    ]);
})->name('login.post');

Route::post('/logout', function () {
    auth()->logout();
    return redirect('/login');
})->name('logout');

// Admin routes
Route::prefix('admin')->name('admin.')->middleware(['auth'])->group(function () {
    // Dashboard
    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
    
    // Services management
    Route::resource('services', ServiceController::class);
    Route::patch('services/{service}/toggle-status', [ServiceController::class, 'toggleStatus'])->name('services.toggle-status');
    
    // Contacts management
    Route::get('contacts', [ContactController::class, 'index'])->name('contacts.index');
    Route::get('contacts/{contact}', [ContactController::class, 'show'])->name('contacts.show');
    Route::patch('contacts/{contact}/status', [ContactController::class, 'updateStatus'])->name('contacts.update-status');
    Route::delete('contacts/{contact}', [ContactController::class, 'destroy'])->name('contacts.destroy');
});

// Welcome page
Route::get('/login', function () {
    return view('auth.login');
});
