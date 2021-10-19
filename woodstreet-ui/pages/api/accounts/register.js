import { API_URL } from '../../../config/apiRoute';

export default async (req, res) => {
  if (req.method === 'POST' || req.method === 'post') {
    const { first_name, last_name, username, email, password } = req.body;
    try {
      const body = JSON.stringify({
        first_name,
        last_name,
        username,
        email,
        password,
      });

      const apiRes = await fetch(`${API_URL}/api/accounts/register`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: body,
      });

      const data = await apiRes.json();

      if (apiRes.status === 201) {
        return res.status(201).json({ success: data.success });
      } else {
        return res.status(apiRes.status).json({ error: data.error });
      }
    } catch (error) {
      return res
        .status(500)
        .json({ error: 'Something went Wrong while Registering account!' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
};
