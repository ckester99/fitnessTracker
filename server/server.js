const express = require("express");
const app = express();
const port = 3000;
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("postgres://localhost:5432/dbname");

app.use(
    session({
        secret: "this should be randomized in prod",
        saveUninitialized: true,
        cookie: { maxAge: 1000 * 60 * 60 * 24 * 30 },
    })
);

sequelize.sync({ alter: true }).then(
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    })
);
