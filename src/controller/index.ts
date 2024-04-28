import { Request, Response } from "express";
import * as repository from "../repository/index";
import { CreateData } from "../schema/index";

export async function post(req: Request, res: Response) {
  const restaurant: CreateData = req.body;

  await repository.addNew(restaurant);

  console.log("Controller", "Restaurant created");

  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  const restaurants = await repository.getAll();

  console.log("Controller", "Restaurants found");

  res.status(200).send(restaurants);
}