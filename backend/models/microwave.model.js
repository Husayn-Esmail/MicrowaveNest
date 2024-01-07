module.exports = (sequelize, Sequelize) => {
  const Microwave = sequelize.define('microwave', {
    building_id: {
      type: Sequelize.UUID,
    },
    floor_id: {
      type: Sequelize.UUID,
    },
    status: {
      type: Sequelize.BOOLEAN,
    },
    upvote: {
      type: Sequelize.INTEGER,
    },
    downvote: {
      type: Sequelize.INTEGER,
    },
  });

  return Microwave;
};
