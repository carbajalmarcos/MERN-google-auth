import axios from "axios";

const isAuthenticated = () => {
  return fetch(`${process.env.REACT_APP_BACKEND_URL_BASE}/isAuth`, {
    headers: {
      "Content-Type": "application/json",
      pragma: "no-cache",
      "cache-control": "no-cache",
    },
    credentials: "include",
  });
};

export { isAuthenticated };
