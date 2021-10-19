import { VercelRequest, VercelResponse } from "@vercel/node";
import fetch from "node-fetch";

const exec = async (request: VercelRequest, response: VercelResponse) => {
  if (request.method !== "POST") {
    return response.status(405).json({ error: "Method Not Allowed" });
  }

  const { method, path, auth, body } = request.body || {};

  try {
    const fetchRes = await fetch(`${process.env.API_HOST}${path}`, {
      method,
      headers: { Authorization: `Bearer ${auth}` },
      body: JSON.stringify(body),
    });
    const fetchBody = await fetchRes.json();

    response.status(200).json({ status: fetchRes.status, body: fetchBody });
  } catch {
    response.status(400).json({ error: "Request Failed" });
  }
};

export default exec;
