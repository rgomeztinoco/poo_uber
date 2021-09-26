<?php

require_once 'Account.php';

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
}