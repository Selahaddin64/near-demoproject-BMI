import { BMI, UpdatedBMI } from "./model";

// export the create method. This acts like an endpoint that we'll be able to call from our web app.

// near call $CONTRACT create '{"weight":50.1, "height":1.70}' --accountId bay_odyolog.testnet

export function createBMI(weight: f32, height: f32): BMI {

  return BMI.calculate(weight, height);
}

// near view $CONTRACT getBMIById '{"id": }'

export function getBMIById(id: u32): BMI {
  return BMI.findBMIById(id);
}

//  near view $CONTRACT listAllBMI '{"offset":0}' --accountId bay_odyolog.testnet

export function listAllBMI(offset: u32, limit: u32 = 10): BMI[] {
  return BMI.findAllBMI(offset, limit);
}

// near call $CONTRACT update '{"id":, "updates":{"weight":61.1, "height":1.75} }' --accountId bay_odyolog.testnet

export function updateBMI(id: u32, updates: UpdatedBMI): BMI {
  return BMI.findBMIByIdAndUpdate(id, updates);
}

// near call $CONTRACT del '{"id": }' --accountId bay_odyolog.testnet
export function delBMI(id: u32): void {
  BMI.findBMIByIdAndDelete(id);
}
