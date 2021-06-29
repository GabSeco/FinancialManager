const db = require('./../configs/sequelize')
const Emprestimo = require('./model')
const Devedor = require('./../devedor/model')

exports.create = (req, res) => {
    Emprestimo.create({
        id_devedor: req.body.id_devedor,
        inicio_pgto: req.body.inicio_pgto,
        valor_solicitado: req.body.valor_solicitado,
        valor_restante: req.body.valor_restante,
        juros_am: req.body.juros_am,
        valor_total: req.body.valor_total,
        valor_pago: req.body.valor_pago,
        qtd_parcelas: req.body.qtd_parcelas,
        qtd_parcelas_restantes: req.body.qtd_parcelas_restantes
    }, {
        include: [{
            association: Devedor.Emprestimo
        }]
    }).then((emprestimo) => {
        res.send(emprestimo)
    }).catch((err) => {
        console.log(err)
    })
}

exports.findAll = (req, res) => {
    Emprestimo.findAll().then((emprestimos) => {
        res.send(emprestimos)
    })
}