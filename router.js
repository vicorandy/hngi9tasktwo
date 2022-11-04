const express = require("express");
const { sendInternInfo, performOperation }=require('./controller.js')

const router = express.Router();

router.route("/send_intern_info").get(sendInternInfo);
router.route("/perform_operation").post(performOperation);

module.exports = router;
