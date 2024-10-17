Project Overview
------------------
This project implements a Daily Event Scheduler application that allows users to schedule events within a 24-hour period. The scheduler ensures that no events overlap and provides an easy-to-use interface for adding and viewing scheduled events.

The project consists of two main parts:
----------------------------------------

Backend: Developed using Node.js and Express.js to handlescheduling  logic, event addition, and retrieval through REST APIs.

Frontend: Developed using Angular to provide a user interface for scheduling events and visualizing them.

Features
-------------
Scheduler Class:
------------------

A core class that handles adding and retrieving events.
Stores events in an array and checks for overlaps before adding new events.
Methods:
-----------------
addEvent({ start_time: number, end_time: number }): Boolean - Adds an event after checking for overlaps.
getEvents(): { start_time: number, end_time: number }[] - Returns the list of scheduled events.

Backend API:
--------------

/api/scheduler/events [POST]: Adds an event to the scheduler.
/api/scheduler/events [GET]: Retrieves all scheduled events.

Frontend User Interface:
----------------------------

Allows users to input event start and end times.
Displays a list of scheduled events.
Handles form validation and provides feedback for overlapping events.


Thought Process
-----------------------
1. Understanding the Task
--------------------------
The task requires building a system that schedules events without overlaps. Events are represented using 24-hour format numbers (0-23). The key challenges are:

Detecting event overlaps.
Handling input validation.
Presenting events clearly on the frontend.
2. Backend Design
-------------------
I decided to use Node.js with Express.js for the backend to handle the scheduling logic:

Scheduler Class: This class manages the core functionality of adding events and preventing overlaps.
Routes: The application exposes simple API routes to add and retrieve events.
3. Frontend Design
-------------------
The frontend was built using Angular:

Components: I created two main components – one for adding events and another for listing events. This modular approach helps in separating the logic for input and display.
Service Layer: A service is responsible for making API calls to the backend. This allows easy future extensions to the app.
Validation: I implemented input validation to ensure the event start time is before the end time and that the times are within the range (0-23).
4. Handling Overlaps
------------------------
The key challenge was to ensure that events don't overlap. The addEvent() method checks if the new event conflicts with any existing event.
For example, if an event with start_time = 2 and end_time = 5 exists, trying to add another event with start_time = 4 and end_time = 6 will result in a failure due to the overlap.
5. User Experience
------------------
The frontend is designed to provide clear feedback to the user:

If an event is successfully added, a success message is displayed.
If an event fails to be added due to overlap, the user is notified immediately.
6. Scalability
--------------
The app is designed in a way that it can be easily extended:

More complex validation rules or event types can be added to the Scheduler class.
The frontend can be extended to display events in a timeline or calendar view.


Run the Project
-------------------
Backend Setup
Install dependencies:

npm install

Run the backend:
-----------------

node app.js

Frontend Setup
------------------
Install dependencies:

npm install

Run the Angular frontend:
----------------------------

ng serve
