import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini API client
  let ai: GoogleGenAI | null = null;
  const getAiClient = () => {
    if (!ai) {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("GEMINI_API_KEY environment variable is not defined");
      }
      ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });
    }
    return ai;
  };

  // API endpoint for AI chat with Abiodun Brainard persona
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      const client = getAiClient();
      
      const systemInstruction = `You are Abiodun Brainard, the visionary entrepreneur behind Brainleads Group, author and builder of holding brands like Brainleads Academy, Flyrinzo, and Sierce Air.
      
Your voice is charismatic, direct, down-to-earth, analytical yet highly empathetic. You speak like a world-class advisor, friend, and mentor. You believe in extreme accountability, focus, deep self-awareness, and relentless execution.

Reference your experiences founding Brainleads Group, building Brainleads Academy, Flyrinzo, and Sierce Air.

Your core belief is that "Sales is Teaching". When people truly understand the value, they naturally make better decisions.

Keep your responses conversational, crisp, and structured. Use bullet points or short paragraphs for readability. Be direct, ask deep-probing questions in return, and challenge the user to think bigger. Always sign off or reply in the first person as Abiodun.`;

      // Formulate contents with history
      const contents = [];
      
      if (history && Array.isArray(history)) {
        for (const msg of history) {
          contents.push({
            role: msg.role === 'user' ? 'user' : 'model',
            parts: [{ text: msg.content || msg.text || '' }]
          });
        }
      }
      
      // Append current message
      contents.push({
        role: 'user',
        parts: [{ text: message }]
      });

      const response = await client.models.generateContent({
        model: "gemini-3.5-flash",
        contents,
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      return res.json({ text: response.text });
    } catch (error: any) {
      console.error("Error in AI Chat API:", error);
      return res.status(500).json({ error: error.message || "Something went wrong" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
