import { Context } from "koa";
import { CustomErrorInterface } from "v1/interfaces";

export default class CustomError
  extends Error
  implements CustomErrorInterface.CustomError
{
  status: number;
  clientResponse: object;

  /**
   *
   * @param status HTTP error code
   * @param clientResponse Object containing error details for the user
   */
  constructor(status: number, clientResponse: object) {
    super(JSON.stringify(clientResponse));
    this.status = status;
    this.clientResponse = clientResponse;
  }
}
