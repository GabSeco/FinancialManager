const db = require('./../configs/sequelize')
const {Model, DataTypes} = db.Sequelize
const Mes = require('./../mes/model')
const sequelize = db.sequelize

class Saida extends Model{}

Saida.init({
    id_saida: {
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
    tableName: 'saidas'})

Saida.Mes = Saida.belongsTo(Mes, {
    foreignKey: {
        name: 'id_mes'
    }
})

Mes.Saida = Mes.hasMany(Saida, {
    foreignKey: {
        name: 'id_mes'
    }
})

module.exports = Saida;