package Java;

import java.util.ArrayList;
import java.util.Map;

class UberVan extends Car {
  Map<String, Map<String,Integer>> typeCarAccepted;
  ArrayList<String> seatsMaterial;

  public UberVan(String license, Account driver, Map<String, Map<String, Integer>> typeCarAccepted, ArrayList<String> seatsMaterial) {
    super(license, driver);
    this.typeCarAccepted = typeCarAccepted;
    this.seatsMaterial = seatsMaterial;
  }

  public UberVan(String license, Account driver) {
    super(license, driver);
  }

  @Override
  public void setPassenger(Integer passenger) {
    if(passenger == 6) {
      this.passenger = passenger;
    } else {
      System.out.println("Necesitas asignar 6 pasajeros");
    }
  }
}