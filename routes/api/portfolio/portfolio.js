const router = require("express").Router();
const portfolioController = require("../../../controllers/portfolioControler");

// Matches with "/api/portfolio"
router.route("/")
  .get(portfolioController.findByUserId)
  .post(portfolioController.create);

// Matches with "/api/portfolio/:id"
router.route("/:id")
  .get(portfolioController.findById);
  // .put(portfolioController.update)
  // .delete(portfolioController.remove);

module.exports = router;
