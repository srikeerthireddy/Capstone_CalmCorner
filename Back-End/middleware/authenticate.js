const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const token = req.cookies.token; // Ensure you are accessing cookies correctly
  if (!token) return res.status(401).json({ message: 'Access Denied: No Token Provided' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; // Ensure req.user is set with the verified token payload
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid Token' });
    console.log(err);
  }
};

module.exports = authenticate;
