import { Schema } from "mongoose";
import { IndexCounter } from "v1/models";
import { IndexCounterInterface } from "v1/interfaces";

export class IndexCounterHandler {
  /**
   *
   * @description This function adds a pre-save hook to a Mongoose schema to
   * automatically increment a specified field when a new document is saved.
   * This allows the creation of a numeric index for any collection
   */
  async handle(
    schema: Schema,
    options: { collectionName: string; fieldName?: string }
  ) {
    schema.pre("save", async function (next) {
      // Determine the field name to use, defaulting to 'id' if fieldName is not provided
      const fieldName = options.fieldName || "id";

      /**
       * If this is a new record, and the field is defined and not null, update the speicifc collection counter
       */
      if (
        this.isNew &&
        this[fieldName] !== undefined &&
        this[fieldName] !== null
      ) {
        await IndexCounter.findOneAndUpdate(
          { modelName: options.collectionName, field: fieldName },
          { count: (this[fieldName] as number) + 1 }
        ).exec();
        return next();
      }

      /**
       * Execute the ATOMIC find one and update. THe upsert flag is set to ensure even if the document is not found,
       * a new one is created. The new flag ensures the updated/created document is returned
       */
      const data = (await IndexCounter.findOneAndUpdate(
        { modelName: options.collectionName, field: fieldName },
        { $inc: { count: 1 } },
        { new: true, upsert: true }
      ).exec()) as IndexCounterInterface.IndexCounter;
      this[fieldName] = data.count;
      next();
    });
  }
}
