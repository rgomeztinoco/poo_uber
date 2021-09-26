package Java;

public class Main {
  public static void main(String[] args) {
    System.out.println("Hola Mundo");

    Car car = new Car("AMQ123", new Account("Juan Pancracio", "1235464521"));
    car.passenger =4;
    car.printDataCar();

    Car car2 = new Car("HASDF123", new Account("Andrea Herrera", "5468781"));
    car2.passenger = 3;
    car2.printDataCar();
  }
}
