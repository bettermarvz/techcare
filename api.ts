const username = process.env.NEXT_PUBLIC_BASIC_AUTH_USERNAME;
const password = process.env.NEXT_PUBLIC_BASIC_AUTH_PASSWORD;

export const authHeader =
  "Basic " + Buffer.from(`${username}:${password}`).toString("base64");
