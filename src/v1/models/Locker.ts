import { model, Schema } from "mongoose";
import { IndexCounterHandler } from "v1/utils/IndexCounterHandler";
import { LockerInterface } from "v1/interfaces";

const lockerSchema = new Schema<LockerInterface.Locker>(
  {
    id: {
      type: Number,
      index: true,
      unique: true,
    },
    bloqId: {
      type: Number, //relates to the bloq collection
      required: true,
    },
    status: {
      type: String,
      enum: LockerInterface.LockerStatus,
      default: LockerInterface.LockerStatus["CLOSED"],
    },
    isOccupied: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true, minimize: false }
);

lockerSchema.plugin(new IndexCounterHandler().handle, {
  collectionName: "lockers",
  field: "id",
});

export const Model = model("Locker", lockerSchema);
