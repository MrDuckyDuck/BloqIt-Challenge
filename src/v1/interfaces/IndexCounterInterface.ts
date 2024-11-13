import { Types } from "mongoose";

export interface IndexCounter {
  _id: Types.ObjectId;
  field: string;
  modelName: string;
  count: number;
}
