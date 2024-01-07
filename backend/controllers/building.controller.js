const db = require('../models');
const Building = db.building;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
    return;
  }

  // Create a Building
  const building = {
    name: req.body.name,
    building_hours: req.body.building_hours,
    //published: req.body.published ? req.body.published : false
  };

  // Save Building in the database
  Building.create(building)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the Building.',
      });
    });
};

exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

  Building.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving buildings.',
      });
    });
};

// exports.findOne = (req, res) => {
//   const id = req.params.id;

//   Building.findByPk(id)
//     .then((data) => {
//       if (data) {
//         res.send(data);
//       } else {
//         res.status(404).send({
//           message: `Cannot find Building with id=${id}.`,
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: `Error retrieving Building with id=${id}.`,
//       });
//     });
// };

// exports.update = (req, res) => {
//   const id = req.params.id;

//   Building.update(req.body, {
//     where: { id: id },
//   })
//     .then((num) => {
//       if (num == 1) {
//         res.send({
//           message: 'Building was updated successfully.',
//         });
//       } else {
//         res.send({
//           message: `Cannot update Building with id=${id}. Maybe Building was not found or req.body is empty!`,
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: `Error updating Building with id=${id}.`,
//       });
//     });
// };

// exports.delete = (req, res) => {
//   const id = req.params.id;

//   Building.destroy({
//     where: { id: id },
//   })
//     .then((num) => {
//       if (num == 1) {
//         res.send({
//           message: 'Building was deleted successfully!',
//         });
//       } else {
//         res.send({
//           message: `Cannot delete Building with id=${id}. Maybe Building was not found!`,
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: `Could not delete Building with id=${id}.`,
//       });
//     });
// };

// exports.deleteAll = (req, res) => {
//   Building.destroy({
//     where: {},
//     truncate: false,
//   })
//     .then((nums) => {
//       res.send({ message: `${nums} Buildings were deleted successfully!` });
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message:
//           err.message || 'Some error occurred while removing all Building.',
//       });
//     });
// };
