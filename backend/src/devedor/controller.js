const db = require('./../configs/sequelize')
const Devedor = require('./model')

exports.create = (req, res) => {
    Devedor.create({
        nome: req.body.nome,
        cpf: req.body.cpf,
        contato: req.body.contato
    }).then((devedor) => {
        res.send(devedor)
    })
}

exports.findAll = (req, res) => {
    Devedor.findAll().then((devedores) => {
        res.send(devedores)
    })
}