module.exports = function (sequelize, DataTypes) {
  var Portfolio = sequelize.define("Portfolio", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cash: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0
      }
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: sequelize.NOW
    }
  });

  Portfolio.associate = function (models) {

    Portfolio.hasMany(models.Stock, {
      onDelete: "cascade"
    });

    Portfolio.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });

  };

  return Portfolio;
};
