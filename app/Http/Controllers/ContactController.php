<?php

namespace App\Http\Controllers;

use App\Contracts\ContactContract;
use Illuminate\Http\Request;

class ContactController extends BaseController
{
    public $contactRepository;
    public function __construct(ContactContract $contactRepository)
    {
        $this->contactRepository = $contactRepository;
    }
    public function sendMailMessage(Request $request){

        $request->validate([
            'nom' => 'required',
            'email' => 'email|required',
            'message' => 'required'
        ]);
        $data = $this->contactRepository->sendContactEmail($request->all());
        return  $this->sendResponse($data,'Message envoyé avec succès.');

    }
}
