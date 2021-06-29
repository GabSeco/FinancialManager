const db = require('./../configs/sequelize')
const Pagamento = require('./model')
const Emprestimo = require('./../emprestimo/model')

exports.create = (req, res) => {
    Pagamento.create({
        id_emprestimo: req.body.id_emprestimo,
        mes_parcela: req.body.mes_parcela,
        valor_parcela: req.body.valor_parcela,
        situacao_pgto: req.body.situacao_pgto
    }, {
        include: [{
            association: Emprestimo.Pagamento
        }]
    }).then((pagamento) => {
        res.send(pagamento)
    }).catch((err) => {
        console.log(err)
    })
}

exports.findAll = (req, res) => {
    Pagamento.findAll().then((pagamentos) => {
        res.send(pagamentos)
    })
}