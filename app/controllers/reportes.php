<?php

require_once('../app/controllers/control.php');

class reportes extends control{

    public function multiservicios(){

        $this->page('templates','head');

        $this->page('content','table1');

        $this->page('templates','feet');

    }

    public function casa(){

        $this->page('templates','head');

        $this->page('content','table1');


        $this->page('templates','feet');
        
    }

    public function banco(){

        $this->page('templates','head');

        $this->page('content','table1');

        $this->page('templates','feet');

        
    }

    public function cecos(){

        $this->page('templates','head');

        $this->page('content','table1');

        $this->page('templates','feet');


    }

    public function acumuladocasa(){

        $this->page('templates','head');

        $this->page('content','table1');

        $this->page('templates','feet');

    }

    public function acumuladobanco(){

        $this->page('templates','head');        
        
        $this->page('content','table1');

        $this->page('templates','feet');

    }

}

?>