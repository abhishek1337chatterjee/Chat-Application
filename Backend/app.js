const express = require("express");
const app = expres();
const path = require('path');


const PORT = proces.env.PORT || 4000;

const server = app.listen(PORT, () =>
  console.log(`📢 Server is listening ${PORT}`)
);


app.use(express.static(path.join(__dirname, 'public')))