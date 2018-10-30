<?php

class router {

    //by default
    private $controller='dashboard';
    private $method;
    private $parameters=[];

    // read and cuts the url in 3
    public function readUrl(){

        if(isset($_GET['url'])){

            $url=rtrim($_GET['url'],'/');
            $url=filter_var($url,FILTER_SANITIZE_URL);
            $url=explode('/',$url);
            $this->controller = $url[0]; unset($url[0]);
           if(isset($url[1])){$this->method = $url[1];  unset($url[1]);
            $this->parameters = $url ? array_values($url) : [];
            unset($url[2]);
           }

        }

    }

    // load controller class
    public function loadController(){
    
        $route='../app/controllers/'.$this->controller.'.php';
    
        if(file_exists($route)){
    
            require_once($route);

            $this->controller = new $this->controller;

        }
    
        else{

            echo('not found');
       
        }
        
    }

    // load method with params
    public function loadMethod(){

        if(method_exists($this->controller,$this->method)){

            call_user_func_array([$this->controller,$this->method],$this->parameters);

        }

    }

    public function nullify(){

        $this->controller=null;
        $this->method = null;
        $this->parameters = [];
    
    }

}

?>

