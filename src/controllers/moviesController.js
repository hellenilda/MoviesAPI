const axios = require('axios')

const getMoviesByTitle = async (req, res) => {
    const { title } = req.params
    const apiKey = process.env.OMDB_API_KEY

    try {
        const response = await axios.get(`http://www.omdbapi.com/?s=${title}&apikey=${apiKey}`)
        res.json(response.data)
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch movie data' })
    }
}

const getMovieDetails = async (req, res) => {
    const { imdbID } = req.params;
    const apiKey = process.env.OMDB_API_KEY;

    try {
        const response = await axios.get(`http://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch movie details' });
    }
};

module.exports = {
    getMoviesByTitle,
    getMovieDetails
}