const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

const connection = mysql.createConnection({
  host: 'database',
  user: 'root',
  password: 'root',
  database: 'users',
});
connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('mysql connected');
});

app.get('/', (req, res) => {
  res.render('index', { foo: 'FOO' });
});

// app.get('/createdb', (req, res) => {
//   let sql = 'CREATE DATABASE posts';
//   connection.query(sql, (err, result) => {
//     if (err) {
//       throw err;
//     }
//     console.log(result);
//     res.send('database created');
//   });
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
