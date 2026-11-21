// Exercise 5 – API client: fetchJSON

export const BASE_URL = "https://jsonplaceholder.typicode.com";

export class HttpError extends Error {
  // TODO: constructor(status, url), name, status
}

export async function fetchJSON(path, opts = {}) {
  const { timeout = 5000, ...options } = opts;
  // TODO: fetch BASE_URL + path with
  //   signal: AbortSignal.timeout(timeout)
  // TODO: if !res.ok throw new HttpError(...)
  // TODO: return the parsed JSON
}

// TODO: getUsers(), getUser(id), getPostsByUser(id)

// TODO: createPost(post): POST /posts with a JSON body
