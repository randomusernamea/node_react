const knex = require("knex")({
    client: "pg",
    connection: {
      host: "localhost",
      user: "postgres",
      port: 5432,
      password: "*****",
      database: "postgres",
    },
  });
  
  module.exports = knex;
  