module.exports = (sequelize, Sequelize) => {
  const Floor = sequelize.define('floor', {
    number: {
      type: Sequelize.INTEGER,
    },
    map: {
      type: Sequelize.TEXT,
    },
    building_id: {
      type: Sequelize.UUID,
    },
    number_of_microwaves: {
      type: Sequelize.INTEGER,
    },
  });

  return Floor;
};
