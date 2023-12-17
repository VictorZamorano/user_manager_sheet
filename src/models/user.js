"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_js_1 = __importDefault(require("../db/connection.js"));
const userPayment_js_1 = require("./userPayment.js");
class User extends sequelize_1.Model {
}
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: sequelize_1.DataTypes.STRING(15),
        allowNull: false
    },
    second_name: {
        type: sequelize_1.DataTypes.STRING(15),
        allowNull: false
    },
    last_name: {
        type: sequelize_1.DataTypes.STRING(15),
        allowNull: false
    },
    last_name2: {
        type: sequelize_1.DataTypes.STRING(15),
        allowNull: false
    },
    profile_img: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true
    },
    schedule: {
        type: sequelize_1.DataTypes.STRING(10),
        allowNull: false
    },
    subscrition_type: {
        type: sequelize_1.DataTypes.STRING(10),
        allowNull: false
    }
}, {
    sequelize: connection_js_1.default,
    tableName: 'user_profile'
});
User.hasOne(userPayment_js_1.userPayment, {
    foreignKey: 'user_id',
    sourceKey: 'id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});
userPayment_js_1.userPayment.belongsTo(User, {
    foreignKey: 'user_id',
    targetKey: 'id',
});
// export const user = sequelize.define('user',{
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     name:{
//         type: DataTypes.STRING(15),
//         allowNull: false 
//     },
//     name2:{
//         type: DataTypes.STRING(15),
//         allowNull: false 
//     },
//     last_name:{
//         type: DataTypes.STRING(15),
//         allowNull: false 
//     },
//     last_name2:{
//         type: DataTypes.STRING(15),
//         allowNull: false 
//     },
//     profile_img:{
//         type: DataTypes.STRING(100),
//         allowNull: true 
//     },
//     schedule:{
//         type: DataTypes.STRING(10),
//         allowNull: false 
//     },
//     subscrition_type:{
//         type: DataTypes.STRING(10),
//         allowNull: false 
//     },
// });
