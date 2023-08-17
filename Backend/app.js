const express = require("express");
const app = express();
const path = require('path');


const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, () =>
  console.log(`📢 Server is listening ${PORT}`)
);


app.use(express.static(path.join(__dirname, 'public')))