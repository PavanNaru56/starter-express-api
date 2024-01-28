const express = require('express');

const router = express.Router();
const weekly_controller = require('../controllers/weeklyController');
const habitController = require('../controllers/habitController');

router.get('/weekly',weekly_controller.weekly);

router.get('/toggle-status',habitController.toggleStatus);

module.exports = router;