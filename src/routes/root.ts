import { Router } from "express";
import * as controller from "../controllers/root";

const root: Router = Router();

root.get("/", controller.index);
root.get("/endpoints", controller.endpoints);

export default root;
