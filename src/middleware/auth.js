const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const { authorization } = req.cookies;

  if (!authorization) {
    return res.status(401).json('No authorized');
  }

  jwt.verify(authorization, process.env.SECRET, (err, decoded) => {
    if (err)
      return res.status(401).json({ error: 'Invalid token' });

    req.userId = decoded.id;
    return next();
  });
}