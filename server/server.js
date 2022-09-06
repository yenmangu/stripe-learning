require('dotenv').config({ path: './.env' });

const express = require('express');
const app = express();
const stripe = require('stripe')(process.env.STRIPE_SECRET);
const { resolve } = require('path');

// middleware
app.use(express.static('../client'));

app.get('/', (req, res) => {
	const path = resolve('../client' + '/index.html');
	res.sendFile(path);
});
app.get('/', (req, res) => {
	res.send('hi devs');
});

app.listen(4242, () => {
	console.log('running on localhost 4242');
});
