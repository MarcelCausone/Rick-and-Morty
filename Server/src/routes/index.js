const { getCharById } = require("../controllers/getCharById");
const login = require("../controllers/login");
const postUser = require("../controllers/postUser");
const postFav = require("../controllers/postFavs");
const deleteFav = require("../controllers/deleteFavs");

const router = require("express").Router();

router.get("/character/:id", (req, res) => {
  getCharById(req, res);
});
router.get("/login", login);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;
