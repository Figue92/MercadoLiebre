const express = require('express');
const path = require('path');
const port = 3030;

const app = express();

app.use(express.static(path.resolve(__dirname, 'public')))

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, 'views', 'home.html')));
app.get('/register', (req, res) =>res.sendFile(path.resolve(__dirname, 'views', 'register.html')));
app.get('/login', (req, res) =>res.sendFile(path.resolve(__dirname, 'views', 'login.html')));

app.listen(port, () => `Servidor corriendo en http://localhost:${port}`);