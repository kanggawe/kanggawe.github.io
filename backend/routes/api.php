<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\ServiceController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Public routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Public service routes
Route::get('/services/active', [ServiceController::class, 'active']);

// Contact form submission (public)
Route::post('/contacts', [ContactController::class, 'store']);

// Protected routes
Route::middleware('auth:sanctum')->group(function () {
    // Auth routes
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', [AuthController::class, 'user']);
    
    // Contact management (admin only)
    Route::apiResource('contacts', ContactController::class)->except(['store']);
    Route::get('/contacts/status/{status}', [ContactController::class, 'getByStatus']);
    
    // Service management (admin only)
    Route::apiResource('services', ServiceController::class);
    Route::patch('/services/{id}/toggle-status', [ServiceController::class, 'toggleStatus']);
});
