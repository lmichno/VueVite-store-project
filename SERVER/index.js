const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const path = require('path');
const fs = require('fs');

app.use(cors());

const dataPath = path.join(__dirname, 'data', 'data.json');


// get promotions
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

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
