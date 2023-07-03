const dbConfig = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "123",
  DB: "popsmoke",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

export default dbConfig;
