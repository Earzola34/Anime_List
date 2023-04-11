const express = require('express');
const app = express();
const methodOverride = require('method-override');

// linking our model
const anime = require('/.anime');

// middleware
app.use(express.urlencoded({ extended:false }));
// the _ needs to always be included
app.use(methodOverride('_method'));

// index
app.get('/anime', (req, res) => {
    res.render('index', {anime})
})

// new route
app.get('/anime/new', (req, res) => {
    res.render('new')
})

// show route
app.get('/anime/:id', (req, res) => {
    let newAnime = {

    }
})

// edit 
app.get('/anime/:id/edit', (req, res) => {

})

app.listen(3000, () => {
    console.log('🏝️ Server is listening to 4000 🎧')
})