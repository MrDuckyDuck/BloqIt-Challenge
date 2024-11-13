import * as dotenv from "dotenv";
import Koa from "koa";
import path from "path";
import Json from "koa-json";
import BodyParser from "koa-bodyparser";
import Cors from "@koa/cors"; // Manage CORS requests - cross origin resource sharing
import helmet from "koa-helmet"; // Manage security headers like MITM protection, etc
dotenv.config({ path: path.join(__dirname, "settings/v1.settings.env") }); // This must be ran before any other code

import { ErrorHandlerMiddleware, PageNotFoundMiddleware } from "v1/middlewares";
import { CustomError } from "v1/utils";
import { BaseBloqRouter, BaseLockerRouter, BaseRentRouter } from "Container";

/* Instantiates koa application behind proxy */
const app = new Koa({ proxy: true });

/*  Import common and third-party middlewares */
app.use(helmet());
app.use(BodyParser({ enableTypes: ["json"] })); // Can use json, form or text
app.use(
  Cors({
    allowMethods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
    credentials: true,
    keepHeadersOnError: true,
  })
);
app.use(Json());

app.use(new ErrorHandlerMiddleware().handle);

/* Routes */
app
  .use(BaseBloqRouter.getRouter().routes())
  .use(BaseBloqRouter.getRouter().allowedMethods());
app
  .use(BaseLockerRouter.getRouter().routes())
  .use(BaseLockerRouter.getRouter().allowedMethods());
app
  .use(BaseRentRouter.getRouter().routes())
  .use(BaseRentRouter.getRouter().allowedMethods());

app.use(new PageNotFoundMiddleware(CustomError).handle);

export { app };
