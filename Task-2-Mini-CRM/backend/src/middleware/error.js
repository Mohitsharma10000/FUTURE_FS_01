export function notFound(req, res, next) {
  res.status(404).json({ error: `Not found: ${req.method} ${req.originalUrl}` });
}

export function errorHandler(err, req, res, next) {
  // eslint-disable-line no-unused-vars
  console.error(err);
  const status = err.status || err.statusCode || 500;
  res.status(status).json({
    error: err.message || "Internal server error",
    ...(process.env.NODE_ENV === "development" ? { stack: err.stack } : {}),
  });
}
