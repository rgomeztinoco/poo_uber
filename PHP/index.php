<?php

require_once("Account.php");
require_once("Car.php");
require_once("UberX.php");
require_once("UberPool.php");
require_once("UberVan.php");

$uberX = new UberX("CVH435", new Account("Julio Herrera", "AND543"), "Chevrolet", "Spark");
$uberX->setPassenger(4);
$uberX->setId("UberX 5451254");
$uberX->printDataCar();

$uberVan = new UberVan("UBPL946", new Account("Franco Vega", "FR3455Y"));
$uberVan->setPassenger(6);
$uberVan->setId("UberVan 5451254");
$uberVan->printDataCar();