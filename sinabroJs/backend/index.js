// const http = require("http");
// const hostname = "localhost";

// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   console.log(req.url, req.method); //이걸로 분기처리를 해서 각각 경로에 맞는 적절한 응답을 보낸다
//   res.setHeader("Content-Type", "text/plain");
//   res.end("hello world!");
// });

// server.listen(port, hostname, () => {
//   console.log("server listening on port " + port);
// });
import express from "express";

const app = express();

const port = 3000;

app.use((req, res, next) => {
  console.log("미들웨어");
  next();
}); //모든 요청에 먼저 실행하고 다음으로 넘김

app.use(express.static("public"));
//서버에서 미리 파일을 서빙해주고 만약 클라이언트가 요청하면 이미지나 텍스트를 준다

app.get("/", (req, res) => {
  console.log("first");
  res.send("hi");
}); //요청오면 첫핸들러가 실행하고 성공하면 그다음 핸들러 또 그다음

app.get("/hi", (req, res) => {
  console.log("sec");
  res.send("hi");
});

app.listen(port, () => {
  console.log("server listening on port ");
});

//
