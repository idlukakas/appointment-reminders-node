'use strict';

const Appointment = require('../models/appointment');

const notificationWorkerFactory = function() {
  return {
    run: function() {
      Appointment.sendNotifications();
      console.log("sending the notificationASJDHNIKASHGIAUSHGDASUH");
    },
  };
};

module.exports = notificationWorkerFactory();
