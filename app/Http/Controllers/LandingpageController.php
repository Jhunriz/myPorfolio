<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class LandingpageController extends Controller
{
    public function Skills(Request $request) {
        return Inertia::render('Skills');
    }
}
