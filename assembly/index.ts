import { BMI, UpdatedBMI } from "./model";

// export the create method. This acts like an endpoint that we'll be able to call from our web app.

export function createBMI(weight: f32, height: f32): BMI {

  return BMI.calculate(weight, height);
}

export function getBMIById(id: u32): BMI {
  return BMI.findBMIById(id);
}

export function listAllBMI(offset: u32, limit: u32 = 10): BMI[] {
  return BMI.findAllBMI(offset, limit);
}

export function updateBMI(id: u32, updates: UpdatedBMI): BMI {
  return BMI.findBMIByIdAndUpdate(id, updates);
}

export function delBMI(id: u32): void {
  BMI.findBMIByIdAndDelete(id);
}
