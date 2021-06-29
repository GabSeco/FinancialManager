const db = require('./../configs/sequelize')
const Saida = require('./model')
const Mes = require('./../mes/model')
const e = require('express')

exports.create = (req, res) => {
    Saida.create({
        id_mes: req.body.id_mes,
        descricao: req.body.descricao,
        valor: req.body.valor
    },
    {
        include: [{
            association: Mes.Saida
        }]
    }).then((Saida) => {
        res.send(Saida)
    }).catch((err) => {
        console.log(err)
    })
}

exports.findAll = (req, res) => {
    Saida.findAll().then((saidas) => {
        res.send(saidas)
    })
}