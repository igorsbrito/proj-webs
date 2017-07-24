const express = require ('express');
const bodyParser = require('body-parser');

const app = express();

const configureExpress = () => {
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));

	return app;
}

module.exports = configureExpress;