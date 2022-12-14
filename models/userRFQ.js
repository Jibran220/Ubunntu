import mongoose from "mongoose";
import internal from "stream";
import { formatWithOptions } from "util";

const userSchema = mongoose.Schema({
  rfq_id: String,
  rfq_name: String,
  Name: String,
  Company_Name: String,
  to: String,
  Work_Phone: String,
  Month:String,
  Dates: {
    type: String,
    default: new Date() ,
  },
  vendordetails: String,
  approver: String,
  description: String,
  status: String,
});

export default mongoose.model("userRFQ_Manager", userSchema);
