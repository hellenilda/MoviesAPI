const express = require('express')
const router = express.Router()
const moviesController = require('../controllers/moviesController')

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/api/movies/:title', moviesController.getMoviesByTitle);

router.get('/api/movies/details/:imdbID', moviesController.getMovieDetails);

module.exports = router