import dbConfig from "../dbConfig";
import * as Sequelize from "sequelize";

export const sequelize = new Sequelize.Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: "postgres",
    pool: {
      min: 0,
      max: 5,
      acquire: 30000,
      idle: 10000,
    },
  }
);
const db: any = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

export default db;
