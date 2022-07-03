require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const mongoose = require('mongoose');

//Routes
const archiveRoute = require('./routes/archive');

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
//Connect to mongoDB

const DBURL = `mongodb+srv://FirstUser:${process.env.MONGODB_KEY}@cluster0.dhp8i.mongodb.net/?retryWrites=true&w=majority`;
const connectToDB = async () => {
	try {
		await mongoose.connect(DBURL);
		console.log('Connected to database succesfully!');
	} catch (error) {
		console.error('Connection to Database failed!');
		console.log(error);
		await setTimeout(connectToDB, 9000);
	}
};
connectToDB();

app.get('/api', (req, res) => res.send('Hello World!'));
app.use('/api/archive', archiveRoute);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
