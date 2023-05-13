const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("postgres://localhost:5432/fitnessDB", {
    username: "postgres",
    password: "password",
});

module.exports = { sequelize };
