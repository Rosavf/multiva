<?php

$json = file_get_contents('../app/config/config.json');

$object = json_decode($json);

//APP
define('APP_DIR',dirname(dirname(__FILE__)));

//URL
define('APP_URL',$object->app->urlroute);

define('SITE_NAME',$object->app->sitename);

define('SIGNATURE',$object->app->signature);



?>