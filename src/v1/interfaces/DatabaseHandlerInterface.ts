// interfaces/DatabaseHandlerInterface.ts
import { Mongoose } from "mongoose";

export interface Class {
  /**
   * Connects to the database.
   */
  connect(): Promise<void>;

  /**
   * Retrieves the database connection instance.
   */
  getInstance(): Mongoose | null;
}
