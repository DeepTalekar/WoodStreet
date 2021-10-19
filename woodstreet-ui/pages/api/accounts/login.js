/*
  author @Deep
  contributor 
*/

import { API_URL } from '../../../config/apiRoute';
import cookie from 'cookie';

export default async (req, res) => {
  if (req.method === 'POST' || req.method === 'post') {
    const { username, password } = req.body;

    const body = JSON.stringify({
      username,
      password,
    });

    try {
      const apiRes = await fetch(`${API_URL}/api/token/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      });

      const data = await apiRes.json();

      if (apiRes.status === 200) {
        res.setHeader('Set-Cookie', [
          cookie.serialize('access', data.access, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            maxAge: 60 * 30, // 30 minutes
            sameSite: 'strict',
            path: '/api/',
          }),

          cookie.serialize('refresh', data.refresh, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            maxAge: 60 * 60 * 24, // 1 day
            sameSite: 'strict',
            path: '/api/',
          }),
        ]);

        return res.status(apiRes.status).json({
          success: 'Authentication Successful!',
        });
      } else {
        return res.status(apiRes.status).json({
          error: 'Authentication Failed!',
        });
      }
    } catch (err) {
      return res.status(500).json({
        error: 'Something went wrong while Authentication',
      });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} not Allowed!` });
  }
};
