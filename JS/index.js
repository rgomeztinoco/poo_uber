import Account from "./Account.js";
import UberX from "./UberX.js";
import UberVan from "./UberVan.js";

// Para hacerlo con require (quitar el 'type' : 'modules', del archivo package.json)
// const Account = require('./Account')
// const Car = require('./Car')

let uberX = new UberX(
  "FDR232",
  new Account("Andres Herrera", "AND54R"),
  "Chevrolet",
  "Spark"
);
uberX.id = "UberX 232478321";
uberX.passenger = 4;
uberX.printDataCar();

let uberVan = new UberVan(
  "DGC548",
  new Account("Francisco Peralta", "FR56ALF")
);
uberVan.id = "Ubervan 45432124";
uberVan.passenger = 6;
uberVan.printDataCar();
