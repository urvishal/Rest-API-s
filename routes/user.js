const express = require("express");
<<<<<<< HEAD
const {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser,
} = require("../controllers/user");
const router = express.Router();

//Routes
router.route("/").get(handleGetAllUsers).post(handleCreateNewUser);
=======
const {handleGetAllUsers, handleGetUserById, handleUpdateUserById,handleDeleteUserById,handleCreateNewUser} = require("../controllers/user");
const router = express.Router();

//Routes
router.get("/", handleGetAllUsers);
>>>>>>> 63f0a953404fdfdc2b2a842132ff9911e191202d

router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);

<<<<<<< HEAD
module.exports = router;
=======
router.post("/", handleCreateNewUser);

module.exports = router;
>>>>>>> 63f0a953404fdfdc2b2a842132ff9911e191202d
