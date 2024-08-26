const axios = require('axios')

const chaveAPI = 'd6eef64b';

const getMovieByTitle = async (req, res) => {
    const { title } = req.params
    const apiKey = 'SUA_API_KEY' // Substitua pela sua chave da OMDb API

    try {
        const response = await axios.get(`http://www.omdbapi.com/?t=${title}&apikey=${apiKey}`)
        res.json(response.data)
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch movie data' })
    }
}

module.exports = {
    getMovieByTitle
}