const setupApp = require('./src/app');

const port = process.env.PORT || 4000;
setupApp()
		.listen(port, () => console.log(`App started successfully!`));