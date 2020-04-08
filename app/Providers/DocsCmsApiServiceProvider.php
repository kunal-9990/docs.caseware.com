<?php

namespace App\Providers;

use App\Services\DocsCmsApi;
use Illuminate\Support\ServiceProvider;

class DocsCmsApiServiceProvider extends ServiceProvider
{

    /**
     * Register the application services.
     *
     * @return void
     */
     public function register()
 	{
        $this->app->singleton(DocsCmsApi::class, function ($app) {
            return new DocsCmsApi(config('api.caseware'));
        });
    }

    /**
    * Get the services provided by the provider.
    *
    * @return array
    */
    public function provides()
    {
       return [DocsCmsApi::class];
    }
}
