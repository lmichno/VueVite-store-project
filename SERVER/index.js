const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const session = require('express-session');
app.use(express.json());
app.use(session({
    secret: 'ansda78sdya78sd8ahsdaisndouasnd',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}))

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

const dataPath = path.join(__dirname, 'data', 'data.json');

let users = []


app.get('/promotions', (req, res) => {
    console.log("GET /promotions");
    fs.readFile(dataPath, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
        }
        else {
            res.json(JSON.parse(data))
        }
    })
});

app.get("/promotion/:id", (req, res) => {
    fs.readFile(dataPath, 'utf-8', (err, data) => {
        if (err) { console.log(err); }
        else {
            data = JSON.parse(data);
            prom = data.promotions.find((promotion) => { return promotion.id == req.params.id });
            res.json(prom)
        }
    })
})

app.get('/product/:id', (req, res) => {
    fs.readFile(dataPath, 'utf-8', (err, data) => {
        if (err) { console.log(err); }
        else {
            data = JSON.parse(data);
            prom = data.products.find((product) => { return product.id == req.params.id });
            res.json(prom)
        }
    })
})

app.get('/products', (req, res) => {
    fs.readFile(dataPath, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
        }
        else {
            res.json(JSON.parse(data).products)
        }
    })
});

app.post('/createUser', (req, res) => {
    if (users.find(user => user.email === req.body.email)) {
        res.json({ status: 'exists' })
    }
    else {
        users.push(req.body)
        console.log(users);
        res.json({ status: 'registered' })
    }
})

app.post('/login', (req, res) => {
    if (users.find(user => user.email === req.body.email && user.password === req.body.password)) {
        req.session.user = req.body;
        res.json({ status: 'logged' })
    }
    else {
        res.json({ status: 'bad_data' })
    }
})

app.post('/logout', (req, res) => {
    req.session.user = null;
    res.json({ status: 'logged_out' })
})

app.post('/checkUser', (req, res) => {
    console.log(req.session.user);
    if (req.session.user) {
        res.json({ status: 'logged', user: req.session.user })
    }
    else {
        res.json({ status: 'not_logged' })
    }
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
