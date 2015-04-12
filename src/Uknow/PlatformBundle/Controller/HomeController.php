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

    public function boardAction()
    {
        $serviceListe = $this->container->get('uknow_platform.liste');
        return $this->render('UknowPlatformBundle:board:board.html.twig', array(
            'listDomaine' => $serviceListe->domaine(),
            'listMatiere' => $serviceListe->matiere(),
            'listTheme' => $serviceListe->theme(),
            'listChapitre' => $serviceListe->chapitre(),
            'listNiveau' => $serviceListe->niveau(),
        ));
    }
}
