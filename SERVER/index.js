const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const path = require('path');
const fs = require('fs');

app.use(cors());

// get promotions
app.get('/promotions', (req, res) => {
    console.log("GET /promotions");
    const dataPath = path.join(__dirname, 'data', 'data.json');
    fs.readFile(dataPath, 'utf-8', (err, data) => {
        if (err) {
            console.log('nope');
            console.error(err);
        }
        else {
            console.log('yay');
            res.json(JSON.parse(data))
        }
    })
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
