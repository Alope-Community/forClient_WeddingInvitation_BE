const { validationResult } = require("express-validator");
const Message = require("../models/MesageModel");
const { successResponse } = require("../utils/response");

exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.findAll();
    if (!messages) {
      return res.status(404).json({ error: "No messages found" });
    }
   
    return successResponse(res, "Messages retrieved successfully", messages, 200);
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

    const data = {
      name: newMessage.name,
      phone: newMessage.phone,
      message: newMessage.message,
      present: newMessage.present == 1 ? 'Hadir' : 'Tidak Hadir',
    };
    return successResponse(res, "Message sent successfully", data,201);
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
