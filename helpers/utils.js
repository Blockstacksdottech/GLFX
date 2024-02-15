import axios from "axios";
import { API_URL } from "./constants";

const instance = axios.create({
  baseURL: API_URL, // Your API base URL
  timeout: 5000, // Adjust timeout as needed
});

export async function refreshToken() {
  try {
    let refresh = sessionStorage.getItem("refreshToken");
    let headers = set_header();
    let options = {
      method: "post",
      body: JSON.stringify({
        refresh,
      }),
      headers: headers,
      mode: "cors",
    };

    let preResp = await fetch(API_URL + "api/token/refresh", options);
    if (preResp.ok) {
      let resp = await preResp.json();
      let access = resp.access;
      sessionStorage.setItem("accessToken", access);
      return true;
    } else {
      console.log("need to login");
      return false;
    }
  } catch (error) {
    console.error("Error refreshing token:", error);
    throw error;
  }
}

// Add a request interceptor
instance.interceptors.request.use(
  async function (config) {
    // Retrieve JWT token from session storage
    let token = sessionStorage.getItem("accessToken");

    // If token exists, set the Authorization header with JWT bearer token
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    // If response status is 401 (Unauthorized) and the original request didn't already try to refresh the token
    if (
      error.response &&
      error.response.status === 401 &&
      !error.config._isRetry
    ) {
      // Set flag to indicate that the request is being retried
      error.config._isRetry = true;

      try {
        await refreshToken();
        // Retry the original request
        return axios(error.config);
      } catch (refreshError) {
        return Promise.reject(refreshError); // Handle refresh error
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
