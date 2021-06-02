const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Hello from Node Js!</title></head>");
    res.write("<body><h1>Greetings, enjoy this Node course!</h1></body>");
    res.write(
      '<form action="/create-user" method="POST"><input type="text" name="username"/><button type="submit">Submit</button></form>'
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Users List</title></head>");
    res.write(
      "<body><ul><li>Raphael</li><li>Donatello</li><li>Leonardo</li></ul></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      res.statusCode = 302;
      res.setHeader("Location", "/users");
      return res.end();
    });
  }
});

server.listen(3000);
