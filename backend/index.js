const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const db = require('./src/configs/sequelize')

app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))

db.sequelize.authenticate().then(() => {
    console.log("Sincronizado com sucesso...");
})

require('./src/credor/routes')(app)
require('./src/devedor/routes')(app)
require('./src/emprestimo/routes')(app)
require('./src/pagamento/routes')(app)

var server = app.listen(3333, () => {
    console.log("Server is running...")
})