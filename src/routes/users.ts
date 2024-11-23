import { Router } from 'express';
import * as controller from '../controllers/users';

const users: Router = Router();

users.get('/:id/devices', controller.getDevices);
users.get('/:id/cats', controller.getCats);
users.get('/settings', controller.getUser);
users.patch('/settings', controller.updateUser);

export default users;
