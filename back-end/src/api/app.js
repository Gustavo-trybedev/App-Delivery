const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const errorHandle = require('../middleware/errorHandle');

app.use(express.json());
app.use(express.static('public'));
app.use(cors());
// app.get('/coffee', (_req, res) => res.status(418).end());
app.use(routes);
app.use(errorHandle);

module.exports = app;
