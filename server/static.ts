import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { injectSeoMeta } from "./seo-meta";

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  const indexPath = path.resolve(distPath, "index.html");

  // fall through to index.html if the file doesn't exist
  // SEO: bilinen rotalar için route bazlı title/description/canonical enjekte et
  app.use("/{*path}", (req, res, next) => {
    fs.readFile(indexPath, "utf-8", (err, template) => {
      if (err) return next(err);
      const page = injectSeoMeta(template, req.originalUrl);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    });
  });
}
