const Pokemon = require('../models/pokemon');

module.exports = {
    index: (req, res) => {
        res.render('index.ejs', {
            pokemon: Pokemon
        });
    },
    init: (req, res) => {
        res.render('new.ejs', {
            pokemon: Pokemon[0]
        });
    },
    create: (req, res) => {
        Pokemon.push(req.body);
        res.redirect('/');
    },
    show: (req, res) => {
        res.render('show.ejs', {
            pokemon: Pokemon[req.params.index],
        });
    },
    edit: (req, res) => {
        res.render('edit.ejs', {
            pokemon: Pokemon[req.params.index],
            index: req.params.index
        });
    },
    update: (req, res) => {
        Pokemon[req.params.index] = req.body;
        res.redirect('/');
    },
    remove: (req, res) => {
        Pokemon.splice(req.params.index, 1);
        res.redirect('/');
    }
};
