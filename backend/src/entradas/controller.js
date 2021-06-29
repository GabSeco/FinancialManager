const db = require('./../configs/sequelize')
const Mes = require('./../mes/model')
const Entrada = require('./model')

exports.create = (req, res) => {
    Entrada.create({
        id_mes: req.body.id_mes,
        descricao: req.body.descricao,
        valor: req.body.valor
    }, {
        include: [{
            association: Mes.Entrada
        }]
    }).then((entrada) => {
        res.send(entrada)
    }).catch((err) => {
        console.log(err)
    })
}

exports.findAll = (req, res) => {
    Entrada.findAll().then((entradas) => {
        res.send(entradas)
    })
}