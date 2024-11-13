import { BaseController } from "v1/controllers";
import { BaseService } from "v1/services";
import { BaseRepository } from "v1/repositories";
import { BaseRouter } from "v1/routes";
import { Bloq, Locker, Rent } from "v1/models";

import { AnotherMiddlewareDummy, MiddlewareDummy } from "v1/middlewares";

/**
 * Init Bloq Repo, Service, Controller and Router with all the necessary middlewares,
 */
const BaseBloqRepository = new BaseRepository(Bloq);
const BaseBloqService = new BaseService(BaseBloqRepository);
const BaseBloqContoller = new BaseController(BaseBloqService);
const BaseBloqRouter = new BaseRouter("/v1/bloqs", BaseBloqContoller);
BaseBloqRouter.withDefaultCreate();
BaseBloqRouter.withDefaultGetAll([
  new AnotherMiddlewareDummy().handle,
  new MiddlewareDummy().handle,
]);
BaseBloqRouter.withDefaultGetById();
BaseBloqRouter.withDefaultUpdateById();

/**
 * Init Locker Repo, Service, Controller and Router with all the necessary middlewares,
 */
const BaseLockerRepository = new BaseRepository(Locker);
const BaseLockerService = new BaseService(BaseLockerRepository);
const BaseLockerContoller = new BaseController(BaseLockerService);
const BaseLockerRouter = new BaseRouter("/v1/lockers", BaseLockerContoller);
BaseLockerRouter.withDefaultCreate();
BaseLockerRouter.withDefaultGetAll();
BaseLockerRouter.withDefaultGetById();
BaseLockerRouter.withDefaultUpdateById();

/**
 * Init Rent Repo, Service, Controller and Router with all the necessary middlewares,
 */
const BaseRentRepository = new BaseRepository(Rent);
const BaseRentService = new BaseService(BaseRentRepository);
const BaseRentContoller = new BaseController(BaseRentService);
const BaseRentRouter = new BaseRouter("/v1/rents", BaseRentContoller);
BaseRentRouter.withDefaultCreate();
BaseRentRouter.withDefaultGetAll();
BaseRentRouter.withDefaultGetById();
BaseRentRouter.withDefaultUpdateById();

export { BaseBloqRouter, BaseLockerRouter, BaseRentRouter };
