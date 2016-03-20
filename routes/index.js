var express = require('express');
var router = express.Router(); 
var Appointment = require('../models');


router.get('/appointments', function(req, res, next){
	
	console.log("reached appointments")
	Appointment.find({})
	.then(function(appointments){
		res.send(appointments);
	})
	.catch(next);
});

router.post('/appointment', function(req, res, next){
	var appointment = new Appointment();

	appointment.name = req.body.name;
	appointment.priority = req.body.priority;

	appointment.save()
	.then(function(appointment){
		res.send(appointment);
	})
	.catch(next); 
});

module.exports = router; 