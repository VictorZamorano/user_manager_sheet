import { DataTypes, Model } from 'sequelize'
import sequelize from '../db/connection.js'

export class userPayment extends Model{}

userPayment.init ({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id:{
        type: DataTypes.INTEGER,
    },
    monthly_id:{
        type: DataTypes.INTEGER,
    },
    },{
        sequelize,
        tableName: 'user_payment'
    });

// export const userPayment = sequelize.define('user_payment', {
//     id:{
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//     },
//     user_id:{
//         type: DataTypes.INTEGER,
//     },
//     monthly_id:{
//         type: DataTypes.INTEGER,
//     },
// })