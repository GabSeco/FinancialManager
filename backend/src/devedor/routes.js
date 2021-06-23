module.exports = (app) => {
    const controller = require('./controller')

    app.post('/devedores', controller.create)
    app.get('/devedores', controller.findAll)
}