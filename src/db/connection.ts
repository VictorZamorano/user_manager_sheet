import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
    'db_manager_user', 
    'postgres', 
    'root',{
    username: 'localhost',
    dialect: 'postgres',
    timezone: "-03:00",
});

export default sequelize;