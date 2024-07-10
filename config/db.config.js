const { createPool } = require("mysql");
const db = createPool({
  port: 3306,
  host: "verademo-app-docker-api-1", //docker container name
  user: "blab",
  password: "z2^E6J4$;u;d",
  database: "blab",
  connectionLimit: 10,
});
module.exports = db;