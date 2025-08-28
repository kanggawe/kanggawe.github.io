<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $contacts = Contact::orderBy('created_at', 'desc')->paginate(10);
        
        return response()->json([
            'success' => true,
            'data' => $contacts
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string|max:1000',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation errors',
                'errors' => $validator->errors()
            ], 422);
        }

        $contact = Contact::create($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Contact message sent successfully',
            'data' => $contact
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $contact = Contact::findOrFail($id);
        
        return response()->json([
            'success' => true,
            'data' => $contact
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $contact = Contact::findOrFail($id);
        
        $validator = Validator::make($request->all(), [
            'status' => 'sometimes|in:pending,read,replied',
            'name' => 'sometimes|string|max:255',
            'email' => 'sometimes|email|max:255',
            'subject' => 'sometimes|string|max:255',
            'message' => 'sometimes|string|max:1000',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation errors',
                'errors' => $validator->errors()
            ], 422);
        }

        $contact->update($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Contact updated successfully',
            'data' => $contact
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $contact = Contact::findOrFail($id);
        $contact->delete();

        return response()->json([
            'success' => true,
            'message' => 'Contact deleted successfully'
        ]);
    }

    /**
     * Get contacts by status
     */
    public function getByStatus($status)
    {
        $contacts = Contact::where('status', $status)
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        return response()->json([
            'success' => true,
            'data' => $contacts
        ]);
    }
}
