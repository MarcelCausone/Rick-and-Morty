const { Favorite } = require("../DB_connection");

module.exports = async (res, req) => {
  try {
    const { id } = req.params;

    await Favorite.destroy({ where: { id } });

    const allFavorites = await Favorite.findAll();
    return res.json(allFavorites);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
