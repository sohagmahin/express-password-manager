import Axios, { resInterceptor } from "../../services/NetworkService";

// ---->write your api call<----

// testing...
export const postSingIn = (username, password) => {
  console.log("postLogin api call");
  console.log(username + password);
  Axios.interceptors.response.eject(resInterceptor);
  return Axios.post("/user/login", {
    username: username,
    password: password,
  });
};

export const postSingUp = (name, username, password) => {
  console.log("postLogin api call");
  console.log(username + password);
  Axios.interceptors.response.eject(resInterceptor);
  return Axios.post("/user/signup", {
    name: name,
    username: username,
    password: password,
  });
};

export const postCredential = (
  title,
  description,
  domain,
  username,
  password
) => {
  console.log("postCredential api calling...");
  console.log(title + description + domain + username + password);
  return Axios.post("/vault", {
    title,
    description,
    domain,
    username,
    password,
  });
};

export const getCredentials = () => {
  console.log("getAllCredential api calling...");
  return Axios.get("/vault/all");
};

export const putCredential = (
  id,
  title,
  description,
  domain,
  username,
  password
) => {
  console.log("postCredential api calling...");
  console.log(id + title + description + domain + username + password);
  return Axios.put(`/vault/${id}`, {
    title,
    description,
    domain,
    username,
    password,
  });
};

export const deleteCredentials = (id) => {
  console.log("getAllCredential api calling...");
  return Axios.delete(`/vault/${id}`);
};
// http://localhost:3001/passmanager/

export const getProfile = (id) => {
  return Axios.get(`/user/${id}`);
};

export const putProfile = (id, data) => {
  return Axios.put(`/user/${id}`, {
    ...data,
  });
};
