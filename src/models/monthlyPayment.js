"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_js_1 = __importDefault(require("../db/connection.js"));
class MonthlyPayment extends sequelize_1.Model {
}
MonthlyPayment.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    monthly_date: {
        type: sequelize_1.DataTypes.DATEONLY,
        defaultValue: sequelize_1.DataTypes.NOW
    },
    active: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    sequelize: connection_js_1.default,
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
