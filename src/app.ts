import express, { Express } from "express";
import routes from "./routes";

const app: Express = express();

Object.entries(routes).forEach(([route, handlers]) => {
  if (route === "root") route = "";
  app.use(`/api/${route}`, handlers);
});

export default app;
