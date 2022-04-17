const { sequelize } = require('../database/database.config');
import { DataTypes } from "sequelize";

export const User = sequelize.define(
  'User',
  {
    phone: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);
