<?php
namespace App\Repositories;

use App\Contracts\ContactContract;
use App\Models\Contact;
use App\Notifications\ContactNotification;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Notification;

class ContactRepository extends BaseRepository implements ContactContract{
    public $contactRepository ;

    public function __construct(Contact $model)
    {
        parent::__construct($model);
        $this->model = $model;

    }
   
    public function sendContactEmail(array $params)
    {
        $contact = collect($params);
        try {
            Notification::route('mail', [
                'contact@mameribj.com' => 'MAMERI SARL',
            ])
            ->notify((new ContactNotification($contact->all()))->delay(now()->addMinutes(1)));

            return $contact;
        } catch (ModelNotFoundException $e) {

            throw new ModelNotFoundException($e);
        }
    }
}
