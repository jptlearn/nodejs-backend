import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { APP_CONSTANTS, ENV_KEYS } from "./constants.js";

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

// Routes import
import userRouter from "./routes/userRoutes.js";

// routes declaration
app.use("/api/v1/users", userRouter);

export { app };
