class Scheduler {
    constructor() {
      this.events = [];
    }
  
    addEvent(event) {
      const { start_time, end_time } = event;
  
      // Check if the event overlaps with any existing events
      for (let e of this.events) {
        if (
          (start_time >= e.start_time && start_time < e.end_time) ||
          (end_time > e.start_time && end_time <= e.end_time) ||
          (start_time <= e.start_time && end_time >= e.end_time)
        ) {
          return false; // Overlap detected
        }
      }
  
      // If no overlap, add the event
      this.events.push({ start_time, end_time });
      return true;
    }
  
    getEvents() {
      return this.events;
    }
  }
  
  module.exports = Scheduler;
  