import wretch from "wretch";

const CLIENT_API_URL = "https://jsonplaceholder.typicode.com";

export const api = wretch(CLIENT_API_URL);
