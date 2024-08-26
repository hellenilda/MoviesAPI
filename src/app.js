require('dotenv').config();
const express = require('express')
const { engine } = require('express-handlebars')
const moviesRouter = require('./routes/movies')
const PORT = process.env.PORT || 3000
const app = express()

app.engine('handlebars', engine({
    defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')
app.set('views', `${__dirname}/views`)

app.use('/', moviesRouter)

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})