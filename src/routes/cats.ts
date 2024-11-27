import { Router } from 'express';
import * as controller from '../controllers/cats';
import usernameAuth from '../middleware/usernameAuth';

const cats: Router = Router();

cats.post('/create', usernameAuth, controller.createCat);
cats.patch('/update', usernameAuth, controller.updateCat);
cats.get('/leaderboard/:range', controller.getLeaderboardWithRange);
cats.get('/nearby/:id/:distance', controller.getCatsNearby);

export default cats;
