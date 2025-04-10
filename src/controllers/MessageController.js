const { validationResult } = require("express-validator");
const Message = require("../models/MesageModel");

exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.findAll();
    if (!messages) {
      return res.status(404).json({ error: "No messages found" });
    }
    res.status(200).json({
      status: "success",
      code: 200,
      data: [
        ...messages
      ],
      message: "Messages retrieved successfully",
    });
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.sendMessage = async (req, res) => {
  console.log("Received message:", req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, phone, message, present } = req.body;

  try {
    const newMessage = await Message.create({
      name,
      phone,
      message,
      present,
    });
    res.status(201).json({
      status: "success",
      code: 201,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
