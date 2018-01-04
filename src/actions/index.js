import axios from "axios";

export const FETCH_POST = "FETCH_POST";
export const CREATE_POST = "CREATE_POST";
export const FETCH_ID = "FETCH_ID";
export const DELETE_POST = "DELETE_POST";

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=1111333224444";

export function fecthPost() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function createPost(values, callback) {
  const request = axios
    .post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());
  return {
    type: CREATE_POST,
    payload: request
  };
}

export function fetchPostID(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
  return {
    type: FETCH_ID,
    payload: request
  };
}

export function deletePost(id, callback) {
  const request = axios
    .delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());
  return {
    type: DELETE_POST,
    payload: id
  };
}
