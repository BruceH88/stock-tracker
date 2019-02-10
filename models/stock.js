module.exports = function (sequelize, DataTypes) {
  var Stock = sequelize.define("Stock", {
    symbol: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 6]
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    shares: {
      type: DataTypes.DECIMAL(10, 4),
      allowNull: false,
      defaultValue: 0
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: sequelize.NOW
    },
    cost: {
      type: DataTypes.DECIMAL(10, 4),
      allowNull: false,
      defaultValue: 0
    }

  });

  Stock.associate = function (models) {

    Stock.belongsTo(models.Portfolio, {
      foreignKey: {
        allowNull: false
      }
    });

  };

  return Stock;
};
