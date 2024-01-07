module.exports = (sequelize, Sequelize) => {
  const Comment = sequelize.define('comment', {
    microwave_id: {
      type: Sequelize.UUID,
    },
    comment: {
      type: Sequelize.TEXT,
    },
    user: {
      type: Sequelize.UUID,
    },
  });

  return Comment;
};
