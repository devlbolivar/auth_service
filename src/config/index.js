require("dotenv").config();

module.exports = {
  port: process.env.PORT || 5000,
  dbURI: process.env.MONGODB_URI || "mongodb://localhost:27017/authdb",
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "2h",
  //   jwtCookieExpiresIn: process.env.JWT_COOKIE_EXPIRES_IN || 2 * 60 * 60 * 1000,
  //   jwtCookieName: process.env.JWT_COOKIE_NAME || "jwt",
  //   jwtCookieSecure: process.env.JWT_COOKIE_SECURE === "true",
  //   jwtCookieHttpOnly: process.env.JWT_COOKIE_HTTP_ONLY === "true",
  //   jwtCookieSameSite: process.env.JWT_COOKIE_SAME_SITE || "strict",
  //   jwtCookieDomain: process.env.JWT_COOKIE_DOMAIN || "",
  //   jwtCookiePath: process.env.JWT_COOKIE_PATH || "/",
  //   jwtCookieMaxAge: process.env.JWT_COOKIE_MAX_AGE || 2 * 60 * 60 * 1000,
  //   jwtRefreshTokenExpiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRES_IN || "7d",
  //   jwtRefreshTokenCookieExpiresIn:
  //     process.env.JWT_REFRESH_TOKEN_COOKIE_EXPIRES_IN || 7 * 24 * 60 * 60 * 1000,
  //   jwtRefreshTokenCookieName: process.env.JWT_REFRESH_TOKEN,
};
