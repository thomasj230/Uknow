<?php
/**
 * Created by PhpStorm.
 * User: thomas
 * Date: 12/04/15
 * Time: 10:51
 */

namespace Uknow\PlatformBundle\Services;

class Liste {

    public function structure($listDonnees){
        $json = file_get_contents('bundles/uknowplatform/json/structure.json');
        $jsonStructure = json_decode($json, true);
        foreach($listDonnees as $donnees){
            foreach($jsonStructure as $domain){
                if(substr($donnees->getStructure(), 0, 3) == $domain['domain']){
                    $donnees->setDomain($domain['domain']);
                    foreach($domain['subjects'] as $subject){
                        if(substr($donnees->getStructure(), 0, 6) == $subject['subject']){
                            $donnees->setSubject($subject['subject']);
                            foreach($subject['themes'] as $theme){
                                if(substr($donnees->getStructure(), 0, 9) == $theme['theme']){
                                    $donnees->setTheme($theme['theme']);
                                    foreach($theme['chapters'] as $chapter){
                                        if(substr($donnees->getStructure(), 0, 12) == $chapter){
                                            $donnees->setChapter($chapter);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return $listDonnees;
    }
}