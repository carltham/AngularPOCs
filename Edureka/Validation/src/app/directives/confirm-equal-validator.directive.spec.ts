import { ConfirmEqualValidatorDirective } from "./confirm-equal-validator.directive";

describe("ConfirmEqualValidatorDirective", () => {
  it("should create an instance", () => {
    const directive = new ConfirmEqualValidatorDirective("test");
    expect(directive).toBeTruthy();
  });
});
