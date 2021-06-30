module.exports = (app) => {
    const controller = require('./controller')

    app.post('/credores', controller.create)
    app.get('/credores', controller.findAll)
}