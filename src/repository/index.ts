import prisma from "../config/db";
import { CreateData } from "../schema/index";

export async function addNew(restaurant: CreateData) {
  return await prisma.restaurant.create({ data: restaurant });
}

export async function getAll() {
  return await prisma.restaurant.findMany();
}