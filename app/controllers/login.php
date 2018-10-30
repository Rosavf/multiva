<?php

require_once('../app/controllers/control.php');

class login extends control{

    public function __construct(){

        $this->page('other','login');
        
    }

}

?>