const express = require("express");
const session = require("express-session");
const app = express();
const port = 3000;
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("postgres://localhost:5432/fitnessDB", {
    username: "postgres",
    password: "password",
});

app.use(
    session({
        secret: "this should be randomized in prod",
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 1000 * 60 * 60 * 24 * 30 },
    })
);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
