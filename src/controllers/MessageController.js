const { validationResult } = require("express-validator");
const Message = require("../models/MesageModel");

exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.findAll();
    if (!messages) {
      return res.status(404).json({ error: "No messages found" });
    }
    res.send(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.sendMessage = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, phone, message } = req.body;

  try {
    const newMessage = await Message.create({
      name,
      phone,
      message,
    });
    res.status(201).json(newMessage);
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
