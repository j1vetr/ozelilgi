import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { sendPreRegistrationConfirmation, sendContactConfirmation } from "./email";
import { chatWithBot } from "./chatbot";

const preRegistrationSchema = z.object({
  studentName: z.string().min(1),
  parentName: z.string().min(1),
  phone: z.string().min(1),
  email: z.string().email(),
  grade: z.string().min(1),
  notes: z.string().optional(),
});

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  subject: z.string().min(1),
  message: z.string().min(1),
});

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post("/api/pre-registrations", async (req, res) => {
    try {
      const data = preRegistrationSchema.parse(req.body);

      sendPreRegistrationConfirmation(data).catch((err) =>
        console.error("Pre-registration email error:", err)
      );

      res.json({ success: true });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, error: error.errors });
      } else {
        console.error("Pre-registration error:", error);
        res.status(500).json({ success: false, error: "İç sunucu hatası" });
      }
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const data = contactSchema.parse(req.body);

      sendContactConfirmation(data).catch((err) =>
        console.error("Contact email error:", err)
      );

      res.json({ success: true });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, error: error.errors });
      } else {
        console.error("Contact submission error:", error);
        res.status(500).json({ success: false, error: "İç sunucu hatası" });
      }
    }
  });

  app.post("/api/chat", async (req, res) => {
    try {
      const { message, sessionId } = req.body;
      if (!message || typeof message !== "string" || !sessionId || typeof sessionId !== "string") {
        res.status(400).json({ success: false, error: "Mesaj ve oturum kimliği gereklidir" });
        return;
      }
      const reply = await chatWithBot(sessionId, message.slice(0, 1000));
      res.json({ success: true, reply });
    } catch (error) {
      console.error("Chat API error:", error);
      res.status(500).json({ success: false, error: "Bir hata oluştu" });
    }
  });

  return httpServer;
}
