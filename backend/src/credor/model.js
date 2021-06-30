const db = require('./../configs/sequelize')
const {Model, DataTypes} = db.Sequelize
const sequelize = db.sequelize

class Credor extends Model{}

Credor.init({
    id_credor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING
    },
    login: {
        type: DataTypes.STRING
    },
    senha: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    }
}, {sequelize,
    timestamps: false,
    tableName: 'credores'})

module.exports = Credor;