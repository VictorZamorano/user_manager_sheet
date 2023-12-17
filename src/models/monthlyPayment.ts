import { DataTypes, Model } from 'sequelize'
import sequelize from '../db/connection.js'

class MonthlyPayment extends Model{}

MonthlyPayment.init ({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    monthly_date: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
    }, {
        sequelize,
        tableName: 'monthly_payment',
    });

// export const monthlyPayment = sequelize.define('monthly_payment', {
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//     },
//     monthly_date: {
//         type: DataTypes.DATEONLY,
//         defaultValue: DataTypes.NOW
//     },
//     active: {
//         type: DataTypes.BOOLEAN,
//         defaultValue: false
//     },
// });