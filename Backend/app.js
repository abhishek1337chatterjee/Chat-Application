const express = require("express");
const app = expres();

const PORT = proces.env.PORT || 4000;

const server = app.listen(PORT, () =>
  console.log(`📢 Server is listening ${PORT}`)
);
