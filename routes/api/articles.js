const router = require("express").Router();
const axios = require("axios");
const articlesController = require("../../controllers/articlesController");


router.route("/")
  .get(articlesController.findAll)
  .post(articlesController.create);

router
  .route("/:id")
  .get(articlesController.findById)
  .put(articlesController.update)
  .delete(articlesController.remove);

  router.get("/articles", (req, res) => {
    axios
      .get("https://api.nytimes.com/svc/search/v2/articlesearch.json?", { params: req.query }, { params: req.APIKEY })
      .then(({ data: { results } }) => res.json(results))
      .catch(err => res.status(422).json(err));
  });

module.exports = router;