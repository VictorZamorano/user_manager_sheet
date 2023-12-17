import { DataTypes, Model } from 'sequelize'
import sequelize from '../db/connection.js'

class adminAcc extends Model{}

adminAcc.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    account: {
        type: DataTypes.STRING(15)
    },
    password: {
        type: DataTypes.STRING
    }   
    },{
        sequelize,
        tableName: 'admin_acc'
    });

// export const adminAcc = sequelize.define('admin_accs', {
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     account: {
//         type: DataTypes.STRING(15)
//     },
//     password: {
//         type: DataTypes.STRING
//     }
// } );