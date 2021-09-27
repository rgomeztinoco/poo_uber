<?php
class UberVan extends Car {
  public $typeCarAccepted;
  public $seatsMaterial;

  public function __construct($license, $driver, $typeCarAccepted, $seatsMaterial) {
    parent :: __construct($licennse, $driver);
    $this->typeCarAccepted = $typeCarAccepted;
    $this->seatsMaterial = $seatsMaterial;
  }
}