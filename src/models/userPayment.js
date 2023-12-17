"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userPayment = void 0;
const sequelize_1 = require("sequelize");
const connection_js_1 = __importDefault(require("../db/connection.js"));
class userPayment extends sequelize_1.Model {
}
exports.userPayment = userPayment;
userPayment.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    monthly_id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
}, {
    sequelize: connection_js_1.default,
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
