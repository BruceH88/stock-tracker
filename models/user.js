// var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {

    userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    firstName: {
        type: DataTypes.STRING
    },
    lastName: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

User.associate = function (models) {

  User.hasMany(models.Portfolio, {
      onDelete: "cascade"
  });

};

// User.prototype.validPassword = function (password) {
//   return bcrypt.compareSync(password, this.password);
// };

// User.hook("beforeCreate", function (user) {
//   user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
// });

return User;
};
