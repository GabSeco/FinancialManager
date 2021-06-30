const db = require('./../configs/sequelize')
const Credor = require('./model')

exports.create = (req, res) => {
    Credor.create({
        nome: req.body.nome,
        login: req.body.login,
        senha: req.body.senha,
        email: req.body.email
    }).then((credor) => {
        res.send(credor)
    }).catch((err) => {
        console.log(err)
    })
}

exports.findAll = (req, res) => {
    Credor.findAll().then((credores) => {
        res.send(credores)
    })
}

exports.remove = (req, res) => {
    Credor.destroy({
        where: {
            id_credor: req.body.id_credor
        }
    }).then((affectedRows) => {
        res.send({"message: ": "ok", "affectedRows: ": affectedRows})
    })
}