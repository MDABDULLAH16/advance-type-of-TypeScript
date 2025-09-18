{
  type TelWalA = {
    bike: string;
    car: string;
    ship: string;
  };

  type checkVehicle<T> = T extends keyof TelWalA ? string : false;

  type hasCar = checkVehicle<"cars">;
}
