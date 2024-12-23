const router = require("express").Router();
const controller = require("./cors-enabled.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const cors = require("cors");

router
  .route("/:corsId")
    .all(cors())
    .get(controller.read)
    .put(controller.update)
    // .delete(controller.delete) // This was the initial configuration.
    // .delete(cors(), controller.delete) // non-options enabled in module.
    // .delete(corsDelete, controller.delete) // disabled to enable cors on route for all methods.
    // .options(corsDelete)
    .delete(controller.delete)
    .all(methodNotAllowed);

router
  .route("/")
    // .get(controller.list)
    .get(cors(), controller.list)
    .post(controller.create)
    .all(methodNotAllowed);

module.exports = router;
