<?php

namespace Apsonex\SaasTheme;

use Illuminate\Support\ServiceProvider;

class SaasThemeServiceProvider extends ServiceProvider
{

    public function register()
    {
        $this->mergeConfigFrom(
            __DIR__ . '/../config/saas-theme.php', 'saas-theme'
        );
    }

    public function boot()
    {
        //$this->loadMigrationsFrom(__DIR__ . '/../database/migrations');

        $this->publishes([
            __DIR__ . '/../config/saas-theme.php' => config_path('saas-theme.php'),
        ]);
    }

}
