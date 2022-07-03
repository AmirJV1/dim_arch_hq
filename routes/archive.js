//express imports
const express = require('express');
const router = express.Router();
require('dotenv').config();

const archives = require('../schemas/archiveSchema');

router.get('/:id', async (req, res) => {
	const { id } = req.params;
	try {
		const archive = await archives.findById(id);
		return res.json(archive);
	} catch (error) {
		res.json({ success: false });
	}
});
router.post('/create', async (req, res) => {
	const { bCreation, dMsg, dTitle } = req.body;
	try {
		const data = { bCreation, dMsg, dTitle };
		const archive = await archives.create(data);
		return res.json({ archive, success: true, error: '' });
	} catch (error) {
		return res.json({ success: false, error });
	}
});

module.exports = router;
