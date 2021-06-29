const db = require('./../configs/sequelize')
const {Model, DataTypes} = db.Sequelize
const sequelize = db.sequelize

class Mes extends Model{}

Mes.init({
    id_mes: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    mes: {
        type: DataTypes.DATE
    },
    entrada_total: {
        type: DataTypes.DOUBLE
    },
    saida_total: {
        type: DataTypes.DOUBLE
    },
    restante: {
        type: DataTypes.DOUBLE
    }
}, {sequelize, 
    timestamps: false,
    tableName: 'meses'})

    module.exports = Mes