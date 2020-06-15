const express = require("express");
const router = require("express").Router();
const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({extended: true}));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} 

router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


app.listen(PORT, () => console.log(`API server listening at http://localhost:${PORT}`));