const router = require("express").Router();
const articleRoutes = require("./articles");


router.use("/articleRoutes", articleRoutes);

module.exports = router;