const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to my Express App</h1>`);
});

app.listen(8080, () => {
   console.log(`app running on port 8080`)
});