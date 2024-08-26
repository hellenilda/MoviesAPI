const express = require('express')
const router = express.Router()
const moviesController = require('../controllers/moviesController')

router.get('/', (req, res) => {
    res.render('index')
})

// router.get('/api/movies')

router.get('/:title', moviesController.getMovieByTitle)

module.exports = router