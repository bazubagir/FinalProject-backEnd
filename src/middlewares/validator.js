import { check, validationResult } from "express-validator";

class Validator {
  static validateInput = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessage = errors.errors.map((err) => err.msg);
      return res.status(400).json({
        status: 400,
        message: errorMessage,
      });
    }
    return next();
  };
  static newAccountRules() {
    return [
      check("email", "please your email is envalid").isEmail(),
      check(
        "firstName",
        "please your firstName have a special Character"
      ).isAlpha(),
      check(
        "lastName",
        "please your lastName have a special character"
      ).isAlpha(),

      check("password", "password must be Strong").isStrongPassword(),
    ];
  }
  static checkId() {
    return [check("id", "id should be mongoId").isMongoId];
  }
}
export default Validator;
