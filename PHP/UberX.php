<?php
require_once('Car.php');

class UberX extends Car {
  public $brand;
  public $model;

  public function __construct($license, $driver, $brand, $model) {
    parent :: __construct($license, $driver);
    $this->brand = $brand;
    $this->model = $model;
  }
  
  public function printDataCar() {
    parent :: printDataCar();
    echo "
    <h4>
    Modelo: $this->model </br>
    Marca: $this->brand </br>
    </h4>";
  }
}