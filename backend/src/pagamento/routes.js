module.exports = (app) => {
    const controller = require('./controller')

    app.post('/pagamentos', controller.create)
    app.get('/pagamentos', controller.findAll)
}