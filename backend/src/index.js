const express = require('express');
const app = express();
const port = 3000;
const crossOriginIsolated = require('cors');

const routes = require('./api/endpoints');


app.use(express.json());
app.use(crossOriginIsolated());
app.use('/', routes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});