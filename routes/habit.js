const express = require('express');

const router = express.Router();
const habitController = require('../controllers/habitController');

router.post('/create-habit',habitController.createHabit);

router.get('/destroy/:id',habitController.destroy);

module.exports = router;