const { body } = require("express-validator");
const MessageController = require("../controllers/MessageController");
const router = require("express").Router();

// Define the route for getting messages
// This route will handle GET requests to /api/messages
router.get("/", MessageController.getMessages);

router.post(
  "/send",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("phone").notEmpty().withMessage("Phone number is required"),
    body("message").notEmpty().withMessage("Message is required"),
    body("present").notEmpty().withMessage("Present is required"),
  ],
  MessageController.sendMessage
);

module.exports = router;
