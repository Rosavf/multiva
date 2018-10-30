<?php

//Manager Includes all classes that app needs and initializes the core

require_once('../app/controllers/login.php');
require_once('../app/config/config.php');
require_once('core.php');
require_once('router.php');
$core = new core();

?>