import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { APP_CONSTANTS, ENV_KEYS } from "./constants";

const app = express();

app.use(
  cors({
    origin: ENV_KEYS.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: APP_CONSTANTS.JSON_LIMIT }));
app.use(
  express.urlencoded({ extended: true, limit: APP_CONSTANTS.URL_ENCODED_LIMIT })
);
app.use(express.static("public"));
app.use(cookieParser());

export { app };
