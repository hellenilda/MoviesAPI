const axios = require('axios')

const getMovieByTitle = async (req, res) => {
    const { title } = req.params
    const apiKey = 'CHAVE_ATUALIZADA' // adicionar a nova chave criada

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