import { Router } from 'express';
import * as controller from '../controllers/cats';

const cats: Router = Router();

cats.post('/create', controller.createCat);

export default cats;
