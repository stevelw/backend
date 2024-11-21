import { Server } from 'http';
import app from './app';

const server: Server = app.listen(9090);

export default server;
