'use strict';
module.exports = (sequelize, DataTypes) => {
  const EntreeType = sequelize.define('EntreeType', {
    name: DataTypes.STRING,
    isVegetarian: DataTypes.BOOLEAN
  }, {});
  EntreeType.associate = function(models) {
    // associations can be defined here
    EntreeType.hasMany(models.Entree, { foreignKey: 'entreeTypeId' })
  };
  return EntreeType;
};
