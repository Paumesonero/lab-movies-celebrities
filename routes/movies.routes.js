// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Movies = require("../models/Movie.model")
const Celebrity = require('../models/Celebrity.model');



// all your routes here
router.get('/create', async (req, res, next) => {
    try {
        const celebrities = await Celebrity.find({})
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

// iteration 8

router.get('/:movieId', async (req, res, next) => {
    const { movieId } = req.params;
    try {
        const movie = await Movies.findById(movieId).populate('cast');
        res.render('movies/movie-details', { movie })
        // console.log(movie)
    } catch (error) {
        next(error)
    }
})

router.post('/:movieId/delete', async (req, res, next) => {
    const { movieId } = req.params;
    try {
        await Movies.findByIdAndDelete(movieId)
        res.redirect('/movies')
    } catch (error) {
        next(error)
    }
})


module.exports = router;