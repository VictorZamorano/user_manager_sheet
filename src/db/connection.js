"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('db_manager_user', 'postgres', 'root', {
    username: 'localhost',
    dialect: 'postgres',
    timezone: "-03:00",
});
exports.default = sequelize;
