const express = require('express');
const router = express.Router();
const schedulerController = require('../controllers/schedulerController');

router.post('/events', schedulerController.addEvent);
router.get('/events', schedulerController.getEvents);

module.exports = router;
