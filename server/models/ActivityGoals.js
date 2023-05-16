const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../config");

class ActivityGoals extends Model {}

ActivityGoals.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },

        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        activities: {
            type: DataTypes.JSONB,
        },
    },
    {
        sequelize,
        freezeTableName: true,
    }
);

module.exports = FoodGoals;
