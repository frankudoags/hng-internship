import { Request, Response } from "express";
import User from "../db/models/user.model";

class ApiService {
  static async getAllPersons(req: Request, res: Response) {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async getPersonByName(req: Request, res: Response) {
    //extract name from req.params
    const name = req.params.name;
    try {
      //find person by name
      const person = await User.findOne({ name: name });
      if (!person) {
        return res
          .status(404)
          .json({ message: `Person with name ${name} not found` });
      }
      res.status(200).json(person);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async deletePerson(req: Request, res: Response) {
    //extract name from req.params
    const name = req.params.name;
    try {
      //find person by name and delete
      const person = await User.findOneAndDelete({ name: name });
      //check if person does not exist
      if (!person) {
        return res
          .status(404)
          .json({ message: `Person with name ${name} not found` });
      }
      //return deleted person
      res.status(200).json(person);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async updatePerson(req: Request, res: Response) {
    //extract name from req.params
    const old_name = req.params.name;
    const { name, email } = req.body;

    try {
      //find person by name and update with body
      let person = await User.findOneAndUpdate(
        { name: old_name },
        {
          name: name,
          email: email,
        },
        { new: true }
      );
      //check if person does not exist
      if (!person) {
        return res
          .status(404)
          .json({ message: `Person with name ${old_name} not found` });
      }
      //return updated person
      res.status(200).json(person);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async createPerson(req: Request, res: Response) {
    //extract body from req.body
    const { name, email } = req.body;
    try {
      //check if person already exists
      let person = await User.findOne({ name: name });

      if (person)
        return res.status(400).json({
          error: `Person with name ${name} already exists`,
        });

      //create a new person
      person = new User({
        name,
        email,
      });
      //save person to database
      await person.save();

      //return person
      res.status(200).json(person);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

export default ApiService;
