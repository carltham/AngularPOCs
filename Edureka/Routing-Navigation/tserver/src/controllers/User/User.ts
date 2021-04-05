import { Request, Response } from "express";
import { Employee2 } from "../../domain/employee2";
import { FakeDB } from "../../tools/fakeDB";
import { CrudController } from "../CrudController";

export class UserController extends CrudController {
  _userIndex = 0;
  static dataFile: string = <string>(<any>null);
  private fakeDB: FakeDB = new FakeDB();

  constructor() {
    super();
    if (!UserController.dataFile) {
      UserController.dataFile = "dist/users.txt";
    }
    this.fakeDB.assureFileExists(UserController.dataFile);
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
    let users: Employee2[];
    this.loadUsersArray().then((result) => {
      users = result;
      const foundUsers = users.filter((user) => user.id === reFreshedUser.id);
      if (foundUsers.length === 0) {
        users.push(reFreshedUser);
        this.nextUserIndex++;
      } else if (foundUsers.length === 1) {
        const remainingUsers = users.filter(
          (user) => user.id !== reFreshedUser.id
        );
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

      this.fakeDB.write(UserController.dataFile, users);
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
    let _users: Employee2[] = await this.fakeDB.processLineByLine(
      UserController.dataFile
    );
    _users.sort(this.sortById);
    const lastUser = _users[_users.length - 1];
    this.nextUserIndex = lastUser ? lastUser.id + 1 : 0;
    return _users;
  }

  sortById = (user1: Employee2, user2: Employee2) => {
    // Compare the 2 dates
    if (user1.id < user2.id) return -1;
    if (user1.id > user2.id) return 1;
    return 0;
  };
}
