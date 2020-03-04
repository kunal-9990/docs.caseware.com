<?php

namespace App\Http\Controllers\Auth;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    /**
     * Redirect the user to the GitHub authentication page.
     *
     * @return \Illuminate\Http\Response
     */
    public function redirectToProvider($provider)
    {
      if ($provider == 'github'){
            return Socialite::driver('github')->redirect();
        }
        elseif ($provider = 'facebook'){
            return Socialite::driver('facebook')->redirect();
        }
        elseif ($provider = 'google'){
            return Socialite::driver('google')->redirect();
        }
        elseif ($provider = 'twitter') {
            return Socialite::driver('twitter')->redirect();
        }
        elseif ($provider = 'linkedin'){
            return Socialite::driver('linkedin')->redirect();
        }
        else {
            return response()->view('errors.505');
        }       

    }

    /**
     * Obtain the user information from GitHub.
     *
     * @return \Illuminate\Http\Response
     */
    public function handleProviderCallback($provider, Request $request)
    {
        
        if ($provider == 'github'){
            $githubUser = Socialite::driver('github')->user();
            $user = User::where('provider_id', $githubUser->getId())->first();
            if (!$user){
                $user = User::create([
                    'email' => $githubUser->getEmail(),
                    'name' => is_null($githubUser->getName()) ? 'N/A'  : $githubUser->getName(),
                    'provider_id' => $githubUser->getId(),
                    'provider' => $provider
                    ]);
                    redirect('/download');
            } 
        }
        elseif ($provider = 'facebook'){

        }
        elseif ($provider = 'google'){

        }
        elseif ($provider = 'twitter') {

        }
        elseif ($provider = 'linkedin'){

        }
        else {
            return response()->view('errors.505');
        }
        
        Auth::login($user, true);
        $request->session()->flash('status', 'prompt-modal');
        return redirect(session('link'));
        // $user->token;
    }

}
