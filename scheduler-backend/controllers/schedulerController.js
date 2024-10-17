const Scheduler = require('../models/scheduler');
const scheduler = new Scheduler();

// Add event
exports.addEvent = (req, res) => {
  const { start_time, end_time } = req.body;

  if (start_time < 0 || end_time > 23 || start_time >= end_time) {
    return res.status(400).json({ success: false, message: 'Invalid event time' });
  }

  const success = scheduler.addEvent({ start_time, end_time });

  if (!success) {
    return res.status(400).json({ success: false, message: 'Event overlap' });
  }

  res.status(200).json({ success: true, message: 'Event added' });
};

// Get all events
exports.getEvents = (req, res) => {
  const events = scheduler.getEvents();
  res.status(200).json(events);
};
