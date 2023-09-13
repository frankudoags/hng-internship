import { Router } from "express";
import ApiController from "./api.controller";

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
ApiRouter.get("/", ApiController.getAllPersons);

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

ApiRouter.post("/", ApiController.createPerson);

/**
 * @swagger
 * /api/{id}:
 * get:
 * description: Get a person by id
 * responses:
 * 200:
 * description: Success
 * 500:
 * description: Internal Server Error
 */
ApiRouter.get("/:id", ApiController.getPersonById);

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
ApiRouter.get("/:name", ApiController.getPersonByName);

/**
 * @swagger
 * /api/{id}:
 * put:
 * description: Update a person by id
 * responses:
 * 200:
 * description: Success
 * 500:
 * description: Internal Server Error
 */
ApiRouter.put("/:id", ApiController.updatePerson);

/**
 * @swagger
 * /api/{id}:
 * delete:
 * description: Delete a person by id
 * responses:
 * 200:
 * description: Success
 * 500:
 * description: Internal Server Error

 */
ApiRouter.delete("/:id", ApiController.deletePerson);

export default ApiRouter;
