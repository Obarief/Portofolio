const express = require('express');
const router = express.Router();

const userController = require('../controller/users')



// Create new users - POST
router.post('/', userController.createNewUsers);

// Read users - GET
router.get('/', userController.getAllUsers);

// Update users - PATCH
router.patch('/:id', userController.updateUsers);

// Delete users - DELETE
router.delete('/:id', userController.deleteUsers);



module.exports = router;