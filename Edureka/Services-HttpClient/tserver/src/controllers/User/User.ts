import { Request, Response } from "express";
import { Employee2 } from "../../domain/employee2";
import { CSVHandler } from "../../tools/csv-parser";
import { CrudController } from "../CrudController";

export class UserController extends CrudController {
  _userIndex = 0;
  dataFile: string = "dist/users.txt";
  private csvHandler: CSVHandler = new CSVHandler();

  constructor() {
    super();
    this.csvHandler.assureFileExists(this.dataFile);
    this.loadUsersArray();
  }
  create(req: Request, res: Response): void {
    throw new Error("Method not implemented.");
  }

  read(req: Request, res: Response): void {
    res.json({ message: "GET /user request received-1" });
  }

  update(req: Request<Employee2>, res: Response): void {
    const reFreshedUser: Employee2 = <Employee2>req.body;
    console.log("reFreshedUser=", reFreshedUser);
    let users: Employee2[];
    this.loadUsersArray().then((result) => {
      users = result;
      const foundUsers = users.filter((user) => user.id === reFreshedUser.id);
      console.log("foundUsers=", foundUsers);
      if (foundUsers.length === 0) {
        users.push(reFreshedUser);
        this.nextUserIndex++;
      } else if (foundUsers.length === 1) {
        const remainingUsers = users.filter(
          (user) => user.id !== reFreshedUser.id
        );
        console.log("remainingUsers=", remainingUsers);
        remainingUsers.push(reFreshedUser);
        users = remainingUsers;
      } else
        throw new Error(
          JSON.stringify({
            error: 1,
            description: `duplicate id found : ${foundUsers}`,
          })
        );

      users.sort(this.sortById);

      this.csvHandler.write(this.dataFile, users);
      res.sendStatus(200);
    });
  }

  delete(req: Request, res: Response): void {
    throw new Error("Method not implemented.");
  }
  new(req: Request, res: Response): void {
    res.json({
      id: this.nextUserIndex,
      employee_name: "",
      employee_salary: -1,
      employee_age: -1,
      profile_image: "",
    });
  }
  get nextUserIndex() {
    return this._userIndex;
  }
  set nextUserIndex(value) {
    this._userIndex = value;
  }

  async loadUsersArray() {
    let _users: Employee2[] = await this.csvHandler.processLineByLine(
      this.dataFile
    );
    console.log("_users=", _users);
    _users.sort(this.sortById);
    const lastUser = _users[_users.length - 1];
    this.nextUserIndex = lastUser ? lastUser.id + 1 : 0;
    console.log("nextUserIndex=", this.nextUserIndex);
    return _users;
  }

  sortById = (user1: Employee2, user2: Employee2) => {
    // Compare the 2 dates
    if (user1.id < user2.id) return -1;
    if (user1.id > user2.id) return 1;
    return 0;
  };
}
