const { index, init, create, show, edit, update, remove } = require('../controllers/controller');

module.exports = app => {
    app.get('/', index); // Index route
    app.get('/new', init); // New route
    app.post('/', create); // Create route
    app.get('/:index', show); // Show route
    app.get('/:index/edit', edit); // Edit route
    app.put('/:index', update); // Update route
    app.delete('/:index', remove); // Delete route
};

