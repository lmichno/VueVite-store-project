const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const path = require('path');

app.use(cors());

// get promotions
app.get('/promotions', (req, res) => {
    res.json(path.join(__dirname, 'data', 'data.json'))
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
