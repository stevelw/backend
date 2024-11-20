import { Server } from 'http';
import app from './app';

const server: Server = app.listen(8080);

export default server;
