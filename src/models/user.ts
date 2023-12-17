import { DataTypes, Model } from 'sequelize'
import sequelize from '../db/connection.js'
import { userPayment } from './userPayment.js';

class User extends Model{}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    first_name:{
        type: DataTypes.STRING(15),
        allowNull: false 
    },
    second_name:{
        type: DataTypes.STRING(15),
        allowNull: false 
    },
    last_name:{
        type: DataTypes.STRING(15),
        allowNull: false 
    },
    last_name2:{
        type: DataTypes.STRING(15),
        allowNull: false 
    },
    profile_img:{
        type: DataTypes.STRING(100),
        allowNull: true 
    },
    schedule:{
        type: DataTypes.STRING(10),
        allowNull: false 
    },
    subscrition_type:{
        type: DataTypes.STRING(10),
        allowNull: false 
    }},
    {
        sequelize,
        tableName: 'user_profile'
    });


User.hasOne(userPayment, {
    foreignKey: 'user_id',
    sourceKey: 'id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});
    
userPayment.belongsTo(User, {
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

