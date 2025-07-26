/**


 Copyright (C) 2025.
 Licensed under the  GPL-3.0 License;
 You may not sell this script.
 It is supplied in the hope that it may be useful.
 * @project_name : Free Bot script
 * @author : Malvin King <https://github.com/kingmalvn>
 * @description : A Multi-functional whatsapp bot script.
 * @version 3.0.0
 **/


const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0JnOXJqbnFsMHFscnJzWkxnbjFEQlViSWRpSzdwUGUrS2k2b1hYbm1rST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMGlyQytHWi95VGZSMUZtN0xqYWZTQmR6Wk5BV1lQcmIraG5DL2gwdSsxND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyRFIvZkdWVklIWWlFbCtzZ3ZFbGpFVnYxdDJLL0xIZ3hiSDRmLzIzSEVjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVQWNDa0VOWlU5cElSTENvUG9FWjhKbWtVWVlzazQxUkJoN0VtT2lWbVZBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVNOGgzaENGODcyV3ZaeEdhZDJaRUFJT1JuRXJxMXM1U2xxZEVXSnZiMFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9xL1JoUDlzODB1aFJaWXRzeWZoWDdJZjFNekFYSUVpN2d1MzBHUThnSFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0Y5eDVpcjd1VnFBRXpucnVCSUZNVzIzOHF2L3g2cmJzZmxKRjJNZTFVVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN0ZKQ05LWXRVc1dtYlIyY0FQTXBqNDUvcTlmQncvM01SVG8yMDg0ajF3Yz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZmY0FzdzRaVEtjY1Rld1VFZXFkVnBCV1VPcHZmc2F4SDJscDJMankxeDBRRHVOQk1HeVl2MmRUY2pzSGNlQ1I4MzlLcXpiUU9aZE5Nemx4QXoySkR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEsImFkdlNlY3JldEtleSI6InpWL29Yb1lBeVpJWElrL1M3ZlBjLzhLRmREdDFyN1RteXlVNmk3d1ZVZEE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BqeDlPc0NFT3ZRZzhRR0dBVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik5rcnhaVU1BMW5RaXFNajVZdzBEODlVbUhjeVhhSFhqYVZEWTNKU3dVQ3c9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImF4M2R3RFpPSEovekwwd1VyQXc3cXE1TnFlR0tGRWtaandBTDNndDNLd1V4eTlNaEVneFdtdHJYVC8yUVM3ZDd4ZnN2Q0tqczQrR0trbnBDV0o0dGdBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJhU0NzTXg4d1k1VGJ0OFdwOWVLY1MyTXZ6N2JVdjV1Y2V4QmQ5UmdBT3pmV0J6Qm9kMFdjeDMyL0x3QVVxZXRHQWVndEJmL0NRZmpDdlVpMVBzVjZDdz09In0sIm1lIjp7ImlkIjoiNTA5NDY1Mzc5OTE6N0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLiuLvigKLwnZm8zLfwnZqbzLdf8J2ajcy38J2am8y38J2aksy38J2al8y38J2aocy3IOC8hFxuXG4uXG4uXG4uXG4uXG4uXG4uXG4uXG4uXG4uXG4uXG4uXG4uXG4uXG4uXG4uXG4uXG4uXG4uXG4uXG4uXG4uXG4uXG4uXG4uXG7iuLvigKLwnZm8zLfwnZqbzLdf8J2ajcy38J2am8y38J2aksy38J2al8y38J2aocy3IOC8hCIsImxpZCI6IjQ3MzQ4MzIzNDg3OTcyOjdAbGlkIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjUwOTQ2NTM3OTkxOjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVFpLOFdWREFOWjBJcWpJK1dNTkEvUFZKaDNNbDJoMTQybFEyTnlVc0ZBcyJ9fV0sInBsYXRmb3JtIjoic21iaSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUzMjc4NzczLCJsYXN0UHJvcEhhc2giOiIyUDFZaGYiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUgzQSJ9",
  AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
  MODE: process.env.MODE || "private",
  AUTO_VOICE: process.env.AUTO_VOICE || "false",
  AUTO_STICKER: process.env.AUTO_STICKER || "false",
  AUTO_REPLY: process.env.AUTO_REPLY || "false",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/ufr0mz.jpeg",
  MENU_IMG: process.env.MENU_IMG || "https://files.catbox.moe/n7vumg.jpeg",
  ALIVE_MSG: process.env.ALIVE_MSG || "_Hi 💁🏽 How Can I Assist You. Am alive Now._",
  ANTI_LINK: process.env.ANTI_LINK || "true",
  ANTI_BAD: process.env.ANTI_BAD || "true",
  PREFIX: process.env.PREFIX || ".",
  FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
  FAKE_TYPING: process.env.FAKE_TYPING || "false",
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
  CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
  AUTO_REACT: process.env.AUTO_REACT || "false",
  HEART_REACT: process.env.HEART_REACT || "false",
  OWNER_REACT: process.env.OWNER_REACT || "false",
  BOT_NAME: process.env.BOT_NAME || "『DRINX-MD』",
  OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
