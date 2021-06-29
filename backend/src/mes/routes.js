module.exports = (app) => {
    const controller = require('./controller')

    app.post('/meses', controller.create)
    app.get('/meses', controller.findAll)
}