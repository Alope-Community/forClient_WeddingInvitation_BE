const MessageController = require('../controllers/MessageController');
const messageValidation = require('../rules/MessageRules');
const router = require('express').Router();

// Define the route for getting messages
// This route will handle GET requests to /api/messages
router.get('/', MessageController.getMessages);

router.post('/send', messageValidation.createMessageRules, MessageController.sendMessage); 

module.exports = router;