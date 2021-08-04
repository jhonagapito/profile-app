import { useState } from "react";

function useToken() {
  const storageKey: string = "_profile_app_token";

  const getToken = () => {
    const tokenString = localStorage.getItem(storageKey);
    const userToken = JSON.parse(tokenString || "{}");
    return userToken;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken: any) => {
    localStorage.setItem(storageKey, JSON.stringify(userToken));
    setToken(userToken);
  };

  return {
    setToken: saveToken,
    token
  };
}

export default useToken;
