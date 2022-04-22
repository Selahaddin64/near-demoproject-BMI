import { PersistentUnorderedMap, math } from "near-sdk-as";

// Think of this PersistentUnorderedMap like a database table.
// We'll use this to persist and retrieve data.
export const bmis = new PersistentUnorderedMap<u32, BMI>("BMI");

// export function calculate(weight: i32, height: i32): i32 {
//   return weight / height ** 2;
// }

// PartialTodo class
@nearBindgen
export class PartialBMI {
 task: string;
 done: bool;
}
// Think of this like a model class in something like mongoose or
// sequelize. It defines the shape or schema for our data. It will
// also contain static methods to read and write data from and to
// the bmis PersistentUnorderedMap.
@nearBindgen
export class BMI {
  id: u32;
  task: string;
  done: bool;
  weight: f32;
  height: f32;

  constructor(task: string, weight: f32, height: f32) {
    this.id = math.hash32<string>(task);
    this.task = task;
    this.done = false;
    this.weight = weight;
    this.height = height;
  }

  static calculate(task: string, weight: f32, height: f32): BMI{
    // weight / height ** 2
    let bmi = weight / (height * height);

    if(bmi < 18){
      task = "Zayıf" + " " + bmi.toString();
    }

    if(bmi >= 18 && bmi < 25){
      task = "Normal" + " " + bmi.toString();
    }

    if(bmi >= 25 && bmi < 30){
      task = "Kilolu" + " " + bmi.toString();
    }

    if(bmi >= 30 && bmi < 40){
      task = "Obez" + " " + bmi.toString();
    }

    if(bmi > 40){
      task = "İleri Derece Obez" + " " + bmi.toString();
    }

    let bmi2 = new BMI(task, weight, height);

    bmis.set(bmi2.id, bmi2);

    return bmi2;
  }

  static findById(id: u32): BMI {
    // Lookup a bmi in the PersistentUnorderedMap by its id.
    // This is like a SELECT * FROM bmis WHERE id=?
    return bmis.getSome(id);
  }

  static find(offset: u32, limit: u32): BMI[] {
    return bmis.values(offset, offset + limit);
  }

  static findByIdAndUpdate(id: u32, partial: PartialBMI): BMI {
    // find a bmi by its id
    let bmi2 = this.findById(id);

    // update the bmi in-memory
    bmi2.task = partial.task;
    bmi2.done = partial.done;

    // persist the updated bmi
    bmis.set(id, bmi2);

    return bmi2;
  }

  static findByIdAndDelete(id: u32): void {
    bmis.delete(id);
  }
}