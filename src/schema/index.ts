import { Restaurant } from "@prisma/client";
import Joi from "joi";

export type CreateData = Omit<Restaurant, "id">;

const RestaurantSchema = Joi.object<CreateData>({
  name: Joi.string().required(),
  address: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().max(11).required(),
  foodType: Joi.string().required(),
  instagram: Joi.string().required(),
});

export default RestaurantSchema;