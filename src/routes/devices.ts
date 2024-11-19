import { Router } from "express";
import * as controller from "../controllers/devices";

const devices: Router = Router();

devices.post("/create", controller.createDevice);
devices.patch("/update", controller.postUpdate);

export default devices;
