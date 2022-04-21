// The entry file of your WebAssembly module.

import { BMI, PartialBMI } from "./model";

// export the create method. This acts like an endpoint
// that we'll be able to call from our web app.

export function create(task: string, weight: i64, height: f64): BMI {
  // use the Todo class to persist the todo data
  return BMI.calculate(task, weight, height);
}

export function getById(id: u32): BMI {
  return BMI.findById(id);
}

export function get(offset: u32, limit: u32 = 10): BMI[] {
  return BMI.find(offset, limit);
}

export function update(id: u32, updates: PartialBMI): BMI {
  return BMI.findByIdAndUpdate(id, updates);
}

export function del(id: u32): void {
  BMI.findByIdAndDelete(id);
}