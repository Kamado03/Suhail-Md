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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254769279076,254 789 951753,+27 67 428 6981";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_31_06_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjI4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDg4LFxuICAgICAgICA4MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMSxcbiAgICAgICAgODIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDQxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMixcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU1LFxuICAgICAgICAzNixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMixcbiAgICAgICAgODEsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTA3LFxuICAgICAgICA2MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTUxLFxuICAgICAgICA1NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDEsXG4gICAgICAgIDU2LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTksXG4gICAgICAgIDQ0LFxuICAgICAgICA5OSxcbiAgICAgICAgNTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1MixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDg3LFxuICAgICAgICA0NSxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODUsXG4gICAgICAgIDE5LFxuICAgICAgICA0NixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjI5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyOCxcbiAgICAgICAgODUsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDExNyxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI2LFxuICAgICAgICAyOSxcbiAgICAgICAgNDksXG4gICAgICAgIDUyLFxuICAgICAgICA1MixcbiAgICAgICAgMTQyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjMzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTc3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDQ5LFxuICAgICAgICA5MixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTU1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTk4LFxuICAgICAgICA2NyxcbiAgICAgICAgNDksXG4gICAgICAgIDU1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjksXG4gICAgICAgIDExNixcbiAgICAgICAgNTksXG4gICAgICAgIDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2LFxuICAgICAgICA4NixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDkxLFxuICAgICAgICA3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDM5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODksXG4gICAgICAgIDQ2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTAzLFxuICAgICAgICA2NixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDgsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTg0LFxuICAgICAgICA5NCxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTM3LFxuICBcImFkdlNlY3JldEtleVwiOiBcInVac3VuYWhsVUtkaWcxN2lzT0pmb1FwU0FHenQycFFGU1BUNVRJa0xKOTg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMixcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMixcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk1TNERIVWhIUnZtdFY1VWZPRTk0LWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjVjZTcyNGQtYzI1Ni00YmRkLWI1NzItNzRkNGFkNGM1Y2I2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MSxcbiAgICAgIDIxNCxcbiAgICAgIDY0LFxuICAgICAgMTU1LFxuICAgICAgNjEsXG4gICAgICAxMzAsXG4gICAgICAxOTgsXG4gICAgICAyMzUsXG4gICAgICAyMDAsXG4gICAgICAyMTAsXG4gICAgICAxODUsXG4gICAgICA2LFxuICAgICAgMTY4LFxuICAgICAgMTgwLFxuICAgICAgMjAyLFxuICAgICAgNDMsXG4gICAgICAxNTAsXG4gICAgICAxNjIsXG4gICAgICAxMixcbiAgICAgIDE3OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0LFxuICAgICAgMTIwLFxuICAgICAgMTIyLFxuICAgICAgNzcsXG4gICAgICAyMjksXG4gICAgICA0MSxcbiAgICAgIDEwNSxcbiAgICAgIDE0LFxuICAgICAgNzEsXG4gICAgICAyNDcsXG4gICAgICA1LFxuICAgICAgMTMyLFxuICAgICAgMzQsXG4gICAgICA1MCxcbiAgICAgIDcyLFxuICAgICAgMTY2LFxuICAgICAgMjA5LFxuICAgICAgMTE5LFxuICAgICAgODUsXG4gICAgICAyMzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQTRZWksyV0JcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc2OTI3OTA3NjoxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjczMzE1MDA4NjM0OTA3OjEyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lTcnY4RURFSm5FNHJNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiL1ZZb0pRajZSSUxaSk5IOFlpUDhSSzVyRTVyWkcwRTNiMmRCRWNVUmtDYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJXZHJoR0ZpYWNhK1N1MEJEZHpxcWpHaktwN2k0Q09SUDJiQkJSRGVlcElUUHdPN3RiV3VqREhwdWlrd2pnOE9pcVhWNzNoMUdaZkRXOGlaVnd1UkRDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJLVVhaVzJYTzBRNjhhWGh1NVRYcUVncFcrb1dSN2JROTU5REFkb2FmUzJnL0RCWXRNSUJBSHl6dDBIVE14eGxVOWFXSmEyYWNEZTRnMGcrU3VXTzhCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NjkyNzkwNzY6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDM5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTkxODE4NTNcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Daves bot 😎",
  ownername:process.env.OWNER_NAME|| "Dave",


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
