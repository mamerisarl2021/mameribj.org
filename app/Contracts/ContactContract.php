<?php
namespace App\Contracts;
interface ContactContract 
{
    /**
     * Envoyer un email
     * @param array $params
     * @return mixed
     */
    public function sendContactEmail(array $params);
}