'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tasks = sequelize.define('Tasks', {
    idUser: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING
  }, {});
  Tasks.associate = function(models) {
    // associations can be defined here
  };
  return Tasks;
};