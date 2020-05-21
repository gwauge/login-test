//const hash = crypto.createHash('sha256').update(pwd).digest('base64');

//import modules
const app = require('./src/app');

const port = process.env.PORT || 3000; // select port
app.listen(port, () => console.log(`running on port ${port}`)); // start the server