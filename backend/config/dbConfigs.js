const sequelize = require('sequelize')
const conexao = new sequelize('defaultdb','avnadmin','AVNS_m2XIC6mFs8Og-BVP00k',{
    host:'mysql-284aac54-juliocgdlima-8a90.g.aivencloud.com',
    port: 10379,
    dialect:'mysql',
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
        console.log("Sucesso")
    } catch(err){
        console.log("ERRO")
    }
} 

testarConexao()

module.exports = conexao

