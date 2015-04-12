<?php
/**
 * Created by PhpStorm.
 * User: thomas
 * Date: 12/04/15
 * Time: 10:51
 */

namespace Uknow\PlatformBundle\Services;

class Liste {

    public function domaine(){
        $json = file_get_contents('json/domaines.json');
        $jsonDomaine = json_decode($json, true);
        return $jsonDomaine;
    }

    public function matiere(){
        $listMatiere = array();
        $n = 0;
        $json = file_get_contents('json/domaines.json');
        $jsonDomaine = json_decode($json, true);
        $json = file_get_contents('json/matieres.json');
        $jsonMatiere = json_decode($json, true);
        for( $j = 0 ; $j < count($jsonDomaine) ; $j++ ){
            for( $i = 0 ; $i < count($jsonMatiere[$jsonDomaine[$j]['lien']]) ; $i++ ){
                $listMatiere[$jsonDomaine[$j]['nom']][$n]['nom'] = $jsonMatiere[$jsonDomaine[$j]['lien']][$i]['nom'];
                $listMatiere[$jsonDomaine[$j]['nom']][$n]['lien'] = $jsonMatiere[$jsonDomaine[$j]['lien']][$i]['lien'];
                $n++;
            }
        }
        return $listMatiere;
    }

    public function theme(){
        $listTheme = array();
        $json = file_get_contents('json/domaines.json');
        $jsonDomaine = json_decode($json, true);
        $json = file_get_contents('json/matieres.json');
        $jsonMatiere = json_decode($json, true);
        $json = file_get_contents('json/themes.json');
        $jsonTheme = json_decode($json, true);
        for( $i = 0 ; $i < count($jsonDomaine) ; $i++ ){
            for( $j = 0 ; $j < count($jsonMatiere[$jsonDomaine[$i]['lien']]) ; $j++ ){
                for( $k = 0 ; $k < count($jsonTheme[$jsonDomaine[$i]['lien']][$jsonMatiere[$jsonDomaine[$i]['lien']][$j]['lien']]) ; $k++ ){
                    $listTheme
                    [$jsonDomaine[$i]['nom']]
                    [$jsonMatiere[$jsonDomaine[$i]['lien']][$j]['nom']]
                    []['nom'] = $jsonTheme
                    [$jsonDomaine[$i]['lien']]
                    [$jsonMatiere[$jsonDomaine[$i]['lien']][$j]['lien']]
                    [$k]['nom'];

                    $listTheme[$jsonDomaine[$i]['nom']]
                    [$jsonMatiere[$jsonDomaine[$i]['lien']][$j]['nom']]
                    []['lien'] = $jsonTheme
                    [$jsonDomaine[$i]['lien']]
                    [$jsonMatiere[$jsonDomaine[$i]['lien']][$j]['lien']]
                    [$k]['lien'];
                }
            }
        }
        return $listTheme;
    }

    public function chapitre(){
        $listChapitre = array();
        $json = file_get_contents('json/domaines.json');
        $jsonDomaine = json_decode($json, true);
        $json = file_get_contents('json/matieres.json');
        $jsonMatiere = json_decode($json, true);
        $json = file_get_contents('json/themes.json');
        $jsonTheme = json_decode($json, true);
        $json = file_get_contents('json/chapitres.json');
        $jsonChapitre = json_decode($json, true);
        for( $i = 0 ; $i < count($jsonDomaine) ; $i++ ){
            for( $l = 0 ; $l < count($jsonMatiere[$jsonDomaine[$i]['lien']]) ; $l++ ){
                for( $j = 0 ; $j < count($jsonTheme[$jsonDomaine[$i]['lien']][$jsonMatiere[$jsonDomaine[$i]['lien']][$l]['lien']]) ; $j++ ){
                    for( $k = 0 ; $k < count($jsonChapitre[$jsonDomaine[$i]['lien']][$jsonMatiere[$jsonDomaine[$i]['lien']][$l]['lien']][$jsonTheme[$jsonDomaine[$i]['lien']]  [$jsonMatiere[$jsonDomaine[$i]['lien']][$l]['lien']][$j]['lien']]) ; $k++ ){
                        $listChapitre
                        [$jsonDomaine[$i]['nom']]
                        [$jsonMatiere[$jsonDomaine[$i]['lien']][$l]['nom']]
                        [$jsonTheme[$jsonDomaine[$i]['lien']] [$jsonMatiere[$jsonDomaine[$i]['lien']][$l]['lien']][$j]['nom']]
                        []['nom']
                            = $jsonChapitre
                        [$jsonDomaine[$i]['lien']]
                        [$jsonMatiere[$jsonDomaine[$i]['lien']][$l]['lien']]
                        [$jsonTheme[$jsonDomaine[$i]['lien']]  [$jsonMatiere[$jsonDomaine[$i]['lien']][$l]['lien']][$j]['lien']]
                        [$k]['nom'];

                        $listChapitre
                        [$jsonDomaine[$i]['nom']]
                        [$jsonMatiere[$jsonDomaine[$i]['lien']][$l]['nom']]
                        [$jsonTheme[$jsonDomaine[$i]['lien']][$jsonMatiere[$jsonDomaine[$i]['lien']][$l]['lien']][$j]['nom']]
                        []['lien']
                            = $jsonChapitre
                        [$jsonDomaine[$i]['lien']]
                        [$jsonMatiere[$jsonDomaine[$i]['lien']][$l]['lien']]
                        [$jsonTheme[$jsonDomaine[$i]['lien']][$jsonMatiere[$jsonDomaine[$i]['lien']][$l]['lien']][$j]['lien']]
                        [$k]['lien'];
                    }
                }
            }
        }
        return $listChapitre;
    }

    public function niveau(){
        $json = file_get_contents('json/niveaux.json');
        $jsonNiveaux = json_decode($json, true);
        return $jsonNiveaux;
    }
}