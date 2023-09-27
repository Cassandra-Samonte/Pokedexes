/* Require modules
--------------------------------------------------------------- */
const path = require('path');
const express = require('express');
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");


/* Create the Express app
--------------------------------------------------------------- */
const app = express();


/* Require the API functions
--------------------------------------------------------------- */
const api = require('./models');


/* Configure the app (app.set)
--------------------------------------------------------------- */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


/* Middleware (app.use)
--------------------------------------------------------------- */
// Define a function that will refresh the browser when nodemon restarts
const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
    // wait for nodemon to fully restart before refreshing the page
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});

// Tell Express what middleware functions to run
app.use(express.static('public'))
app.use(connectLiveReload())


/* Mount routes
--------------------------------------------------------------- */
app.get('/gallery', async (req, res) => {
        const pokedexes = await api.getKantoData();
        res.render('home', { pokedex: pokedexes });
        console.log(pokedexes)
})

app.get('/pokemon/:id', (req, res) => {
    api.getDetails(req.params.id)
        .then(data => res.render('details', { pokemonDetails: data }))
})


/* Tell the app to "listen" or run on the specified port
--------------------------------------------------------------- */
app.listen(3000, function () {
    console.log('Your app is running on port 3000...');
});