import express from "express";
import { Request, Response } from "express";
import { userController } from "../../controllers";
import { Employee2 } from "../../domain/employee2";

export const nodeRouter = express.Router({
  strict: true,
});

nodeRouter.post("/", (req: Request, res: Response) => {
  userController.create(req, res);
});

nodeRouter.get("/", (req: Request, res: Response) => {
  userController.read(req, res);
});
nodeRouter.get("/new", (req: Request, res: Response) => {
  userController.new(req, res);
});

nodeRouter.patch("/", (req: Request<Employee2>, res: Response) => {
  userController.update(req, res);
});
nodeRouter.post("/save", (req: Request<Employee2>, res: Response) => {
  userController.update(req, res);
});

nodeRouter.delete("/", (req: Request, res: Response) => {
  userController.delete(req, res);
});
