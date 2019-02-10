const router = require("express").Router();
const userController = require("../../../controllers/userControler");
const portfolioController = require("../../../controllers/portfolioControler");

// Matches with "/api/user/:id"
router.route("/:id")
  .get(userController.findByUserId)
  .post(userController.create);

// Matches with "/api/user/portfolio"
router.route("/:id")
  .get(portfolioController.findByUserId);
  // .put(portfolioController.update)
  // .delete(portfolioController.remove);

module.exports = router;
