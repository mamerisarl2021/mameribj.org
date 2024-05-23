<?php
namespace App\Providers;

use App\Contracts\BaseContract;
use App\Contracts\ContactContract;
use App\Repositories\BaseRepository;
use App\Repositories\ContactRepository;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider 
{
    protected $repositories = [
        BaseContract::class => BaseRepository::class,
        ContactContract::class => ContactRepository::class,
    ];

    public function register()
    {
        foreach ($this->repositories as $interface => $implementation) {
            $this->app->bind($interface, $implementation);
        }
    }
}