<?php

require_once 'Account.php';
require_once 'Car.php';

$car = new Car("ASK123", new Account("Pedro Picapiedra", "ANDA876"));

echo "<pre>";
var_dump( $car->License() );
var_dump( $car->Driver() );