NodeJs+Nginx Project

Here’s a simple Node.js project structure you can run and deploy without Docker or monitoring — just Node.js + Nginx as reverse proxy.

📂 Project Structure
hello-api/
├── package.json
├── server.js
├── nginx.conf


🔧 Files
1. package.json
{
  "name": "hello-api",
  "version": "1.0.0",
  "main": "server.js",
  "dependencies": {
    "express": "^4.18.2"
  },
  "scripts": {
    "start": "node server.js"
  }
}

2. server.js
const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("Hello from Node.js!");
});
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
Run locally:
$ apt install npm       #  nohup npm start &   --> to run in detached mode
$ npm install
$ npm start
Visit http://localhost:3000.
$ apt install nginx for next step of nginx
3. nginx.conf
server {
    listen 80;
    server_name hello.local;
location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
Place this config in /etc/nginx/sites-available/hello.conf and symlink it to sites-enabled.
Then restart Nginx: $ sudo systemctl restart nginx

🚀 Workflow
	1. Start Node.js app with $ npm start.
	2. Configure Nginx to proxy requests from http://hello.local to your Node.js app.
	3. Access the app via browser at http://hello.local.

✅ This is the simplest hands‑on project:
	• Run Node.js locally.
	• Deploy behind Nginx.

