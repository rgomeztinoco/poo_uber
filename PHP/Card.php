<?php
require_once('Payment.php');

class Card extends Payment {
  public $cardNumber;
  public $cardDate;
  public $cvv;

  public function __construct($id, $cardNumber, $cardDate, $cvv) {
    parent :: __construct($id);
    $this->cardNumber = $cardNumber;
    $this->cardDate = $cardDate;
    $this->cvv = $cvv;
  }
}