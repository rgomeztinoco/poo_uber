<?php

class Car {
  public $id;
  public $license;
  public $driver;
  private $passenger;

  public function __construct($license, Account $driver) {
    $this->license = $license;
    $this->driver = $driver;
  }

  public function License() {
    return $this->license;
  }

  public function Driver(){
    return $this->driver;
  }

  public function printDataCar() {
    echo "<h4>License:</h4>" .$this->license. "<br/>";
    echo "<h4>Driver:</h4>" .$this->driver->name. "<br/>";
  }
}