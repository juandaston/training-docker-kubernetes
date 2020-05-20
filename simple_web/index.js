const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Holiiii de nuevo');
})

app.listen(5000, () => {
    console.log("Running on port 5000");
})