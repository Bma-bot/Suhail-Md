const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348131504895";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_05_06_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTkzLFxuICAgICAgICA3OSxcbiAgICAgICAgODksXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjAxLFxuICAgICAgICA0LFxuICAgICAgICA4MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDQsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDMsXG4gICAgICAgIDE0MixcbiAgICAgICAgODUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExLFxuICAgICAgICA4NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDkxLFxuICAgICAgICA0MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODMsXG4gICAgICAgIDIxLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxLFxuICAgICAgICA0MixcbiAgICAgICAgMTEyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDY5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTMyLFxuICAgICAgICA0NixcbiAgICAgICAgNDksXG4gICAgICAgIDg3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAwLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI4LFxuICAgICAgICA4OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAzMixcbiAgICAgICAgOTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDAsXG4gICAgICAgIDIsXG4gICAgICAgIDk3LFxuICAgICAgICA4LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNixcbiAgICAgICAgMTkwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTIzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk5LFxuICAgICAgICA4LFxuICAgICAgICA0NyxcbiAgICAgICAgMjUxLFxuICAgICAgICA1LFxuICAgICAgICA0MixcbiAgICAgICAgMjUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTMwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjEyLFxuICAgICAgICAxODYsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTQsXG4gICAgICAgIDUwLFxuICAgICAgICAxODEsXG4gICAgICAgIDc3LFxuICAgICAgICAxMixcbiAgICAgICAgOTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0LFxuICAgICAgICA2OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMSxcbiAgICAgICAgMTc3LFxuICAgICAgICA0MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDQwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTksXG4gICAgICAgIDgzLFxuICAgICAgICA4MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM4LFxuICBcImFkdlNlY3JldEtleVwiOiBcInhBUms1MnhvMHVoeFlTc0xvRUlSSVlSWURtZHdlM2ZQejBHcm9yM3pBSGM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODEzMTUwNDg5NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTE5QzI2OTA5MEZFRDQ0MEI1NzJFNzI3RkUwNkQ3OTNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5NTY1NTUyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODEzMTUwNDg5NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTdEQjBGNDVGODNCNjE5QkMwMkEwOTEyQjE3OEJBOTdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5NTY1NTUyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjA0Q2dJcV9aU3NtWjFWbnVTekNfQ0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMGQyMGNjM2QtMzIyNS00MDRmLTk3ODEtMzEyYmRkM2QxODNjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY5LFxuICAgICAgOTgsXG4gICAgICA2MCxcbiAgICAgIDE0OSxcbiAgICAgIDI1LFxuICAgICAgMTc5LFxuICAgICAgMjA0LFxuICAgICAgMjA4LFxuICAgICAgMyxcbiAgICAgIDI3LFxuICAgICAgMTYxLFxuICAgICAgMTM2LFxuICAgICAgMTM0LFxuICAgICAgNDEsXG4gICAgICAyMzgsXG4gICAgICA2LFxuICAgICAgODQsXG4gICAgICAyOSxcbiAgICAgIDE3NixcbiAgICAgIDI0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzgsXG4gICAgICAyNDYsXG4gICAgICAxMDgsXG4gICAgICAxOTIsXG4gICAgICAyMDksXG4gICAgICAxNjEsXG4gICAgICA4OSxcbiAgICAgIDQzLFxuICAgICAgMzMsXG4gICAgICAxMDIsXG4gICAgICAyMzcsXG4gICAgICAyMDgsXG4gICAgICAzNixcbiAgICAgIDM2LFxuICAgICAgMTM3LFxuICAgICAgMjIzLFxuICAgICAgMTcyLFxuICAgICAgMjA2LFxuICAgICAgMTc0LFxuICAgICAgMjAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjJFWkZIQThGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTMxNTA0ODk1OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIyMTgwNTE4MDY3NDIwMToxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIldFIEFMTCBMT1ZFIEJNQfCfmYLigI3ihpRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLUHM0QVVRNmZuNXN3WVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImRvQUxLUWFqTmR6WFJYTWdHd0NUaUVBcjVUdVVPTS95NldHcUNnY3diU289XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUzRnU1BjSVVveWkzNWdVWU9FZ0tnalRZeTNsMW54cFFJMnlyWExnUDluZnlRcExZVmJTY1RxcDJuVFV6Sm1PZ0tabGIvK1RnWFZOSUJXemtQU3BuQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNFQ3Vm5GQkthcVoyNFdTRVppSkdkY0JRcTZ1QkkxZE1Gbk56UlFQaEZncXczQVRQdmVaNFhNQUZsZDdSV1F5dmx6b0E5cm0wMVZOUThjSlpyeXJvQUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEzMTUwNDg5NToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTU2NTU0OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1DUlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTUNSLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZW5Zb0FmTS9xdmM4UGhaT0lTcFZNU01ZdjZjVHg5NnVKTUVQcjU5SUxtMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjA3MjQ4MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE5NTY1NTUwNDk4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
