module.exports = (err, req, res, next) => {
  let httpStatus = 500;
  let code = 5;
  let msg = err.message || "Oops! Something went wrong. Try again later.";
  return res.status(httpStatus).json({ code, msg });
};
