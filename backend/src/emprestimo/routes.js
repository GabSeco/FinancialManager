module.exports = (app) => {
    const controller = require('./controller')

    app.post('/emprestimos', controller.create);
    app.get('/emprestimos', controller.findAll)
}