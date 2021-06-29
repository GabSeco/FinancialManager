module.exports = (app) => {
    const controller = require('./controller');

    app.post('/saidas', controller.create)
    app.get('/saidas', controller.findAll)
}