const sequelize = require('sequelize')

const conexao = new sequelize('nome-do-banco/database-name', 'user', 'password', {
    host: 'host',
    port: 6565 ,
    dialect: 'mysql',
    dialectOptions: {
        ssl:{
            require: true,
            rejectUnauthorized: false 
        }
    },
    logging: false
})

async function testarConexao() {
    try{

        await conexao.authenticate()
        console.log("Banco conectado com sucesso")

    } catch(err){
        console.log("Não deu certo, moio")
    }
}

testarConexao()

module.exports = conexao