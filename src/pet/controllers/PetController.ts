import { Request, Response } from "express";
import { Op } from "sequelize";
import { models } from "../../sequelize.ts";

export async function getPet(req: Request, res: Response) {
  const {
    params: { id },
  } = req;

  try {
    if (id) {
      console.log("getting pet: ", id);
      const pet = await models.pet.findOne({ where: { id: {[Op.eq]: id }}});
      if (pet) {
        return res.status(200).json({ data: pet });
      }
      return res.status(404);
    } else {
      console.log("getting all pets");
      const pets = await models.pet.findAll();
      return res.status(200).json({ data: pets });
    }
  } catch (e) {
    // In place of a logger middleware
    console.log(
      `${req.method} ${req.protocol}://${req.get("host")}${
        req.originalUrl
      } ERROR: ${e.toString()}`
    );
    return res.status(500);
  }
}

export async function createPet(req: Request, res: Response) {
  console.log(req.body);

  try {
    const newPet = await models.pet.create(req.body);
    return res.status(201).json({ data: newPet });
  } catch (e) {
    // In place of a logger middleware
    console.log(
      `${req.method} ${req.protocol}://${req.get("host")}${
        req.originalUrl
      } ERROR: ${e.toString()}`
    );
    return res.status(500);
  }
}

// function initialize(sequelize: Sequelize) {
//   model = sequelize.define('pet', PetModel);
// }

// export function createPet(pet) {
//   return model.create(pet);
// }

// export function findAllPets(query) {
//   return model.findAll({ where: query });
// }

// export function findPet(query) {
//   return model.findOne({ where: query });
// }

// export function updatePet(query, value) {
//   return model.update(value, { where: query });
// }

// export function deletePet(query) {
//   return model.destroy({ where: query });
// }
