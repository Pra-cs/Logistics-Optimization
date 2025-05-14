module.exports = (req, res, next) => {
  req.user = { role: 'admin' };
  next();
};
