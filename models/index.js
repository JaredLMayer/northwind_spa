var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost');

var appointmentSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	priority: {
		type: Number,
		required: true,
		min: 1
	}
});

var appointmentModel = mongoose.model('Appointment', appointmentSchema);

module.exports = appointmentModel;