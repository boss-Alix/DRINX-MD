
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",  // ADD YOUR SESSION ID 
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/ufr0mz.jpeg",
ALIVE_MSG: process.env.ALIVE_MSG || "HEY DEAR, I'm thrilled to announce that DRINX-MD is ALIVE now—ready to dive into new adventures with you!",
SUDO_NB: process.env.SUDO_NB || "50935959059",
AUTO_REACT: process.env.AUTO_REACT || "true", // Enable/disable auto reaction (true/false)
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE:"false",
OMDB_API_KEY: "5e339fb7",
OWNER_NAME: process.env.OWNER_NAME || "DRINX",
AUTO_TYPING: process.env.AUTO_TYPING || "false",
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true"
};

