module.exports = (sequelize, Sequelize) => {
  const Building = sequelize.define('building', {
    name: {
      type: Sequelize.TEXT,
    },
    building_hours: {
      type: Sequelize.TEXT,
    },
  });

  return Building;
};
