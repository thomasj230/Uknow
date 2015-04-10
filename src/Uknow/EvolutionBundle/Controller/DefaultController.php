<?php

namespace Uknow\EvolutionBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction($name)
    {
        return $this->render('UknowEvolutionBundle:Default:index.html.twig', array('name' => $name));
    }
}
