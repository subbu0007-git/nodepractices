const express = require("express");
const router = express.Router();
const { handlGetallusers, handlGetwithbyid, handlUpdatewithbyid, handlDeletewithbyid, hadleCreateuser } = require('../controllers/user')


router.route("/").get(handlGetallusers).post(hadleCreateuser)

router.route("/:id")
    .get(handlGetwithbyid)
    .put(handlUpdatewithbyid)
    .delete(handlDeletewithbyid)


module.exports = router;