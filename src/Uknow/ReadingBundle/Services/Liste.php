<?php
/**
 * Created by PhpStorm.
 * User: thomas
 * Date: 12/04/15
 * Time: 10:51
 */

namespace Uknow\ReadingBundle\Services;

class Liste {

    public function addDonneesReading($listReading, $id){

        $exist = false;
        $listReading = explode('/', $listReading);
        for ($i = 0; $i < count($listReading); $i++) {
            if ($listReading[$i] == $id) {
                $exist = true;
            }
        }
        $listReading = implode('/', $listReading);
        if(!$exist){
            $listReading = $listReading . '/' . $id;
        }
        return $listReading;
    }

    public function listDonneesReading($listDonnees, $listReading){
        $listReading = explode('/', $listReading);
        $listDonneesAfficher = array();
        for ($i = 0; $i < count($listReading); $i++) {
            for($j = 0; $j < count($listDonnees); $j++) {
                if($listReading[$i] == $listDonnees[$j]->getId()){
                    $listDonneesAfficher[] = $listDonnees[$j];
                }
            }
        }

        return $listDonneesAfficher;
    }
}