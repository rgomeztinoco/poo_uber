package Java;

public class Main {
  public static void main(String[] args) {

    UberX uberX = new UberX("AMQ123", new Account("Juan Pancracio", "1235464521"), "Chevrolet", "Spark");
    uberX.setPassenger(4);
    uberX.printDataCar();

    UberVan uberVan = new UberVan("HASDF123", new Account("Andrea Herrera", "5468781"));
    uberVan.setPassenger(6);
    uberVan.printDataCar();
  }
}
