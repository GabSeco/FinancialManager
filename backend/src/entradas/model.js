const db = require('./../configs/sequelize')
const {Model, DataTypes} = db.Sequelize
const Mes = require('./../mes/model')
const sequelize = db.sequelize

class Entrada extends Model{}

Entrada.init({
    id_entrada: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_mes: {
        type: DataTypes.INTEGER
    },
    descricao: {
        type: DataTypes.STRING
    },
    valor: {
        type: DataTypes.DOUBLE
    }
}, {sequelize,
    timestamps: false,
    tableName: 'entradas'});

Entrada.Mes = Entrada.belongsTo(Mes, {
    foreignKey: {
        name: 'id_mes'
    }
})

Mes.Entrada = Mes.hasMany(Entrada, {
    foreignKey: {
        name: 'id_mes'
    }
})

module.exports = Entrada;