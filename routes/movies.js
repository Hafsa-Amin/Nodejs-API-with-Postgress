const express = require("express");
const router = express.Router();
const MoviesController = require("../controllers/moviesController");

router.get("/", MoviesController.getMovies);
router.get("/:id", MoviesController.findById);
router.post("/", MoviesController.create);
router.put("/:id", MoviesController.update);
router.delete("/:id", MoviesController.delete);

module.exports = router;