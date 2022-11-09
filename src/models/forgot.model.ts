import * as mongoose from "mongoose";

export interface ForgotDocument extends mongoose.Document {
  _id: any;
  newPassword?: string;
  reTypePassword?: string;
}

const forgotSchema = new mongoose.Schema({
  _id: { type: mongoose.Types.ObjectId, required: true, auto: true },
  newPassword: { type: String },
  reTypePassword: { type: String },
});

export const Forgot = mongoose.model("forgot", forgotSchema);
