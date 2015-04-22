<?php
/**
 * Created by PhpStorm.
 * User: thomas
 * Date: 21/04/15
 * Time: 21:26
 */

namespace Uknow\ReadingBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class ReadingController extends Controller{

    public function lectureAction($id, Request $request){

        return $this->render('UknowReadingBundle::reading.html.twig');
    }

    public function navAction()
    {
        return $this->render('UknowReadingBundle:header:nav.html.twig');
    }

    public function profilAction()
    {
        return $this->render('UknowReadingBundle:header:profil.html.twig');
    }
}