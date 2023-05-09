const crypto = require('crypto');
const algorithm = 'aes-256-cbc'; 
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

// protected data
const message = "This is a secret message";


const cipher = crypto.createCipheriv(algorithm, key, iv);

let encryptedData = cipher.update(message, "utf-8", "hex");

encryptedData += cipher.final("hex");

console.log("Encrypted message: " + encryptedData);
const decipher = crypto.createDecipheriv(algorithm, key, iv);

let decryptedData = decipher.update(encryptedData, "hex", "utf-8");

decryptedData += decipher.final("utf8");

console.log("Decrypted message: " + decryptedData);