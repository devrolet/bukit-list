// SHA256 encoding/hashing using crypto-js
const { SHA256 } = require('crypto-js');

// JWT encoding using jsonwebtoken
const jwt = require('jsonwebtoken');

// Set data (payload)
var data = {
        id: 18
    }
    // Go to jwt.io to check the data. HEADER, PAYLOAD, VERIFY
    // JWT has two main functions (sign and verify)
var token = jwt.sign(data, 'abc123');
console.log(token);

var decoded = jwt.verify(token, 'abc123');
console.log('decoded', decoded);

var message = 'I am the man around here';
var hash = SHA256(message).toString();

console.log(`Message: ${message}`);
console.log(`Hash: ${hash}`);

// var data = {
//     id: 4
// };

// // Hashing
// var token = {
//     data: data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();

// // Salt the hash
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if (resultHash === token.hash) {
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed, do not trust');
// }