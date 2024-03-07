import { Sequelize } from "sequelize"

const db= new Sequelize('Serambi_Buku', 'root','',{
    host : 'localhost',
    dialect : 'mysql'

})

export default db