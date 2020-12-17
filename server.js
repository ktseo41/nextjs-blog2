const axios = require('axios') 
const cheerio = require('cheerio') 
const dotenv = require('dotenv') 
const express = require('express') 
const next = require('next')
dotenv.config();

const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })
const handle = app.getRequestHandler()

const PORT = process.env.PORT || "3000";

app.prepare().then(() => {
  const server = express()
  server.get("/inthemoodforlove", function (req, res) {
    (() => {
      res.send(
        `<h2>화양연화 예매시작 알리미</h2><div><strong>${new Date('2020-12-17 07:11:00').toLocaleString(
          "ko-KR",
          { timeZone: "Asia/Seoul" }
        )} 이후</strong></div><br>예매가 가능합니다.<br><br><a href="${process.env.IN_THE_MOOD_FOR_LOVE_YES24}">${process.env.IN_THE_MOOD_FOR_LOVE_YES24}</a>`
      );
    })();
  });

  server.get('*', function(req, res){
    return handle(req, res)
  })
  server.listen(PORT, () => console.log("server started!"));
})

