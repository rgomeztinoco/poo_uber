from car import Car

if __name__ == "__main__":
  print("Hola mundo")
  car = Car()
  car.license = "AMSdf23"
  car.driver = "Andres Herrera"
  print(vars(car))

  car2 = Car()
  car2.license = "Asdasd"
  car2.driver = "Pancho Lopez"
  print(vars(car2))