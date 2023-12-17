"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_js_1 = __importDefault(require("../db/connection.js"));
class adminAcc extends sequelize_1.Model {
}
adminAcc.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    account: {
        type: sequelize_1.DataTypes.STRING(15)
    },
    password: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    sequelize: connection_js_1.default,
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
