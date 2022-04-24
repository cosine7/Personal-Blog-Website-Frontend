import { importSPKI, jwtVerify } from 'jose';

const ecPublicKey = await importSPKI(process.env.PUBLIC_KEY, 'ES256');

async function checkLoginStatus(req, res, handler) {
  try {
    const { accessToken } = req.cookies;
    if (!accessToken) {
      throw new Error();
    }
    await jwtVerify(accessToken, ecPublicKey);
    handler();
  } catch {
    res.sendStatus(401);
  }
}

export async function getLoginStatus(req, res) {
  checkLoginStatus(req, res, () => res.sendStatus(200));
}

export default async (req, res, next) => {
  if (req.method === 'GET') {
    next();
  } else {
    checkLoginStatus(req, res, () => { next(); });
  }
};
