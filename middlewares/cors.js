const { error_notification } = require("api-http-response");

const allowedOrigins = ["http://localhost:3000", "http://localhost:4200"];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      error_notification(`Origin { ${origin} } is not allowed by CORS`);
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};

const credentials = (req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
      res.header('Access-Control-Allow-Credentials', true);
  }
  next();
}


module.exports = { corsOptions, allowedOrigins, credentials };
