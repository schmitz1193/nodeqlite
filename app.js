'use strict';

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/Chinook.sqlite');

// db.all('SELECT * FROM employee', (err, res) => {
//   console.log(res);
// });

db.all(`
  SELECT   COUNT(*) AS count,
           BillingCountry AS COUNTRY
  FROM     Invoice
  GROUP BY BillingCountry
  ORDER BY count DESC`,
    (err, res) => {
      if (err) throw err;

      console.log(res);
    }
);
