//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348057627946";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2348144936869";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkZISGFXNzFHWkt3clFSQ2lIaG5GUUdiMEZ3dGRTMTE5OG1PcHQxYzkxND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUNqT0kwUHlvVUxaV2pNbzUybGtxZmxXUFA2ZE1tMUlHRFFaMkdnMFozQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFR09hR3BIM1pQOE1YUEJFYUdMci9majhMTnYzV2tKUXRpNnVNSk5hV1hBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3bTIwUi9yZE9jbkJDRVM0RmVKNHlPOVp2UWVUZktMRnEwY1JyMmo3dHhZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVLZnBDZ3RFYjZwZURIM1JZK3YyVWhxV29XOG9EN1ZnUGJBcEhianlyVms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllHT0ZOZTBNTE5WQkZkRWFVaHlrbWZMc2lmSkZ6aG80azBoL0ppVWZYMkU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUJYeTJhT0tFeXRaZjk2TEM4aCtpWmxhYmFvemcySE1LdmVlREtYVHZYMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib3NiMGIvK3djNXUvb2RTKzkwelc4WThGcGZObnRkSkJFbk5NUXY0T0hrWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InAxbngwY0toMHQ2Ui9RYlpVZGN4bnRoTWlyMWRDWVBVYTlYamJYaUxtazdmZ0tMaDZFZmkxamp3c01PSVRYNTE5M2s1QkxVdFBZRy8xd3E4ZGw0b2p3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDIsImFkdlNlY3JldEtleSI6IldhdzMzalYxMC9LeW50OW5KUUNCMldqaUQ3bEwxSnlKNUtkQlI2U1hGdzQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODE0NDkzNjg2OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyRjBCMTg2MzI5RUU2QzAxREU3OTA5N0NDMjM2QzA2QyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM2ODgyODY0fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJNaXRpNlphaFR5eUlUeU04c1NqQ0t3IiwicGhvbmVJZCI6IjUxN2MxYjNkLTk3NjktNDZkNy04NWM2LWRmYzIyODM2NTZiMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzSmhDSlZzdi94RExHMDVacnNNMTQxeTdyZWM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU3ltdUF0WHZrcVFLL20yZUt3YXhkbko0WjN3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkY3WFYzWjhXIiwibWUiOnsiaWQiOiIyMzQ4MTQ0OTM2ODY5OjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTWljaGFlbCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTys0cmRZREVKNzFtcndHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiajBsS0tYS1VoWUxlY3ZJNDR3bkNIdWdOVFBKV2lXU2RreTU0TitqUE95QT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiR0lOMXhaZW1IYmpXdGR5SlkyZXZOSUNmZ0lJemlzN0xrSkxmVkZmeUNISElhRkFPT3gzS2NzR1BOQkFLa29BbDBUTWY5VUFBK0RCUWVTYm15dzdCRFE9PSIsImRldmljZVNpZ25hdHVyZSI6Ikh0K2pCQXRWZlVGbDB3MzErdHZMV1Njak1QSWtUVmhSRUFrVEl0a3hVZU5kUVc1N3d0WUplU1pLc1JNYUxJdnRxaGpXeWtac1dVbVNNV1VHWGUxQWdBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODE0NDkzNjg2OToyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlk5SlNpbHlsSVdDM25MeU9PTUp3aDdvRFV6eVZvbGtuWk11ZURmb3p6c2cifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzY4ODI4NTksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQ1ViIn0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`KING_DAVID™`",
  author: process.env.PACK_AUTHER || "KING_DAVID",
  packname: process.env.PACK_NAME || "KING_DAVID",
  botname: process.env.BOT_NAME || "KING_DAVID",
  ownername: process.env.OWNER_NAME || "KING_DAVID",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
