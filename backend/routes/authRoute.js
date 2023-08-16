const {Signup, Login} = require("../controllers/authController");
const { userVerification } = require("../middleware/authMiddleware");
const router = require("express").Router();

router.post("/signup", Signup);

router.post("/login", Login)

router.post("/", userVerification)

module.exports = router;
