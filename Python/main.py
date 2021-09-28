from car import Car
from account import Account
from uberVan import UberVan
from uberX import UberX
from uberPool import UberPool

if __name__ == "__main__":
  print("Hola mundo")

  uberX = UberX("AMJ323", Account ("Andres Herrera", "Ds545df"), "Chevrolet", "Spark")
  uberX.passenger = 4
  uberX.printDataCar()

  uberVan = UberVan("CYW347", Account ("Pancho Lopez", "Ph35LLpz"))
  uberVan.passenger = 6
  uberVan.printDataCar()