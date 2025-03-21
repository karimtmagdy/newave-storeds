import AdminSidebar from "@/common/atoms/sidebar/AdminSidebar";
import { Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <div className="min-h-dvh">
      <header className="">
        <div className="container">
          <h1>Admin Layout</h1>
        </div>
      </header>
      <div className="flex min-h-full gap-x-1 p-1">
        <AdminSidebar />
        <div className="grow border p-4 pt-2">
          <Outlet />s
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
