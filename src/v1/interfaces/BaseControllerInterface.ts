import { Context } from "koa";

export interface Functions<T> {
  getById(ctx: Context): Promise<void>;
  getAll(ctx: Context): Promise<void>;
  create(ctx: Context): Promise<void>;
  updateById(ctx: Context): Promise<void>;
  deleteById(ctx: Context): Promise<void>;
}
