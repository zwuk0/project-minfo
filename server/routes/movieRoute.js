const express = require("express");
const router = express.Router();
const homeController = require("../controllers/movieController");

router.get("/movie/trending", homeController.getTrending);
router.get("/movie/:show", homeController.getAllMovie);
router.get("/movie/:id", homeController.getMovieDetails);
router.get("/movie/:id/video", homeController.getMovieTrailer);
// router.get("/search/:query", homeController.searchAll);
// router.get("/tv/:id", homeController.getTv);

module.exports = router;
