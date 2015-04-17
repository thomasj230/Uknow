<?php
/**
 * Created by PhpStorm.
 * User: thomas
 * Date: 17/04/15
 * Time: 16:53
 */

namespace Uknow\PlatformBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DataController extends Controller{

    public function coursAction()
    {
        $listDonnees = $this->getDoctrine()
            ->getManager()
            ->getRepository('UknowPlatformBundle:Donnees')
            ->findAll();

        return $this->render('UknowPlatformBundle:data:cours.html.twig', array(
            'listDonnees' => $listDonnees,
        ));
    }

    public function evaluationAction()
    {
        $listEvaluation = $this->getDoctrine()
            ->getManager()
            ->getRepository('UknowPlatformBundle:Evaluation')
            ->findAll();


        return $this->render('UknowPlatformBundle:data:evaluation.html.twig', array(
            'listEvaluation' => $listEvaluation,
        ));
    }

    public function forumAction()
    {
        $listQuestion = $this->getDoctrine()
            ->getManager()
            ->getRepository('UknowPlatformBundle:Question')
            ->findAll();

        return $this->render('UknowPlatformBundle:data:forum.html.twig', array(
            'listQuestion' => $listQuestion,
        ));
    }
}