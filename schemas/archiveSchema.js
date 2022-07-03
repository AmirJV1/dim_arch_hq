const mongoose = require('mongoose');
const { schema } = mangoose;

const archiveSchema = new schema({
	bCreation: {
		type: String,
		required: true,
		maxLength: 100
	},
	dMsg: {
		type: String,
		required: true,
		maxLength: 2500
	},
	dName: {
		Type: String,
		required: true,
		maxLength: 100
	},
	recDate: {
		Type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('archive', archiveSchema);
