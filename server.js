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

const startTime = new Date();
const results = [];
let playtimes = 1;

setInterval(async () => {
  try {
    const config = {
      url: `${process.env.BYPASS_CORS_HEROKU}${process.env.IN_THE_MOOD_FOR_LOVE_DAUM}`,
      headers: {
        origin: null,
      },
    };
    const { data } = await axios(config);
    const $ = cheerio.load(data);
    const reserveButton = $(".wrap_pbtn");
    const reserveMessage = reserveButton.text().trim();
    const reserveObj = {
      [new Date().toLocaleString("ko-KR", {
        timeZone: "Asia/Seoul",
      })]: reserveMessage,
    };

    if (results.length === 10) {
      results.shift();
      results.push(reserveObj);
    } else {
      results.push(reserveObj);
    }

    if (reserveMessage) {
      const sendMessageConfig = {
        method: "POST",
        url: `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,
        params: {
          chat_id: process.env.MY_CHAT_ID,
        },
      };
      axios({
        ...sendMessageConfig,
        ...{
          params: {
            ...sendMessageConfig.params,
            text: `화양연화 예매가 가능합니다. ! 다음 영화 주소 : ${process.env.IN_THE_MOOD_FOR_LOVE_DAUM}`,
          },
        },
      });
    }
  } catch (error) {
    console.warn(error);
  }

  playtimes += 1;
  console.log(playtimes);
}, 12 * 60 * 1000);

app.prepare().then(() => {
  const server = express()
  server.get("/inthemoodforlove", function (req, res) {
    (() => {
      res.send(
        `<h2>화양연화 예매시작 알리미</h2><div><strong>${startTime.toLocaleString(
          "ko-KR",
          { timeZone: "Asia/Seoul" }
        )} 이후</strong></div><br>${playtimes}회 실행되었습니다.<br><br><div>${results.reduce(
          (accu, curr) => {
            const [[time, reserve]] = Object.entries(curr);
            return accu + `<div>${time} : "${reserve}"</div>`;
          },
          ""
        )}</div>`
      );
    })();
  });

  server.get('*', function(req, res){
    return handle(req, res)
  })
  server.listen(PORT, () => console.log("server started!"));
})

