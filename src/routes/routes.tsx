import { createBrowserRouter as create } from "react-router";
import MainLayout from "@/layout/MainLayout";
import HomePage from "@/pages/home/HomePage";
import ErrorPage404 from "@/pages/errors/ErrorPage404";
import ErrorPage401 from "@/pages/errors/ErrorPage401";
import ErrorPage403 from "@/pages/errors/ErrorPage403";
// import ErrorPage500 from "@/pages/errors/ErrorPage500";
import AdminLayout from "@/layout/AdminLayout";
import UserLayout from "@/layout/UserLayout";
import AuthLayout from "@/layout/AuthLayout";
import ChangePasswordPage from "@/pages/auth/ChangePasswordPage";
import LoginPage from "@/pages/auth/LoginPage";
import RegisterPage from "@/pages/auth/RegisterPage";
import ResetPasswordPage from "@/pages/auth/ResetPasswordPage";
import ForgotPasswordPage from "@/pages/auth/ForgotPasswordPage";
import OtpVerificationPage from "@/pages/auth/OtpVerificationPage";
import ProtectedRoute from "@/components/private/ProtectedRoute";
import PrivateRoute from "@/components/private/PrivateRoute";
import CreateCategory from "@/pages/admin/category/[id]/CreateCategory";
import GetCategoriesPage from "@/pages/admin/category/GetCategoriesPage";
import GetProductsPage from "@/pages/admin/product/GetProductsPage";
import CreateProduct from "@/pages/admin/product/[id]/CreateProduct";
import GetBrandsPage from "@/pages/admin/brand/GetBrandsPage";
import CreateUser from "@/pages/admin/user/[id]/CreateUser";
import GetUsersPage from "@/pages/admin/user/GetUsersPage";
import CreateBrand from "@/pages/admin/brand/[id]/CreateBrand";
import CreateSubCategory from "@/pages/admin/subcategory/[id]/CreateSubCategory";
import GetSubCategoriesPage from "@/pages/admin/subcategory/GetSubCategoriesPage";

export const router = create([
  {
    path: "",
    element: <MainLayout />,
    children: [
      { path: "/unauthorized", element: <ErrorPage401 /> },
      { path: "/forbidden", element: <ErrorPage403 /> },
      { path: "*", element: <ErrorPage404 /> },
      // { path: "/server-error", element: <ErrorPage500 /> },
      {
        path: "/auth",
        element: (
          <ProtectedRoute>
            <AuthLayout />
          </ProtectedRoute>
        ),
        children: [
          { path: "sign-up", element: <RegisterPage /> },
          { path: "sign-in", element: <LoginPage /> },
          { path: "forgot-password", element: <ForgotPasswordPage /> },
          { path: "reset-password", element: <ResetPasswordPage /> },
          { path: "change-password", element: <ChangePasswordPage /> },
          { path: "otp-verification", element: <OtpVerificationPage /> },
        ],
      },
      {
        path: "/admin",
        element: (
          <PrivateRoute>
            <AdminLayout />
          </PrivateRoute>
        ),
        children: [
          { path: "categories", element: <GetCategoriesPage /> },
          { path: "add-category", element: <CreateCategory /> },
          { path: "sub-categories", element: <GetSubCategoriesPage /> },
          { path: "add-sub-category", element: <CreateSubCategory /> },
          { path: "users", element: <GetUsersPage /> },
          { path: "add-user", element: <CreateUser /> },
          { path: "products", element: <GetProductsPage /> },
          { path: "add-product", element: <CreateProduct /> },
          { path: "brands", element: <GetBrandsPage /> },
          { path: "add-brand", element: <CreateBrand /> },
        ],
      },
      {
        path: "/",
        element: <UserLayout />,
        children: [{ index: true, element: <HomePage /> }],
      },
      // { path: "", element: <MainLayout />, children: [] },
      // { path: "", element: <MainLayout />, children: [] },
      // { path: "", element: <MainLayout />, children: [] },
      // { path: "", element: <MainLayout />, children: [] },
    ],
  },
]);
