<?php

require_once('../app/controllers/control.php');

class dashboard extends control{

    public function __construct(){

        $this->page('templates','head');

        $this->page('templates','feet');
        
    }

}

?>