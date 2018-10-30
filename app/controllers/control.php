<?php

//controlador padre
class control {

    public function page($folder,$name){

        $file='../app/views/'.$folder.'/'.$name.'.php';

        if(file_exists($file)){

            require_once($file);

        }

        else{

            require_once('../app/views/error.php');

        }

    }

}

?>