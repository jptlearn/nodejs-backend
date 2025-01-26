import dotenv from "dotenv";

dotenv.config();

export const ENV_KEYS = {
  MONGODB_URI: process.env.MONGODB_URI,
  PORT: process.env.PORT || 3000,
  DB_NAME: process.env.DB_NAME,
  CORS_ORIGIN: process.env.CORS_ORIGIN,
};

export const APP_CONSTANTS = {
  JSON_LIMIT: "16kb",
  URL_ENCODED_LIMIT: "16kb",
};
