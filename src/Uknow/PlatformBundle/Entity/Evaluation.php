<?php

namespace Uknow\PlatformBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Evaluation
 */
class Evaluation
{
    /**
     * @var integer
     */
    private $id;

    /**
     * @var string
     */
    private $copie;

    /**
     * @var \DateTime
     */
    private $date;

    /**
     * @var string
     */
    private $structure;

    /**
     * @var string
     */
    private $note;


    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set copie
     *
     * @param string $copie
     * @return Evaluation
     */
    public function setCopie($copie)
    {
        $this->copie = $copie;

        return $this;
    }

    /**
     * Get copie
     *
     * @return string 
     */
    public function getCopie()
    {
        return $this->copie;
    }

    /**
     * Set date
     *
     * @param \DateTime $date
     * @return Evaluation
     */
    public function setDate($date)
    {
        $this->date = $date;

        return $this;
    }

    /**
     * Get date
     *
     * @return \DateTime 
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * Set structure
     *
     * @param string $structure
     * @return Evaluation
     */
    public function setStructure($structure)
    {
        $this->structure = $structure;

        return $this;
    }

    /**
     * Get structure
     *
     * @return string 
     */
    public function getStructure()
    {
        return $this->structure;
    }

    /**
     * Set note
     *
     * @param string $note
     * @return Evaluation
     */
    public function setNote($note)
    {
        $this->note = $note;

        return $this;
    }

    /**
     * Get note
     *
     * @return string 
     */
    public function getNote()
    {
        return $this->note;
    }
}
