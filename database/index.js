const fs = require('fs');
const pool = require('../config');

const dbSeeding = fs.readFileSync('./seeding.sql', 'utf8');

pool.query(dbSeeding, (err, result) => {
    if(err) throw err

    console.log("Seeding berhasil kawan")
    pool.end()
})