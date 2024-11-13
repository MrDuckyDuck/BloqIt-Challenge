import { Context } from "koa";

export interface Functions<T> {
  getById(ctx: Context): Promise<T | null>;
  getAll(ctx: Context): Promise<T[]>;
  create(ctx: Context): Promise<T>;
  updateById(ctx: Context): Promise<T | null>;
  deleteById(ctx: Context): Promise<boolean>;
}
