<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Http\Controllers\Controller;
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
    public function redirectToProvider()
    {
        return Socialite::driver('github')->redirect();
    }

    /**
     * Obtain the user information from GitHub.
     *
     * @return \Illuminate\Http\Response
     */
    public function handleProviderCallback($provider)
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
            } else {
                echo "found github user:";
                dd($user);
            }   
        }
        // $user->token;
    }

}
