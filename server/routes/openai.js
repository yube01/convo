import express from "express";
import dotenv from "dotenv";
import { openai } from "../index.js";
import axios from "axios";

dotenv.config();

const router = express.Router();

router.post("/text", async (req, res) => {
  try {
    const { text, activeChatId } = req.body;
    console.log(text);
    res.status(200).json({ text });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
