import { Router } from "express";
import ApiService from "./api.service";
import { validateBodyMiddleware } from "../util";

const ApiRouter: Router = Router();

/**
 * @swagger
 * /api:
 * get:
 * description: Get all people
 * responses:
 * 200:
 * description: Success
 * 500:
 * description: Internal Server Error
 */
ApiRouter.get("/", ApiService.getAllPersons);

/**
 * @swagger
 * /api:
 * post:
 * description: Create a new person
 * responses:
 * 200:
 * description: Success
 * 500:
 * description: Internal Server Error
 */

ApiRouter.post("/", validateBodyMiddleware, ApiService.createPerson);

/**
 * @swagger
 * /api/{name}:
 * get:
 * description: Get a person by name
 * responses:
 * 200:
 * description: Success
 * 500:
 * description: Internal Server Error
 */
ApiRouter.get("/:name", ApiService.getPersonByName);

/**
 * @swagger
 * /api/{name}:
 * put:
 * description: Update a person by name
 * responses:
 * 200:
 * description: Success
 * 500:
 * description: Internal Server Error
 */
ApiRouter.put("/:name", validateBodyMiddleware, ApiService.updatePerson);

/**
 * @swagger
 * /api/{name}:
 * delete:
 * description: Delete a person by name
 * responses:
 * 200:
 * description: Success
 * 500:
 * description: Internal Server Error

 */
ApiRouter.delete("/:name", ApiService.deletePerson);

export default ApiRouter;
