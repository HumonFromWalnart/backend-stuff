import express from 'express'
import bodyParser from 'body-parser'
import connect from './connect.js';
import router from './router.js';

const port = 642;
const app = express();
const jsonParser = bodyParser.json()
connect();
app.use(jsonParser)
app.use(router)
app.listen(port, () => {
    console.log(`<${port}> Another successfull seizure!`);
});