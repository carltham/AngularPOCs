import express, { Request, Response } from "express";
import { userController } from "../../controllers";
import { Employee2 } from "../../domain/employee2";

export const router = express.Router({
  strict: true,
});

router.post("/", (req: Request, res: Response) => {
  userController.create(req, res);
});

router.get("/", (req: Request, res: Response) => {
  userController.read(req, res);
});
router.get("/new", (req: Request, res: Response) => {
  userController.new(req, res);
});

router.patch("/", (req: Request<Employee2>, res: Response) => {
  userController.update(req, res);
});
router.post("/save", (req: Request<Employee2>, res: Response) => {
  userController.update(req, res);
});

router.delete("/", (req: Request, res: Response) => {
  userController.delete(req, res);
});
