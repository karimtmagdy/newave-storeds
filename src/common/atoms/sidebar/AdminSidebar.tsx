import {
  CreditCard,
  Grid2x2,
  Grid2x2Plus,
  Home,
  Users,
  UserPlus,
  Wallet,
  TicketPlus,
  Tickets,
  PackageOpen,
  ShieldCheck,
  ShoppingCart,
  PackagePlus,
  ChartPie,
  Boxes,
  BadgePlus,
  CirclePlus,
  Badge,
  CircleDot,
  Mail,
  Headset,
  Truck,
} from "lucide-react";
import { createElement } from "react";
import { NavLink } from "react-router";

const dropMenuBar = [
  { name: "Dashboard", to: "dashboard", icon: Home },
  { name: "Overview", to: "overview", icon: ChartPie },
  { name: "Categories", to: "categories", icon: Grid2x2 },
  { name: "Add Category", to: "add-category", icon: Grid2x2Plus },
  { name: "Products", to: "products", icon: Boxes },
  { name: "Add Product", to: "add-product", icon: PackagePlus },
  { name: "Users", to: "users", icon: Users },
  { name: "Add User", to: "add-user", icon: UserPlus },
  { name: "Brands", to: "brands", icon: Badge },
  { name: "Add Brand", to: "add-brand", icon: BadgePlus },
  { name: "Sub Categories", to: "sub-categories", icon: CircleDot },
  { name: "Add Sub Category", to: "add-sub-category", icon: CirclePlus },
  { name: "Coupons", to: "coupons", icon: Tickets },
  { name: "Add Coupon", to: "add-coupon", icon: TicketPlus },
  { name: "Cart", to: "cart", icon: ShoppingCart },
  { name: "Checkout", to: "checkout", icon: Wallet },
  { name: "Payment", to: "payment", icon: CreditCard },
  { name: "Review", to: "review", icon: Mail },
  { name: "Customer", to: "customer", icon: Headset },
  { name: "Reports", to: "reports", icon: ShieldCheck },
  { name: "Shipping", to: "shipping", icon: Truck },
  { name: "Orders", to: "orders", icon: PackageOpen },
];
{
  /*  </>*/
}
const AdminSidebar = () => {
  return (
    <aside className="sidebar-admin w-52 border-r">
      <ul className="flex flex-col gap-y-2 p-2">
        {dropMenuBar.map(({ name, to, icon }, i) => {
          return (
            <li key={i}>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "active bg-slate-200 font-medium hover:bg-slate-200 hover:text-zinc-800" : "hover:bg-slate-100"} flex w-full items-center gap-x-2 rounded-lg px-2 py-1 text-base font-normal [&_svg]:shrink-0 [&&_svg]:h-5 [&&_svg]:w-5 [&&_svg]:text-current`
                }
                to={to}
              >
                {createElement(icon)}
                <h1>{name}</h1>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default AdminSidebar;
//  className="  hover:bg-slate-100"
//
