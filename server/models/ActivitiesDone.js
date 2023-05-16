const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../config");

class ActivitiesDone extends Model {}

ActivitiesDone.init(
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

        activityDate: {
            type: DataTypes.DATEONLY,
        },
    },
    {
        sequelize,
        freezeTableName: true,
    }
);

module.exports = FoodGoals;
