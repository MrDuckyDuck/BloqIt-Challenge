import { BaseRepositoryInterface, BaseServiceInterface } from "v1/interfaces";

/**
 * @description Implements the base service functions.
 * Include the common crud operations.
 * Responsible to deal with all the business logic
 */
export default class BaseService<T>
  implements BaseServiceInterface.Functions<T>
{
  public repository: BaseRepositoryInterface.DbActions<T>;
  constructor(repository: BaseRepositoryInterface.DbActions<T>) {
    this.repository = repository;
  }

  async getById(id: number): Promise<T | null> {
    return this.repository.findById(id);
  }

  async getAll(): Promise<T[]> {
    return this.repository.findAll();
  }

  async create(data: T): Promise<T> {
    return this.repository.create(data);
  }

  async updateById(id: number, data: T): Promise<T | null> {
    return this.repository.updateById(id, data);
  }

  async deleteById(id: number): Promise<boolean> {
    return this.repository.deleteById(id);
  }
}
