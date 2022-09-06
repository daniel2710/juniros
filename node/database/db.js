import {Sequelize} from 'sequelize'


const db = new Sequelize('juniros', 'root', 'root', {
    hoost: 'localhost',
    dialect: 'mysql'
} )

export default db