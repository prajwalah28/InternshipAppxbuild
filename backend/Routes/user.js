const express = require("express");
const {
    updateUser,
    deleteUser,
    getAllUser,
    getSingleUser
  } = require("../Controllers/userController.js");
const router = express.Router();
// @route   GET api/users
router.get('/:id',getSingleUser)
router.get('/',getAllUser)
router.put('/:id',updateUser)
router.delete('/:id',deleteUser)

module.exports = router;