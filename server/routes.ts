import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Preview route for the fortune cookie app
  app.get("/preview", (req: Request, res: Response) => {
    const previewPath = path.resolve("preview.html");
    if (fs.existsSync(previewPath)) {
      res.sendFile(previewPath);
    } else {
      res.status(404).send("Preview file not found");
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
