import mongoose, { Connection, Mongoose } from "mongoose";
import { DatabaseHandlerInterface } from "v1/interfaces";

export default class DatabaseHandler implements DatabaseHandlerInterface.Class {
  /**
   * Database URI. Must follow the specification of MongoDB format
   */
  private uri: string;
  /**
   * Database instance that allows actions on the database
   */
  private connection: Mongoose | null = null;

  constructor(uri: string) {
    this.uri = uri;
  }

  /**
   * @description Connects to the database and stores the db connection
   */
  public async connect() {
    try {
      /** No  */
      this.connection = await mongoose.connect(this.uri);
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
    }
  }

  /**
   * @description Returns the database instance
   */
  public getInstance(): Mongoose | null {
    return this.connection;
  }
}
