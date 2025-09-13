import axiosInstance from "./axiosInstance";

export const login = async (usernameOrEmail: string, password: string) => {
  const res = await axiosInstance.post("/login", { usernameOrEmail, password });
  return res.data; // { accessToken: string }
};

export const getMe = async (token: string) => {
  const res = await axiosInstance.get("/me", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const logout = () => {
  localStorage.removeItem("accessToken");
};
