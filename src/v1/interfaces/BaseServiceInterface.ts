export interface Functions<T> {
  getById(id: number): Promise<T | null>;
  getAll(): Promise<T[]>;
  create(data: T): Promise<T>;
  updateById(id: number, data: T): Promise<T | null>;
  deleteById(id: number): Promise<boolean>;
}
