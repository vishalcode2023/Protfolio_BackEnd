const express = require('express');
const router = express.Router();

// Import the UserFrom function from UserController
const { UserFrom,CallFrom } = require('../Controller/UserController');

// Define the route for creating a user
router.post('/user',UserFrom);
router.post('/call', CallFrom);

module.exports = router;