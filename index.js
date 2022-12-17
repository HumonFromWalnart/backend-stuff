const express = require('express')
const app = express();
const port = 6942;
const bp = require("body-parser");


app.use(bp.json());


app.listen(port, () => {
    console.log('YESS')
});