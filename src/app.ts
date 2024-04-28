import express, { json } from "express";
import "express-async-errors";
import cors from "cors";
import "./config/setup"

import router from "./router/index";

const app = express();

app.use(cors());
app.use(json());
app.use(router);

export default app;