import { Request, Response } from "express";
import { Employee2 } from "../domain/employee2";

export abstract class CrudController {
  public abstract create(req: Request, res: Response): void;
  public abstract read(req: Request, res: Response): void;
  public abstract update(req: Request<Employee2>, res: Response): void;
  public abstract delete(req: Request, res: Response): void;
  public abstract new(req: Request, res: Response): void;
}
