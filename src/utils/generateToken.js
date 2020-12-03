const jwt = require('jsonwebtoken');

function generateToken(params = {}) {
  return jwt.sign(params, process.env.SECRET, {
    expiresIn: '1d'
  });
}

module.exports = generateToken;