// const db = require('../models');
// const Floor = db.floor;
// const Op = db.Sequelize.Op;

// // Create and Save a new Tutorial
// exports.create = (req, res) => {
//   // Validate request
//   if (!req.body.number) {
//     res.status(400).send({
//       message: 'Number can not be empty!',
//     });
//     return;
//   }

//   if (!req.body.map) {
//     res.status(400).send({
//       message: 'map can not be empty!',
//     });
//     return;
//   }

//   if (!req.body.building_id) {
//     res.status(400).send({
//       message: 'building_id can not be empty!',
//     });
//     return;
//   }

//   if (!req.body.number_of_microwaves) {
//     res.status(400).send({
//       message: 'number_of_microwaves can not be empty!',
//     });
//     return;
//   }

//   // Create a Floor
//   const floor = {
//     number: req.body.number,
//     map: req.body.map,
//     building_id: req.body.building_id,
//     number_of_microwaves: req.body.number_of_microwaves,
//   };

//   // Save Floor in the database
//   Floor.create(floor)
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: err.message || 'Some error occurred while creating the Floor.',
//       });
//     });
// };

// // Retrieve all Floors from the database.
// exports.findAll = (req, res) => {
//   const id = req.query.id;

//   Tutorial.findAll()
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: err.message || 'Some error occurred while retrieving Floors.',
//       });
//     });
// };

// // Find a single Floor with an id
// exports.findOne = (req, res) => {
//   const id = req.params.id;

//   Tutorial.findByPk(id)
//     .then((data) => {
//       if (data) {
//         res.send(data);
//       } else {
//         res.status(404).send({
//           message: `Cannot find Floor with id=${id}.`,
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: `Error retrieving Floor with id=${id}.`,
//       });
//     });
// };

// // Update a Floor by the id in the request
// exports.update = (req, res) => {
//   const id = req.params.id;

//   Tutorial.update(req.body, {
//     where: { id: id },
//   })
//     .then((num) => {
//       if (num == 1) {
//         res.send({
//           message: 'Tutorial was updated successfully.',
//         });
//       } else {
//         res.send({
//           message: `Cannot update Floor with id=${id}. Maybe Floor was not found or req.body is empty!`,
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: `Error updating Floor with id=${id}`,
//       });
//     });
// };

// // Delete one Floor from the database.
// exports.delete = (req, res) => {
//   const id = req.params.id;

//   Tutorial.destroy({
//     where: { id: id },
//   })
//     .then((num) => {
//       if (num == 1) {
//         res.send({
//           message: 'Floor was deleted successfully!',
//         });
//       } else {
//         res.send({
//           message: `Cannot delete Floor with id=${id}. Maybe Floor was not found!`,
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: `Could not delete Floor with id=${id}`,
//       });
//     });
// };

// // Delete all Floors from the Database
// exports.deleteAll = (req, res) => {
//   Tutorial.destroy({
//     where: {},
//     truncate: false,
//   })
//     .then((nums) => {
//       res.send({ message: `${nums} Floor were deleted successfully!` });
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: err.message || 'Some error occurred while removing all Floor.',
//       });
//     });
// };

// // Find all published Tutorials
// exports.findAllPublished = (req, res) => {
//   Tutorial.findAll({ where: { building_id: req.params.building_id } })
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: err.message || 'Some error occurred while retrieving floors.',
//       });
//     });
// };
