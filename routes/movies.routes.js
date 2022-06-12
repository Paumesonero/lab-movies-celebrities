// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Movies = require("../models/Movie.model")
const Celebrities = require('../models/Celebrity.model');
const async = require("hbs/lib/async");
const res = require("express/lib/response");
const req = require("express/lib/request");

// all your routes here
router.get('/create', async (req, res, next) => {
    try {
        const celebrities = await Celebrities.find({})
        res.render('movies/new-movie', { celebrities })
    } catch (error) {
        next(error);
    }
})

router.post('/create', async (req, res, next) => {
    const { title, genre, plot, cast } = req.body
    try {
        await Movies.create({ title, genre, plot, cast });
        res.redirect("/movies");
    } catch (error) {
        res.redirect('/movies/create');
    }
})

//iteration 7

router.get('/', async (req, res, next) => {
    try {
        const movies = await Movies.find({});
        res.render('movies/movies-view', { movies })
    } catch (error) {
        next(error)
    }
})






module.exports = router;