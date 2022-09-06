const express = require ('express');
const app = express ();
const fs = require ('fs');
const cors = require ('cors');
const bodyParser = require ('body-parser');
app.use (cors ());
app.use (
  bodyParser.urlencoded ({
    extended: true,
  })
);

const mysql = require ('mysql');

const connection = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'javascript_august',
});

connection.connect (error => {
  if (error) throw error;
  console.log ('Connected to the database');
});

app.get ('/get-allCustomer', (req, res) => {
  const sqlQuery = 'SELECT * FROM customer';
  connection.query (sqlQuery, (error, results) => {
    if (error) throw error;
    res.send (
      JSON.stringify ({status: 200, error: null, response: {customer: results}})
    );
  });
});

app.post ('/add-customer', (req, res) => {
  const newCustomer = {
    firstname: req.body.name,
    lastname: req.body.lastname,
    phone: req.body.phone,
    email: req.body.email,
    vip: req.body.vip == 'Yes' ? 1 : 0,
  };

  const sqlQuery =
    'INSERT INTO customer (firstname,lastname,email,phone,vip) VALUES (?,?,?,?,?)';
  connection.query (
    sqlQuery,
    [
      newCustomer.firstname,
      newCustomer.lastname,
      newCustomer.email,
      newCustomer.phone,
      newCustomer.vip,
    ],
    (error, results) => {
      if (error) throw error;
      res.send (
        JSON.stringify ({
          status: 200,
          error: null,
          response: 'Customer ID : ' + results.insertId + ' created!',
        })
      );
    }
  );
});

app.post ('/delete-customer', (req, res) => {
  const sqlQuery = 'DELETE FROM customer WHERE id=(?)';
  connection.query (sqlQuery, [req.body.delete], (error, results) => {
    if (error) throw error;
    res.send (
      JSON.stringify ({
        status: 200,
        error: null,
        response: {affected: results.affectedRows},
      })
    );
  });
});

app.listen (5000, () => {
  console.log ('Server is running on port 5000');
});

// fs.readFile('AllCustomers.json', "utf8", (err, data) => {
//     const customers = JSON.parse(data);
//     customers.customers.push(newCustomer);
//     fs.writeFile('AllCustomers.json', JSON.stringify(customers, null, 3), function(err) {
//         res.send("Customer is added");
//     });
// })
