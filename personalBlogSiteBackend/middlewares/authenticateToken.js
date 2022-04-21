import jwt from 'jsonwebtoken';

export default async (req, res, next) => {
  if (!req.cookies.accessToken) {
    res;
  }
};
