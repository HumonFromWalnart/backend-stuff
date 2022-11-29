

const express = require('express');

const port = 6942;

const app = express();

app.get("/", (request, response) =>{
    response.send('Raus, Raus!');
});

app.get("/users", (request, response) => {
    response.send([{Name :'Rick', Status : 'Never gonna give you up!'}]);
});

app.get("/post", (request, response) =>{
    response.send([{Title : 'Rick Astley - Never Gonna Give You Up - [OFFICIAL MUSIC VIDEO]', Comment : 'Rick never make us give up!'}]);
})

app.listen(port, () => {
    'Another successfull seizure!';
});