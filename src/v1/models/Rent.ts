import { model, Schema } from "mongoose";
import { IndexCounterHandler } from "v1/utils/IndexCounterHandler";
import { RentInterface } from "v1/interfaces";

const rentSchema = new Schema<RentInterface.Rent>(
  {
    id: {
      type: Number,
      index: true,
      unique: true,
    },
    lockerId: {
      type: Number, //relates to the locker collection
      required: true,
    },
    year: {
      // Sharding Key for MongoDB. Must be enabled on Database to take full advantage of it
      type: Number,
      required: true,
      index: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    droppedOffAt: {
      type: Date,
      default: null,
    },
    pickedUpAt: {
      type: Date,
      default: null,
    },
  },
  { versionKey: false, timestamps: true, minimize: false }
);

rentSchema.plugin(new IndexCounterHandler().handle, {
  collectionName: "rents",
  field: "id",
});

export const Model = model("Rent", rentSchema);
