from car import Car
from account import Account
from uberX import UberX
from uberPool import UberPool

if __name__ == "__main__":
  print("Hola mundo")

  uberX = UberX("AMJ323", Account ("Andres Herrera", "Ds545df"), "Chevrolet", "Spark")
  print(vars(uberX))
  print(vars(uberX.driver))
