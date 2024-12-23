const router = require("express").Router();
const controller = require("./cors-enabled.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const cors = require("cors");
const corsDelete = cors({methods: "DELETE"});

router
  .route("/:corsId")
    .get(controller.read)
    .put(controller.update)
    // .delete(controller.delete) // This was the initial configuration.
    // .delete(cors(), controller.delete) // non-options enabled in module.
    .delete(corsDelete, controller.delete)
    .options(corsDelete)
    .all(methodNotAllowed);

router
  .route("/")
    // .get(controller.list)
    .get(cors(), controller.list)
    .post(controller.create)
    .all(methodNotAllowed);

module.exports = router;
