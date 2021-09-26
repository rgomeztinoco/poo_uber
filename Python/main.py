from car import Car
from account import Account

if __name__ == "__main__":
  print("Hola mundo")

  car = Car("AMSdf23", Account ("Andres Herrera", "Ds545df"))
  print(vars(car))
  print(vars(car.driver))

  car2 = Car("SDYG215", Account("Pancho Lopez", "285sad"))
  print(vars(car2))
  print(vars(car2.driver))