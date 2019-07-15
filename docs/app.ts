import next from "next";
import express from "express";

import { join } from "path";
import { parse } from "url";

export const app = next({ dir: "./src", dev: true }); // TODO isLocalhost로 변경

const handle = app.getRequestHandler();

export const createServer = () => {
  const server = express();

  server.get("/static/*", (req, res) => {
    const parsedUrl = parse(req.url, true);
    return handle(req, res, parsedUrl);
  });

  server.get("*", (req, res) => {
    const parsedUrl = parse(req.url, true);
    const rootStaticFiles = [
      "/robots.txt",
    ];
    if (rootStaticFiles.indexOf(parsedUrl.pathname) > -1) {
      const path = join(__dirname, "../docs/static", parsedUrl.pathname);
      app.serveStatic(req, res, path);
    } else {
      return handle(req, res, parsedUrl);
    }
  });

  return server;
};
