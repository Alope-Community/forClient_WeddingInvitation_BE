const { body, param } = require("express-validator");

exports.createMessageRules = () => {
  return [
    body("name").notEmpty().withMessage("Name is required"),
    body("phone").notEmpty().withMessage("Phone number is required"),
    body("message").notEmpty().withMessage("Message is required"),
  ];
};
