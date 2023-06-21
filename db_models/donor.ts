import { Schema, model, models } from "mongoose";

const DonorSchema = new Schema({
  name: {
    type: String,
    required: [true, "name is required!"],
  },
  mobile: {
    type: String,
    unique: [true, "Mobile already exists!"],
    required: [true, "mobile is required!"],
  },
  age: {
    type: String,
    required: [true, "age is required!"],
  },
  bloodGroup: {
    type: String,
    required: [true, "bloodGroup is required!"],
  },
});

const Donor = models.Donor || model("Donor", DonorSchema);

export default Donor;
