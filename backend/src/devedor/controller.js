const db = require('./../configs/sequelize')
const Devedor = require('./model')

exports.create = (req, res) => {
    Devedor.create({
        nome: req.body.nome,
        cpf: req.body.cpf,
        contato: req.body.contato
    }).then((devedor) => {
        res.send(devedor)
    }).catch((err) => {
        console.log(err)
    })
}

exports.findAll = (req, res) => {
    Devedor.findAll().then((devedores) => {
        res.send(devedores)
    })
}

exports.remove = (req, res) => {
    Devedor.destroy({
        where: {
            id_devedor: req.body.id_devedor
        }
    }).then((affectedRows) => {
        res.send({"message: ": "ok", "affectedRows: ": affectedRows})
    })
}