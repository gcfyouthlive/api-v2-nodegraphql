const sqlite3 = require('sqlite3').verbose();
const dbFile = './db/camp.db';

const db = new sqlite3.Database(dbFile, (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the SQlite database.');
});

module.exports = {
    queryAll: function (sql) {
        db.all('SELECT null', [], (err, rows) => {
            if (err) {
                throw err;
            }
            rows.forEach((row) => {
                console.log(row.name);
            });
        });
    }
};


