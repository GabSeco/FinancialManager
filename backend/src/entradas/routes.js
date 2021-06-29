module.exports = (app) => {
    const controller = require('./controller')

    app.post('/entradas', controller.create)
    app.get('/entradas', controller.findAll)
}