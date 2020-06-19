require("dotenv").config();
const { createServer } = require("http");
const express = require("express");
let server = express();
const morgan = require("morgan");
const compression = require("compression");
const path = require("path");
var favicon = require("serve-favicon");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("./db/config/config");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

if (!dev) {
  server.disable("x-powerd-by");
  server.use(morgan("common"));
  server.use(compression());
}

if (dev) {
  server.use(morgan("dev"));
}

server.use(cors());
server.use(express.static(path.resolve(__dirname, "public", "static")));
// server.use(favicon(path.resolve(__dirname, "client", "build", "favicon.ico")));
server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use(cookieParser());
server.use("/api/projects", require("./routes/projects.route"));
server.use("/api/user", require("./routes/user.route"));

(async () => {
  try {
    await app.prepare();
    server.get("*", (req, res) => {
      return handle(req, res);
    });
    server = createServer(server);

    const PORT = parseInt(process.env.PORT) || 5000;
    server.listen(PORT, (err) => {
      if (err) console.log(err);
      console.log(`Server Runinng at port ${PORT}`);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
