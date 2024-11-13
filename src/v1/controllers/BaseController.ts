// controllers/BaseController.ts
import { Context } from "koa";
import { BaseServiceInterface } from "v1/interfaces";

/**
 * @description Base controller class implements common crud operations
 * Responsible to format input and output data
 */
export default class BaseController<T> {
  public service: BaseServiceInterface.Functions<T>;

  constructor(service: BaseServiceInterface.Functions<T>) {
    this.service = service;
  }

  async getById(ctx: Context): Promise<void> {
    ctx.response.body = await this.service.getById(ctx.params.id);
  }

  async getAll(ctx: Context): Promise<void> {
    ctx.response.body = await this.service.getAll();
  }

  async create(ctx: Context): Promise<void> {
    ctx.response.body = await this.service.create(ctx.request.body as T);
    ctx.status = 201;
  }

  async updateById(ctx: Context): Promise<void> {
    ctx.response.body = await this.service.updateById(
      ctx.params.id,
      ctx.request.body as T
    );
  }

  async deleteById(ctx: Context): Promise<void> {
    ctx.response.body = await this.service.deleteById(ctx.params.id);
  }
}
