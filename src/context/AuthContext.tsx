import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
// import { jwtDecode, JwtPayload } from "jwt-decode";
import { SIGNINAPI, SIGNUPAPI } from "@/services/api/api";
import api from "@/services/config/axiosConfig";
import { AuthContextType, IUserType } from "@/types/IUserStateType";
import Cookies from "js-cookie";

const AuthContext = createContext<AuthContextType | undefined>({
  isAuthenticated: false,
} as AuthContextType | undefined);
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUserType | null>(null);
  const [token, setToken] = useState<string | null>(null);
  // Check if user is already logged in on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token") || Cookies.get("token");

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
  }, []);
  // useEffect(() => {});
  const register = async (
    username: string,
    email: string,
    password: string,
    confirm_password: string,
  ) => {
    try {
      const response = await api.post(SIGNUPAPI, {
        username,
        email,
        password,
        confirm_password,
      });
      setUser(response.data.user);
    } catch (error) {
      console.log(error);
    }
  };
  const login = async (email: string, password: string) => {
    try {
      const response = await api.post(SIGNINAPI, { email, password });
      // const { token, user } = response.data;
      // jwtDecode<JwtPayload>(response.data.token);
      // Save token and user data
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      setUser(response.data.user);
      console.log("res", response);
      console.log("data", response.data);
      console.log("user", response.data.user);
      console.log("token", response.data.token);
    } catch (error) {
      console.log(error);
    }
  };
  const logout = async () => {
    // try {
    //   await api.post(SIGNOUTAPI, {});
    Cookies.remove("token");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
    // } catch (error) {
    //   console.log(error);
    // }
  };
  const value = { register, login, user, isAuthenticated: !!token, logout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext) as AuthContextType;
  if (!context) throw new Error("useAuth must be used within a AuthProvider");
  return context;
};
