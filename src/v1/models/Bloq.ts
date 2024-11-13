import { model, Schema } from "mongoose";
import { IndexCounterHandler } from "v1/utils/IndexCounterHandler";
import { BloqInterface } from "v1/interfaces";

const bloqSchema = new Schema<BloqInterface.Bloq>(
  {
    id: {
      type: Number,
      index: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
      minlength: [1, "Invalid title min length!"],
      maxlength: [100, "Invalid title max length!"],
    },
    address: {
      type: String,
      required: true,
      minlength: [1, "Invalid address min length!"],
      maxlength: [100, "Invalid address max length!"],
    },
    status: {
      type: String,
      enum: BloqInterface.BloqStatus,
      default: BloqInterface.BloqStatus["ACTIVE"],
    },
  },
  { versionKey: false, timestamps: true, minimize: false }
);

bloqSchema.plugin(new IndexCounterHandler().handle, {
  collectionName: "bloqs",
  field: "id",
});

export const Model = model("Bloq", bloqSchema);
