import express, { Express } from "express";
import routes from "./routes";
import statusError from "./errorHandlers/statusError";

const app: Express = express();

Object.entries(routes).forEach(([route, handlers]) => {
  if (route === "root") route = "";
  app.use(`/api/${route}`, handlers);
});

app.use(statusError as any)

export default app;
