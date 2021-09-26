package Java;

public class Main {
  public static void main(String[] args) {
    System.out.println("Hola Mundo");
    Car car = new Car();
    car.license = "AMQ123";
    car.driver = "Juan Pancracio";
    car.passenger =4;
    car.printDataCar();
    Car car2 = new Car();
    car2.license = "HASDF123";
    car2.driver = "Andrea Herrera";
    car2.passenger = 3;
    System.out.println("Car License: " + car2.license);
  }
}
