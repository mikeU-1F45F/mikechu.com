#!/usr/bin/env -S deno run --allow-net --allow-read --allow-write

import * as file_server from "https://deno.land/std/http/file_server.ts";

const port = 3000;
const hostname = "localhost";

console.log(`🚀 Development server starting on http://${hostname}:${port}`);
console.log(`📁 Serving files from: ${Deno.cwd()}/src`);

const handler = (req: Request): Response | Promise<Response> => {
  const url = new URL(req.url);

  // If requesting root, serve index.html
  if (url.pathname === "/") {
    url.pathname = "/index.html";
  }

  return file_server.serveDir(req, {
    fsRoot: "./src",
    urlRoot: "",
    showDirListing: true,
    enableCors: true,
  });
};

Deno.serve({
  port,
  hostname,
  handler,
});
