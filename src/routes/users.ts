import { Router } from "express";
import * as controller from "../controllers/users";

const users: Router = Router();

users.get("/:id/devices", controller.getDevices);

export default users;
