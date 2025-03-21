export type Role = "user" | "admin";
export type Gender = "male" | "female";
type Status = "active" | "inactive";
export type IUserType = {
  _id: string;
  nikename?: string;
  username: string;
  email: string;
  password: string;
  confirm_password: string;
  slug?: string;
  phone?: number;
  active?: boolean;
  verified?: boolean;
  permissions?: [string];
  remember_me?: boolean;
  last_login?: string;
  cart?: string;
  order?: string;
  wishlist?: string;
  likes?: string;
  favorite?: string;
  photo: { url: string };
  role: Role;
  gender: Gender;
  status?: Status;
  resetPasswordToken?: string;
  resetPasswordExpireAt?: string;
  forgotPassword?: string;
  forgotPasswordExpiry?: string;
  verificationToken?: string;
  verificationTokenExpireAt?: string;
  verifyOtp?: string;
  verifyOtpExpireAt?: number;
  resetOtp?: string;
  resetOtpExpireAt?: number;
  joinedAt?: string;
  updatedAt?: string;
  [key: string]: any;
};

export type AuthContextType = {
  // token?: string | null;
  register: (
    username: string,
    email: string,
    password: string,
    confirm_password: string,
  ) => void;
  user: IUserType | null;
  login: (email: string, password: string) => void;
  isAuthenticated: boolean;
  logout: () => void;
  // logout: () => Promise<void>;
} | null;
