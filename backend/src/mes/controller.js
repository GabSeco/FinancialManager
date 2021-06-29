const db = require('./../configs/sequelize')
const Mes = require('./model')

exports.create = (req, res) => {
    Mes.create({
        id_mes: req.body.id_mes,
        mes: req.body.mes,
        entrada_total: req.body.entrada_total,
        saida_total: req.body.saida_total,
        restante: req.body.restante
    }).then((mes) => {
        res.send(mes)
    }).catch((err) => {
        console.log(err)
    })
}

exports.findAll = (req, res) => {
    Mes.findAll().then((meses) => {
        res.send(meses)
    })
}