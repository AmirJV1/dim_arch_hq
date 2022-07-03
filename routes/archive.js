//express imports
const express = require('express');
const router = express.Router();
require('dotenv').config();
//mongoose random
const random = require('mongoose-simple-random');

const Archives = require('../schemas/archiveSchema');

router.get('/rand', (req, res) => {
	Archives.findRandom({}, {}, { limit: 30 }, function (err, results) {
		if (!err) {
			return res.json(results);
		} else {
			return res.json({ success: false, error: err });
		}
	});
});
router.post('/create', async (req, res) => {
	const { bCreation, dMsg, dTitle } = req.body;
	try {
		const data = { bCreation, dMsg, dTitle };
		const archive = await Archives.create(data);
		return res.json({ archive, success: true, error: '' });
	} catch (error) {
		return res.json({ success: false, error });
	}
});
router.get('/:id', async (req, res) => {
	const { id } = req.params;
	try {
		const archive = await Archives.findById(id);
		return res.json(archive);
	} catch (error) {
		res.json({ success: false });
	}
});
module.exports = router;
