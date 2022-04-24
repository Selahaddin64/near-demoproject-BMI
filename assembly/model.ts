import { PersistentUnorderedMap, math, Context } from "near-sdk-as";
import { AccountId } from "../utils"

// Think of this PersistentUnorderedMap like a database table. We'll use this to persist and retrieve data.
export const bmis = new PersistentUnorderedMap<u32, BMI>("BMI");

// It contain static methods to read and write data from and to the bmis PersistentUnorderedMap.

// PartialTodo class
@nearBindgen
export class UpdatedBMI {
  output: string;
  updated: bool;
  weight: f32;
  height: f32;
}
@nearBindgen
export class BMI {
  id: u32;
  output: string;
  updated: bool;
  accountname: AccountId;
  weight: f32;
  height: f32;

  constructor(output: string, weight: f32, height: f32) {
    this.id = math.hash32<string>(output);
    this.output = output;
    this.updated = false;
    this.weight = weight;
    this.height = height;
    this.accountname = Context.sender;
  }

  static calculate(weight: f32, height: f32): BMI{

    let bmi = weight / (height * height);
    let output = "";

    assert(weight > 0 && weight < 727, "Weight must be 0 between 720");
    assert(height > 0 && height < 2.51, "Height must be 0 between 2.51");

    if(bmi < 18){
      output = "Hello " + Context.sender + " ! " + "Your BMI is " + bmi.toString() + " = " + "You are Underweight";
    }

    if(bmi >= 18 && bmi < 25){
      output = "Hello " + Context.sender + " ! " + "Your BMI is " + bmi.toString() + " = " + "You are Normal";
    }

    if(bmi >= 25 && bmi < 30){
      output = "Hello " + Context.sender + " ! " + "Your BMI is " + bmi.toString() + " = " + "You are Overweight";
    }

    if(bmi >= 30 && bmi < 40){
      output = "Hello " + Context.sender + " ! " + "Your BMI is " + bmi.toString() + " = " + "You are Obesity";
    }

    if(bmi > 40){
      output = "Hello " + Context.sender + " ! " + "Your BMI is " + bmi.toString() + " = " + "You are Severely Obese";
    }

    let result = new BMI(output, weight, height);

    bmis.set(result.id, result);

    return result;
  }

  static findBMIById(id: u32): BMI {
    // Lookup a bmi in the PersistentUnorderedMap by its id. This is like a SELECT * FROM bmis WHERE id=?
    return bmis.getSome(id);

  }

  static findAllBMI(offset: u32, limit: u32): BMI[] {
    // the PersistentUnorderedMap values method will takes two parameters: start and end. we'll start at the offset (skipping all bmi's before the offset) and collect all bmi's until we reach the offset + limit bmi. For example, if offset is 10 and limit is 3 then this would return the 10th, 11th, and 12th bmi.

    return bmis.values(offset, offset + limit);

  }

  static findBMIByIdAndUpdate(id: u32, updates: UpdatedBMI): BMI {
    // find a bmi by its id
    let result = this.findBMIById(id);
    
    // update the bmi in-memory
    result.updated = true;
    result.weight = updates.weight;
    result.height = updates.height;
    
    let updatedbmi = updates.weight / (updates.height * updates.height);

    if(updatedbmi < 18){
      updates.output = "Hello " + Context.sender + " ! " + "Your new BMI is " + updatedbmi.toString() + " = " + "You are Underweight";
    }

    if(updatedbmi >= 18 && updatedbmi < 25){
      updates.output = "Hello " + Context.sender + " ! " + "Your new BMI is " + updatedbmi.toString() + " = " + "You are Normal";
    }

    if(updatedbmi >= 25 && updatedbmi < 30){
      updates.output = "Hello " + Context.sender + " ! " + "Your new BMI is " + updatedbmi.toString() + " = " + "You are Overweight";
    }

    if(updatedbmi >= 30 && updatedbmi < 40){
      updates.output = "Hello " + Context.sender + " ! " + "Your new BMI is " + updatedbmi.toString() + " = " + "You are Obesity";
    }

    if(updatedbmi > 40){
      updates.output = "Hello " + Context.sender + " ! " + "Your new BMI is " + updatedbmi.toString() + " = " + "You are Severely Obese";
    }

    result.output = updates.output;

    // persist the updated bmi
    bmis.set(id, result);

    return result;

  }

  static findBMIByIdAndDelete(id: u32): void {
    bmis.delete(id);
  }
}