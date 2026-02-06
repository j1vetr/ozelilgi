import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertPreRegistrationSchema, insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";
import { sendPreRegistrationConfirmation, sendContactConfirmation } from "./email";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Pre-Registration Form Submission
  app.post("/api/pre-registrations", async (req, res) => {
    try {
      const data = insertPreRegistrationSchema.parse(req.body);
      const result = await storage.createPreRegistration(data);

      sendPreRegistrationConfirmation(data).catch((err) =>
        console.error("Pre-registration email error:", err)
      );

      res.json({ success: true, data: result });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, error: error.errors });
      } else {
        console.error("Pre-registration error:", error);
        res.status(500).json({ success: false, error: "İç sunucu hatası" });
      }
    }
  });

  // Get all pre-registrations (admin endpoint - should be protected in production)
  app.get("/api/pre-registrations", async (req, res) => {
    try {
      const results = await storage.getPreRegistrations();
      res.json({ success: true, data: results });
    } catch (error) {
      console.error("Get pre-registrations error:", error);
      res.status(500).json({ success: false, error: "İç sunucu hatası" });
    }
  });

  // Contact Form Submission
  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactSubmissionSchema.parse(req.body);
      const result = await storage.createContactSubmission(data);

      sendContactConfirmation(data).catch((err) =>
        console.error("Contact email error:", err)
      );

      res.json({ success: true, data: result });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, error: error.errors });
      } else {
        console.error("Contact submission error:", error);
        res.status(500).json({ success: false, error: "İç sunucu hatası" });
      }
    }
  });

  // Get all contact submissions (admin endpoint - should be protected in production)
  app.get("/api/contact", async (req, res) => {
    try {
      const results = await storage.getContactSubmissions();
      res.json({ success: true, data: results });
    } catch (error) {
      console.error("Get contact submissions error:", error);
      res.status(500).json({ success: false, error: "İç sunucu hatası" });
    }
  });

  return httpServer;
}
