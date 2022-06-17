const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const hostname = '127.0.0.1';

const port = 3071;
const sqlite3 = require('sqlite3').verbose();
const app = express();
const DBPATH = 'BD.db';

app.use(express.static("../frontend/"));

app.use(express.json());


// Retorna todos registros 
app.get('/premiacoes', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT * FROM premiacoes';
	db.all(sql, [], (err, rows) => {
		if (err) {
			throw err;
		}

		res.json(rows);

	});
	db.close(); // Fecha o banco
});

app.post('/inserir', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	console.log(req.body);
	sql = "INSERT INTO premiacoes (premiacao) VALUES ('" + req.body.premiacao + "')";
	var db = new sqlite3.Database(DBPATH); 
	db.run(sql, [], err => {
		if (err) {
			throw err;
		}
	});
	db.close();
	res.end();
});

app.post('/delete', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	sql = "DELETE FROM premiacoes WHERE id = " + req.body.id;
	var db = new sqlite3.Database(DBPATH);
	db.run(sql, [], err => {
		if (err) {
			throw err;
		}
		res.end();
	});
	db.close();
});

app.post('/update', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "UPDATE premiacoes SET premiacao = '" + req.body.premiacao + "' WHERE id = " + req.body.id;
	var db = new sqlite3.Database(DBPATH); 
	db.run(sql, [], err => {
		if (err) {
			throw err;
		}
		res.end();
	});
	db.close();
});

/* Inicia o servidor */
app.listen(port, hostname, () => {
	console.log(`BD server running at http://${hostname}:${port}/`);
});