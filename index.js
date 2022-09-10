const express = require('express');

const app = express();

app.use(express.json());

const routes = require('./routes/routes');
app.use('/api' , routes)

app.listen(4000, () => {
    console.log(`Server Started at ${4000}`)
})
