import { Router } from "express";
import ApiService from "./api.service";
import { validateBodyMiddleware } from "../util";

const ApiRouter: Router = Router();

ApiRouter.get("/", ApiService.getAllPersons);

ApiRouter.post("/", validateBodyMiddleware, ApiService.createPerson);

ApiRouter.get("/:name", ApiService.getPersonByName);

ApiRouter.put("/:name", validateBodyMiddleware, ApiService.updatePerson);

ApiRouter.delete("/:name", ApiService.deletePerson);

export default ApiRouter;
