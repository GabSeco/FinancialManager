const db = require('./../configs/sequelize')
const {Model, DataTypes} = db.Sequelize
const sequelize = db.sequelize

class Devedor extends Model{}

Devedor.init({
    id_devedor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING
    },
    cpf: {
        type: DataTypes.STRING
    },
    contato: {
        type: DataTypes.STRING
    }
}, {sequelize,
    timestamps: false,
    tableName: 'devedores'})

module.exports = Devedor;