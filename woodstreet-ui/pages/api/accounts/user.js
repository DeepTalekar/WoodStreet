/*
  @author Deep
  @contributor 
*/

import cookie from 'cookie';
import { API_URL } from './../../../config/apiRoute';

export default async (req, res) => {
  if (req.method === 'GET' || req.method === 'get') {
    // console.log('Request Headers: ', req.headers.cookie);
    // * We either have cookies or else we will have none i.e. '' & hence we get an empty object
    // * in the constant cookies in case of no Cookies.
    const cookies = cookie.parse(req.headers.cookie ?? '');

    const access = cookies.access ?? false;

    if (access === false) {
      return res.status(401).json({
        error: 'User unauthorized to make this request',
      });
    }

    try {
      const apiRes = await fetch(`${API_URL}/api/accounts/user/`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${access}`,
        },
      });

      const data = await apiRes.json();

      if (apiRes.status === 200)
        return res
          .status(200)
          .json({ success: 'Successfully fetched User!', user: data.user });
      else
        return res.status(apiRes.status).json({
          error: data.error,
        });
    } catch (err) {
      return res.status(500).json({
        error: 'Something went wrong while Fetching the User',
      });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
};
