const express = require('express');
const router = express.Router();
const startAnimes = require('../db/connection.js')
const Anime = require('../models/anime.js')

router.get('', (req, res) => {
    res.render('index', {anime})
})

router.post('', async (req, res) => {
    console.log(req.body)
    req.body.readyToWatch = req.body.readyToWatch === 'on' ? true : false;
    const anime = await Anime.create(req.body);
    res.redirect('/animes');
});

router.get('/new', (req, res) => {
    res.render('animes/new.ejs')
});

module.exports = router