const { createServer } = require("http");
const express = require("express");
const app = express();
const morgan = require("morgan");
const compression = require("compression");
const path = require("path");
var favicon = require("serve-favicon");
require("./db/config/config");

const dev = app.get("env") !== "production";

if (!dev) {
  app.disable("x-powerd-by");
  app.use(morgan("common"));
  app.use(compression());
}

if (dev) {
  app.use(morgan("dev"));
}

app.use(express.static(path.resolve(__dirname, "client", "build")));
// app.use(favicon(path.resolve(__dirname, "client", "build", "favicon.ico")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/projects", require("./routes/projects.route"));
app.use("/api/user", require("./routes/user.route"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

const server = createServer(app);

const PORT = parseInt(process.env.PORT) || 5000;
server.listen(PORT, err => {
  if (err) console.log(err);
  console.log(`Server Runinng at port ${PORT}`);
});

// app.listen(PORT, () => {
//   console.log(`Listening on port : ${PORT}`);
// });
