const http = require("http");
const server = http.createServer((req, res) => {
  res.write("hello darling");
  res.end("welcome the my life");
});
server.listen(3101, () => {
  console.log("happy to see u again");
});
