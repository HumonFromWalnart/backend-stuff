import express from 'express';
import bodyParser from 'body-parser'

const port = 6942;
const app = express();
const jsonParser = bodyParser.json()

let users = [
    { id: 1, name: 'Medic' },
    { id: 2, name: 'Scout' },
];

app.get("/", (req, res, next) => {
    res.status('200').json({
        users: users,
    });
});
3
app.post("/post", jsonParser, (req, res, next) => {

    console.log(req.body)
    users.push({ id: users.length + 1, ...req.body });
    res.status('400').json({ message: 'new user created' });
});

app.get("/:id", (req, res, next) => {
    const { id } = req.params;
    if (id > users.length) {
        res
            .status('400')
            .json({ message: `${req.params.id} id does not exist you dumb ass.` })
    } else {
        res.status('200').json(users[parseInt(id) - 1]);
    }
});

app.patch("/:id", jsonParser, (req, res, next) => {
    const { id } = req.params;
    if (id > users.length) {
        res
            .status('400')
            .json({ message: `${req.params.id} id does not exist you dumb ass` })
    } else {
        res.status('200').json({ message: `user with ${req.params.id} id is updated. Are you satisfied now?` })
    }
});

app.delete("/:id", jsonParser, (req, res, next) => {
    const { id } = req.params;
    // 1 string
    // if (id > users.length) {
    //     res
    //         .status('400')
    //         .json({ message: `${req.params.id} id does not exist you dumb ass ` })

    // } else {
    const user = users.filter(cur => cur.id === parseInt(id))

    if (user.length === 0) {
        res.status(400).json({ message: 'not found' })
    }
    else {
        // res.status(200).json({ message: 'found' })
        const filtered = users.filter(cur => cur.id !== parseInt(id));

        users = filtered;

       console.log(filtered)
       
        res.status(200).json({ message: `user with ${req.params.id} id got killed ` })
    }
    // }
})

app.listen(port, () => {
    console.log(`<${port}> Another successfull seizure!`);
});