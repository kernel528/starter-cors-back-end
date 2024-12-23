const express = require("express");
const cors = require("cors"); // module 3.12.3, enabling for entire api
const app = express();

const corsEnabledRouter = require("./cors-enabled/cors-enabled.router");
const corsNotEnabledRouter = require("./cors-not-enabled/cors-not-enabled.router");

const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");

app.use(cors()); // module 3.12.3, enabling for api.
app.use(express.json());

app.use("/cors-enabled", corsEnabledRouter);
app.use("/cors-not-enabled", corsNotEnabledRouter);

app.use(notFound);

app.use(errorHandler);

module.exports = app;
