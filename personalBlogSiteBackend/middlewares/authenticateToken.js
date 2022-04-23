import jwt from 'jsonwebtoken';

export default async (req, res, next) => {
  if (req.method === 'GET') {
    next();
    return;
  }
  const { accessToken } = req.cookies;
  if (!accessToken) {
    res.sendStatus(401);
    return;
  }
  jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, err => {
    if (err) {
      res.sendStatus(401);
    } else {
      next();
    }
  });
};
