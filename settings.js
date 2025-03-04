// Bot settings

// You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep

const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVBNbmdkR0lCbnlPMjZVKzZEd2oxSGEyYS9mN0RodWRYZEU3RHFiSzNYND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib2Q4QXVhdDd3U0N6alZ1cHdpajhyV0lhMmdWKzlSN0ZsVzdQRVVyMGVBMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZQk5aRFJPZEtoc3dJWTREYkxlVGhaSjlCMkg3amp5L0VUOWhpRHBqQjJvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoL05kSzRZbUU2cmhDblFOK2JDbWdVcU1TZXVtWkpQcEN2WWRGVVFLR2d3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZBMlErcEhOSkpXZ2JUQ2p0UUpaM3Rheko4YW1uSnN2SmZrN05aZ2FYMlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlduWEdsLzNEZXFZOHhFMDNuRkJ6aWNuYXo5SE4xMndJUVJBRnU3Vlk4R2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaURsRzZ6ajh2bEw4M21TKzQwY0twVlY0cGFJTzdtS2FDMVY0RHZJT2UyOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1ZTYThRWk9JS2Q5aUZOc3ZNN1FLR29UTnRmZi9OaGtLeU9MU1kvU0JFVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5zSlBacEZnaDdvK0lSNzRDT3FaMENHOW90YVF2Ni9hK2Vya3krSGtVMklBZ3dXZC8zU2gxaWxaWGhSelp5Nm9RbUJQMmYxYWlJTzNBdGlVTitIakN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkzLCJhZHZTZWNyZXRLZXkiOiIrREtYRDE1RGVtZWRlZEVpTVBuRU0vR1Y5WlB2RXRMQ2hoL1V2YlkzZjNRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjQ5MTU1NjIzNzgzNDNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMjZBMkM2MjY2NzRDQzlBMTMwQjNENTJCNDBDMUI5NzAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0MTA4NTYxMH0seyJrZXkiOnsicmVtb3RlSmlkIjoiNDkxNTU2MjM3ODM0M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyNkQ4ODczOUY2RTMzREIwODQ1Qjc0ODEwRTk5MjY4NyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQxMDg1NjEwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI0OTE1NTYyMzc4MzQzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjU1NzZGMjAxQThEQTBBM0UxRjQ5OUU2OUU2MjRBRTFGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDEwODU2MTR9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkxvZVhjbDh2UVdXVnF4NVd3Ym9EaFEiLCJwaG9uZUlkIjoiMGZhYjNkODEtZWMxNy00MzUyLTgxNGYtYzY4YTM5ZTc0Yzg0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlIyR1VOQkhKaGpHYy9SMUZzeHd0WkV0WGVzcz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDZkpibW9yOTM5STVmOXRtbm04UXB6Zi9hbDA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiM1JMV1c0Qk4iLCJtZSI6eyJpZCI6IjQ5MTU1NjIzNzgzNDM6NjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiR2FtZWJvdC1CTEFDS1NLWS1NRCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTVBQeVMwUW5MZWJ2Z1lZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNzJWMTFsSVp2YWxKdkYyNjJiTVh3MzRuS2dSTjlLbzNDT2d3KzRINGVScz0iLCJhY2NvdW50U2lnbmF0dXJlIjoienUrZTZXZzh6VU5uQ0lkRWhJNDV1bXdWSTlvdmxXOVo1dkFMWUovM2hSMDVaQWFtdXBvN25zd1VFdEhZWTNtMHIzKzRxS1lHYWJJelBRTnNQMndIQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6IkxOK0hBbGJwR09OYnJST2lwM1A2L0xZTTI4UXRTOGU1QjJ5YUNkb2s1Q0RXYUVMNmNRcmRNQkZ1akREV2Q1TU9zaTJYdFh1WGNsTlRXWW1VR3cyVkJRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNDkxNTU2MjM3ODM0Mzo2NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlOWxkZFpTR2IycFNieGR1dG16RjhOK0p5b0VUZlNxTndqb01QdUIrSGtiIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQxMDg1NjA5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU5kQiJ9';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "49";
const author = process.env.OWNER_NAME || 'Keith';
const packname = process.env.PACKNAME || 'keith';
const dev = process.env.OWNER_NUMBER || '4915563151347';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'BLACKSKY-MD;
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';
const herokuapikey = process.env.HEROKU_API_KEY || '';
const herokuAppname = process.env.HEROKU_APP_NAME || '';
const url = process.env.URL || 'https://files.catbox.moe/mikdi0.jpg';
const gurl = process.env.GURL || 'https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47';
const reactemoji = process.env.EMOJI || '💚';
const antitag = process.env.ANTITAG || 'true';
const groupControl = process.env.GROUP_CONTROL || 'true';
const anticall = process.env.ANTICALL || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const timezone = process.env.TIMEZONE || 'Africa/Nairobi';
const autoread = process.env.AUTOREAD || 'true';
const anticallmsg = process.env.ANTICALL_MSG || 'Keith declined your 🤙 call';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  reactemoji,
  autobio,
  antilink: groupControl,  // Use groupControl for antilink
  antibad: groupControl,   // Use groupControl for antibad
  mode,
  prefix,
  anticall,
  autolike,
  anticallmsg,
  mycode,
  author,
  herokuAppname,
  herokuapikey,
  url,
  gurl,
  packname,
  dev,
  DevKeith,
  gcpresence,
  antionce,
  session,
  antitag,
  antidelete
};
