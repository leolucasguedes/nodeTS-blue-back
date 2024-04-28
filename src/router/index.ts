import { Router } from "express";
import * as controller from "../controller/index";

const router = Router();

router.post("/restaurants", controller.post);
router.get("/restaurants", controller.get);

export default router;
