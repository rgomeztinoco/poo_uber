<?php

require_once("Account.php");
require_once("Car.php");
require_once("UberX.php");
require_once("UberPool.php");

$uberX = new UberX("CVH435", new Account("Julio Herrera", "AND543"), "Chevrolet", "Spark");
$uberX->printDataCar();

$uberPool = new UberPool("UBPL946", new Account("Franco Vega", "FR3455Y"), "Dodge", "Attitude");
$uberPool->printDataCar();