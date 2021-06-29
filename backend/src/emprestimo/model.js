const db = require('./../configs/sequelize')
const {Model, DataTypes} = db.Sequelize
const sequelize = db.sequelize
const Devedor = require('./../devedor/model')

class Emprestimo extends Model{}

Emprestimo.init({
    id_emprestimo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_devedor: {
        type: DataTypes.INTEGER
    },
    inicio_pgto: {
        type: DataTypes.DATE
    },
    valor_solicitado: {
        type: DataTypes.DOUBLE
    },
    valor_restante: {
        type: DataTypes.DOUBLE
    },
    juros_am: {
        type: DataTypes.DOUBLE
    },
    valor_total: {
        type: DataTypes.DOUBLE
    },
    valor_pago: {
        type: DataTypes.DOUBLE
    },
    qtd_parcelas: {
        type: DataTypes.INTEGER
    },
    qtd_parcelas_restantes: {
        type: DataTypes.INTEGER
    }
}, {sequelize,
    timestamps: false,
    tableName: 'emprestimos'})

Emprestimo.Devedor = Emprestimo.belongsTo(Devedor)
Devedor.Emprestimo = Devedor.hasMany(Emprestimo)

module.exports = Emprestimo