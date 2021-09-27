<?php
class UberX extends Car {
  public $brand;
  public $model;

  public function __construct($license, $driver, $brand, $model) {
    parent :: __construct($licennse, $driver);
    $this->license = license;
    $this->driver = driver;
  }
}