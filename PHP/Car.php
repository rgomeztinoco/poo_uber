<?php

class Car {
  public $id;
  public $license;
  public $driver;
  protected $passenger;

  public function __construct($license, Account $driver) {
    $this->license = $license;
    $this->driver = $driver;
  }

  public function getPassenger() {
    return $this.passenger;
  }

  public function setPassenger($passenger) {
    if ($passenger == 4) {
      $this->passenger = $passenger;
    } else {
      echo "Necesitas asignar 4 pasajeros";
    }
  }

  public function setId($id) {
    $this->id = $id;
  }

  public function printDataCar() {
    echo "
    <h3>$this->id</h3>
    <h4>
    License: $this->license </br>
    Driver: {$this->driver->name} </br>
    Pasajeros: $this->passenger </br>
    </h4>";
  }
}