const pool = require('../config');
const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
    const db = 'SELECT * FROM category'

    pool.query(db, (err,result) => {
        if(err) throw err

        res.status(200).json(result.rows)
    })
});

module.exports = route;