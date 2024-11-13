import mongoose, { Schema } from "mongoose";
import { IndexCounterInterface } from "v1/interfaces";

const IdCounterSchema = new Schema<IndexCounterInterface.IndexCounter>({
  _id: {
    type: Schema.Types.ObjectId,
  },
  field: {
    type: String,
    required: true,
  },
  modelName: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
});

export const Model = mongoose.model<IndexCounterInterface.IndexCounter>(
  "IdCounter",
  IdCounterSchema
);
