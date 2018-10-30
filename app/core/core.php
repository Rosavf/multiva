
<?php

class core {

    private $router;

    public function __construct(){

        $this->router=new router();

        $this->router->readUrl();

        $this->router->loadController();

        $this->router->loadMethod();

    }

}



?>