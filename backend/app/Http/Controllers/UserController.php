<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Psy\CodeCleaner\ReturnTypePass;

class UserController extends Controller
{
    public function register(Request $request)
    {
        $user = New User;
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->password = Hash::make($request->input('password'));
        $user->save();
        return $user;
    }
    public function login(Request $request)
    {
        $user = User::where('email',$request->email)->first();
        if (!$user || !Hash::check($request->password,$user->password)) {
            return ['error' => 'Email or password is not matched!'];
        }
        return $user;
    }
}
