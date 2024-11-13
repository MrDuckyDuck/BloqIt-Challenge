export interface CustomError extends Error {
  status: number;
  clientResponse: object;
}

export interface CustomErrorNewInstance {
  new (statusCode: number, messageObject: object): CustomError;
}
