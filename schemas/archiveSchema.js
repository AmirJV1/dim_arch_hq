const mongoose = require('mongoose');
const { Schema } = mongoose;

const archiveSchema = new Schema({
	bCreation: {
		type: String,
		required: true,
		maxLength: 100,
		default: 'Unknown'
	},
	dTitle: {
		type: String,
		required: true,
		default: 'Unknown'
	},
	dMsg: {
		type: String,
		required: true,
		maxLength: 2500,
		default: 'Error Corrupted Files'
	},
	dDate: {
		type: Date,
		required: true,
		default: Date.now
	}
});

module.exports = mongoose.model('archive', archiveSchema);
