/* eslint-disable no-undef */

const http = require('http');
const express = require('express');
const cors = require('cors');

const app = express();

const FRONT_END_ORIGIN = 'http://localhost:9000';
const PORT = 3000;

app.use(cors({
    origin: FRONT_END_ORIGIN,
}));

app.get('/form', (_req, res) => res.sendFile(__dirname + '/fields.json'));

http.createServer(app).listen(PORT, () => console.log(`Running server API in port ${PORT}...`));
