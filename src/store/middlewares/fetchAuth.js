const requestLogin = async (data) => {
  const response = await fetch(`https://api.escuelajs.co/api/v1/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
const requestProfile = async (accessToken) => {
  const response = await fetch(`https://api.escuelajs.co/api/v1/auth/profile`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.json();
};
export const fetchAuth = (email, password) => {
  return async (dispatch) => {
    const token = await requestLogin({ email, password });
    if (token) {
      localStorage.setItem("user_token", JSON.stringify(token));
      const profile = await requestProfile(token.access_token);
      if (profile) {
        dispatch({ type: "auth/setUser", payload: profile });
        dispatch({ type: "auth/setLoading" });
      }
    }
  };
};
