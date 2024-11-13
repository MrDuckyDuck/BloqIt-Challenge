export interface DbActions<T> {
  findById(id: number): Promise<T | null>;
  findAll(): Promise<T[]>;
  create(data: T): Promise<T>;
  updateById(id: number, data: T): Promise<T | null>;
  deleteById(id: number): Promise<boolean>;
}
