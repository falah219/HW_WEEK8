const pool = require('../config');
const express = require('express');
const route = express.Router();


// Get semua data film
route.get('/', (req, res) => {
    const db = 'SELECT * FROM film'

    pool.query(db, (err,result) => {
        if(err) throw err

        res.status(200).json(result.rows)
    })
});


// Get data film berdasarkan id 
route.get('/:id', (req, res) => {
    const id = req.params.id;
    const db = `SELECT * FROM film WHERE film_id = ${id}` ;

    pool.query(db, (err,result) => {
        if(err) throw err;

        res.status(200).json(result.rows[0]);
    });
})

// Get data film berdasarkan nama category (Action, Animation, Children) 
route.get('/category/:slug', (req, res) => {
    const slug = req.params.slug;
    const db = `SELECT * FROM film f
                JOIN film_category fc ON f.film_id = fc.film_id
                JOIN category c ON fc.category_id = c.category_id
                WHERE c.name = '${slug}'` ;

    pool.query(db, (err,result) => {
        if(err) throw err;

        res.status(200).json(result.rows);
    });
})

module.exports = route;