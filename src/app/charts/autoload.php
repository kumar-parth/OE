<?php

include_once 'OEApiHandler.interface.php';

function startsWith($haystack, $needle) {
    // search backwards starting from haystack length characters from the end
    return $needle === "" || strrpos($haystack, $needle, -strlen($haystack)) !== FALSE;
}

function autoload($className) {
	#echo "\n" . $className . " including";
    $filename = $className . ".class.php";
    if(startsWith($className, "OE")) {
        include_once $filename;
    }
}

spl_autoload_register("autoload");