const pool = require('../config');
const express = require('express');
const route = express.Router();

// Get semua data category
// localhost:3000/category
route.get('/', (req, res) => {
    const db = 'SELECT * FROM category'

    pool.query(db, (err,result) => {
        if(err) throw err

        res.status(200).json(result.rows)
    })
});

module.exports = route;