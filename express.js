

import express, { response } from 'express';
const port = 6942;
const app = express();

const users = [
    { id: 1, name: 'Jonh' },
    { id: 2, name: 'Male' },
];

app.get("/", (req, res, next) => {
    res.status('200').json({
        users: users,
    });
});

app.get("/create", (req, res, next) => {
    users.push({ id: users.length + 1, ...req.body });
    res.status('400').json({ message: 'new user created' });
});

app.post("/:id", (req, res, next) => {
    const { id } = req.params;
    console.log(id)
    if (id > users.length) {
        res
            .status('400')
            .json({ message: `${req.params.id} id does not exist you dumb ass. ___       ________  ___          
            |\  \     |\   __  \|\  \         
            \ \  \    \ \  \|\  \ \  \        
             \ \  \    \ \  \\\  \ \  \       
              \ \  \____\ \  \\\  \ \  \____  
               \ \_______\ \_______\ \_______\
                \|_______|\|_______|\|_______|`})
    } else {
        res.status('200').json(users[parseInt(id) - 1]);
    }
});

app.patch("/:id", (req, res, next) => {
    const { id } = req.params;
    if (id > users.length) {
        res
            .status('400')
            .json({ message: `${req.params.id} id does not exist you dumb ass ___       ________  ___          
            |\  \     |\   __  \|\  \         
            \ \  \    \ \  \|\  \ \  \        
             \ \  \    \ \  \\\  \ \  \       
              \ \  \____\ \  \\\  \ \  \____  
               \ \_______\ \_______\ \_______\
                \|_______|\|_______|\|_______|` })
    } else {
        res.status('200').json({ message: `user with ${req.params.id} id is updated. Are you satisfied now?` })
    }
});

app.delete("/:id", (req, res, next) => {
    const { id } = req.params;
    if (id > users.length) {
        res
            .status('400')
            .json({ message: `${req.params.id} id does not exist you dumb ass ___       ________  ___          
            |\  \     |\   __  \|\  \         
            \ \  \    \ \  \|\  \ \  \        
             \ \  \    \ \  \\\  \ \  \       
              \ \  \____\ \  \\\  \ \  \____  
               \ \_______\ \_______\ \_______\
                \|_______|\|_______|\|_______|` })
    } else {
        res.status('200').json({ message: `user with ${req.params.id} id got killed ` })
    }
})

app.listen(port, () => {
    console.log(`${'Another successfull seizure!', port}`);
});