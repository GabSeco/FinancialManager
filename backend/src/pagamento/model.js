const db = require('./../configs/sequelize')
const {Model, DataTypes} = db.Sequelize
const sequelize = db.sequelize
const Emprestimo = require('./../emprestimo/model')

class Pagamento extends Model{}

Pagamento.init({
    id_parcela: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_emprestimo: {
        type: DataTypes.INTEGER
    },
    mes_parcela: {
        type: DataTypes.DATE
    },
    valor_parcela: {
        type: DataTypes.DOUBLE
    },
    situacao_pgto: {
        type: DataTypes.TINYINT
    }
}, {sequelize,
    tableName: 'pagamentos',
    timestamps: false});

Pagamento.Emprestimo = Pagamento.belongsTo(Emprestimo, {
    foreignKey: {
        name: 'id_emprestimo'
    }
});

Emprestimo.Pagamento = Emprestimo.hasMany(Pagamento, {
    foreignKey: {
        name: 'id_emprestimo'
    }
});

module.exports = Pagamento;