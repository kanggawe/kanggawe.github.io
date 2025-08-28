<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $fillable = [
        'name',
        'email',
        'subject',
        'message',
        'status'
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    public function scopePending($query)
    {
        return $query->where('status', 'pending');
    }

    public function scopeRead($query)
    {
        return $query->where('status', 'read');
    }

    public function scopeReplied($query)
    {
        return $query->where('status', 'replied');
    }
}
