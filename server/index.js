import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";
import openAiRoutes from "./routes/openai.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));

app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

//open ai config

const configuration = new Configuration({
  apiKey: process.env.OPEN_API_KEY,
});

export const openai = new OpenAIApi(configuration);

//middleware

app.use("/openai", openAiRoutes);

app.listen(3000, () => {
  console.log("server started!!!");
});
