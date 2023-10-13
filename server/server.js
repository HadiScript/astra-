require("dotenv").config();
const express = require("express");
const cors = require("cors");

const path = require("path");
const morgan = require("morgan");
const app = express();
const http = require("http").createServer(app);

app.use(express.json({ limit: "4mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "mine/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "mine", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

const port = process.env.PORT || 9000;

http.listen(port, () => console.log("Server running on port 8000"));
