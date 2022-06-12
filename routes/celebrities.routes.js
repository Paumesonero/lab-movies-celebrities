// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const { route } = require("express/lib/application");
const async = require("hbs/lib/async");
const Celebrities = require('../models/Celebrity.model')

// all your routes here

router.get('/create', (req, res, next) => {
    res.render('celebrities/new-celebrity')
})

router.post('/create', async (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body
    try {
        await Celebrities.create({ name, occupation, catchPhrase })
        res.redirect('/celebrities')
    } catch (error) {
        next(error)
    }
})









module.exports = router;

