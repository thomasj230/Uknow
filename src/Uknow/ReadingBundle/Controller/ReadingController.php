<?php
/**
 * Created by PhpStorm.
 * User: thomas
 * Date: 21/04/15
 * Time: 21:26
 */

namespace Uknow\ReadingBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class ReadingController extends Controller{

    public function lectureAction($id){

        $serviceListe = $this->container->get('uknow_reading.liste');
        $em = $this->getDoctrine()->getManager();

        if (null === $this->getUser()) {
            $listReading = $id;
        } else {
            $compte = $this->getDoctrine()
                ->getManager()
                ->getRepository('UknowUtilisateurBundle:Compte')
                ->find($this->getUser()->getId());
            $compte->setPagesOuvertes($serviceListe->addDonneesReading($compte->getPagesOuvertes(), $id));
            $em->persist($compte);
            $em->flush();
            $listReading = $compte->getPagesOuvertes();
        }

        $listDonnees = $listDonnees = $this->getDoctrine()
            ->getManager()
            ->getRepository('UknowPlatformBundle:Donnees')
            ->findAll();
        $listDonnees = $serviceListe->listDonneesReading($listDonnees, $listReading);

        $serviceStructure = $this->container->get('uknow_platform.liste');
        $listDonnees = $serviceStructure->structure($listDonnees);

        return $this->render('UknowReadingBundle::reading.html.twig', array(
            'listDonnees' => $listDonnees,
            'id' => $id,
        ));
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