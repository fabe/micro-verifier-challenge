const { send } = require('micro');
const crypto = require('crypto');

function base64URLEncode(str) {
  return str
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
}

function sha256(buffer) {
  return crypto
    .createHash('sha256')
    .update(buffer)
    .digest();
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  let statusCode, data;

  try {
    const verifier = base64URLEncode(crypto.randomBytes(32));
    const challenge = base64URLEncode(sha256(verifier));

    data = { verifier, challenge };
    statusCode = 200;
  } catch (err) {
    console.log(err);
    statusCode = 500;
    data = {
      message: `Creating a verifier and challenge failed.`,
    };
  }

  send(res, statusCode, data);
};
