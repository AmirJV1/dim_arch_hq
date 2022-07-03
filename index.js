require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//Leer cosas enviadas por el user
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//Fix Cors
app.use(
	cors({
		origin: true,
		credentials: true
	})
); //{origin:withelist}

app.get('/api', (req, res) => res.send('Hello World!'));
app.post('/api/create', (req, res) => {

    res.json({ success: true })
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
