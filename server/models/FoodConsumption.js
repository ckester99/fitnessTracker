const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../config");

class FoodConsumption extends Model {}

FoodConsumption.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },

        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        foodName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        protein: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        calories: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
    }
);

module.exports = FoodConsumption;
