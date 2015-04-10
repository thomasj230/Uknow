<?php

namespace Uknow\PlatformBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class HomeController extends Controller
{
    public function homeAction()
    {
        return $this->render('UknowPlatformBundle::layout.html.twig');
    }

    public function navAction()
    {
        return $this->render('UknowPlatformBundle:header:nav.html.twig');
    }

    public function profilAction()
    {
        return $this->render('UknowPlatformBundle:header:profil.html.twig');
    }
}
