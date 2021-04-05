import { expect } from "chai";
import { UserController } from "./User";

describe("UserController", () => {
  UserController.dataFile = "dist/test.txt";
  let controller: UserController = new UserController();

  it("should create the app", () => {
    expect(controller).to.be.an.instanceof(UserController);
  });

  // it(`should have as title 'Welcome to the Employee List app !'`, () => {
  //   const fixture = TestBed.createComponent(UserController);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual("Welcome to the Employee List app !");
  // });
});
