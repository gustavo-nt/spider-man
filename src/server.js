// Import Modules
const express = require('express');
const server = express();

// Config Template Engine
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: server,
    noCache: true
});

server
    // Defining the 'public' folder as the public path
    .use(express.static('public'))
    // Enable data usage with json
    .use(express.json())
    // Use req body
    .use(express.urlencoded({extended: true}))

    // Create routes
    .get('/', (req, res) => {
        return res.render('index.html')
    })

    .get('/about', (req, res) => {
        return res.render('about.html')
    })

    .get('/teaser', (req, res) => {
        return res.render('teaser.html')
    })

    .get('/costumes', (req, res) => {
        return res.render('costumes.html')
    })

    .get('/characters', (req, res) => {
        return res.render('characters.html')
    })

// Connect server
server.listen(5000, () => {
    console.log('Servidor rodando!');
});
