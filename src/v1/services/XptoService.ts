import { BaseRepositoryInterface, BaseServiceInterface } from "v1/interfaces";
import BaseService from "./BaseService";

/**
 * @description Implements the base service functions.
 * Include the common crud operations.
 * Responsible to deal with all the business logic
 */
export default class XptoService<T>
  extends BaseService<T>
  implements BaseServiceInterface.Functions<T>
{
  constructor(repository: BaseRepositoryInterface.DbActions<T>) {
    super(repository);
  }

  async getById(id: number): Promise<T | null> {
    console.log("BUSTED");
    return this.repository.findById(id);
  }
}
