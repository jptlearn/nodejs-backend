import express from "express";
import { ENV_KEYS } from "./constants.js";
import connectDB from "./db/index.js";
import { app } from "./app.js";

connectDB()
  .then(() => {
    app.listen(ENV_KEYS.PORT, () => {
      console.log(`Server is running on port ${ENV_KEYS.PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection ERROR: ", error);
  });
