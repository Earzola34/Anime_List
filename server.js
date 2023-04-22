const express = require('express');
const app = express();
const animeController = require('./controllers/anime')
const methodOverride = require('method-override');

// Linking the model
const Anime = require('./models/anime');

// middleware

// submit function functionality
app.use(express.urlencoded({ extended:false }));

app.use(methodOverride('_method'));

// ability to view ejs files
app.set('view engine', 'ejs');


// routes
app.post('/animes', async (req, res) => {
    req.body.extinct = req.body.extinct === 'on' ? true : false;
    const anime = await Anime.create(req.body);
    res.redirect('/animes')
})

app.get('/animes', async (req, res) => {
    //you can get all the objects by using the find method with empty {}
    const animes = await Anime.find({});
    res.render('index', {animes});
})

app.get('/animes/new', async (req, res) => {
    res.render('new');
})

app.get('/animes/:id', async (req, res) => {
    const anime = await Anime.findById(req.params.id);
    res.render('show', {anime})
})

app.get('/animes/:id/edit', async (req, res) => {
    const anime = await Anime.findById(req.params.id);
    res.render('edit', {anime})
})

app.delete('/animes/:id', async (req, res) => {
    const anime = await Anime.findByIdAndDelete(req.params.id);
    res.redirect('/animes');
})

app.put('/animes/:id', async (req, res) => {
    req.body.extinct = req.body.extinct === 'on' ? true : false;
    const anime = await Anime.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.redirect('/animes');
})

//fallback route
app.get('/*', (req, res) => {
    res.send('You messed up...');
})

app.use('/anime', animeController)

app.listen(3000, () => {
    console.log('🏝️ Server is listening to 4000 🎧')
})