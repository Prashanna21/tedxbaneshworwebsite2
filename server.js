"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const http = require("http"); // Use require to import
const url = require("url");   // Use require to import
const next = require("next"); // Use require to import

const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    http.createServer((req, res) => {
        const parsedUrl = url.parse(req.url, true);
        handle(req, res, parsedUrl);
    }).listen(port, (err) => {
        if (err) throw err;
        console.log(`> Server listening at http://localhost:${port} as ${dev ? 'development' : process.env.NODE_ENV}`);
    });
}).catch((error) => {
    console.error('Error preparing the Next.js application:', error);
});
