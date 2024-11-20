import { Router } from 'express';
import * as controller from '../controllers/devices';
import usernameAuth from '../middleware/usernameAuth';

const devices: Router = Router();

devices.post('/create', usernameAuth, controller.createDevice);
devices.patch('/update', controller.postUpdate);
devices.delete('/delete', usernameAuth, controller.deleteDevice);

export default devices;
