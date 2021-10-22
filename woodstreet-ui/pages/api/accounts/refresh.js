/*
  @author Deep
  @contributor 
*/

import cookie from 'cookie';
import { API_URL } from './../../../config/apiRoute';

export default async (req, res) => {
  if (req.method === 'GET' || req.method === 'get') {
    const cookies = cookie.parse(req.headers.cookie ?? '');

    const refresh = cookies.refresh ?? false;

    if (refresh === false) {
      return res.status(403).json({
        error: 'User unauthorized to make this request!',
      });
    }

    const body = JSON.stringify({ refresh });

    try {
      const apiRes = await fetch(`${API_URL}/api/token/refresh/`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body,
      });

      const data = await apiRes.json();

      if (apiRes.status === 200) {
        res.setHeader('Set-Cookie', [
          cookie.serialize('access', data.access, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            maxAge: 60 * 30,
            sameSite: 'strict',
            path: '/api/',
          }),
          cookie.serialize('refresh', data.refresh, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            maxAge: 60 * 60 * 24,
            sameSite: 'strict',
            path: '/api/',
          }),
        ]);

        return res.status(200).json({
          success: 'Refresh Request Successful',
        });
      } else {
        return res.status(200).json({
          error: 'Failed to Fulfill Refresh Request',
        });
      }
    } catch (err) {
      return res.status(500).json({
        error: 'Something went wrong when trying to Fulfill Refresh Request',
      });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
};
