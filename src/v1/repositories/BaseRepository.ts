// repositories/BaseRepository.ts
import { BaseRepositoryInterface } from "v1/interfaces";

/**
 * @description Base repository class implements common crud operations
 * on the database. It is bounded to MongoDb database.
 * Responsible to format query to access the database
 */
export default class BaseRepository<T>
  implements BaseRepositoryInterface.DbActions<T>
{
  constructor(private model: any) {}

  async findById(id: number): Promise<T | null> {
    return this.model.findOne({ id });
  }

  async findAll(): Promise<T[]> {
    return this.model.find();
  }

  async create(data: T): Promise<T> {
    return this.model.create(data);
  }

  async updateById(id: number, data: T): Promise<T | null> {
    return this.model.findOneAndUpdate({ id: +id }, data, { new: true }); //returns the updated object
  }

  async deleteById(id: number): Promise<boolean> {
    const result = this.model.findOneAndDelete(
      { id: +id },
      { isDeleted: true } //returns the deleted object
    );
    return result != null;
  }
}
