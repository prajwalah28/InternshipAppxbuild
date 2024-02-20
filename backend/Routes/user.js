const express = require("express");
const {
    updateUser,
    deleteUser,
    getAllUser,
    getSingleUser
  } = require("../Controllers/userController.js");

  
  const {authenticate,restrict} = require("../auth/verifyToken.js");
const router = express.Router();
// @route   GET api/users
router.get('/:id',authenticate,restrict(["patient"]),getSingleUser)
router.get('/',authenticate,restrict(["patient"]),getAllUser)
router.put('/:id',authenticate,restrict(["patient"]),updateUser)
router.delete('/:id',authenticate,restrict(["patient"]),deleteUser)

module.exports = router;