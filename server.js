const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const port = 3000;
app.use(express.static(__dirname));

const db = new sqlite3.Database('./database.sqlite', (err) => {
    if (err) {
        console.error('Erro ao conectar ao banco:', err.message);
    } else {
        console.log('Banco de dados conectado');
    }
});


app.get('/api/usuarios', (req, res) => {
    db.all('SELECT * FROM Usuarios', [], (err, rows) => {
        if (err) {
            res.status(500).json({ erro: err.message });
            return;
        }
        res.json(rows);
    });
});


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});