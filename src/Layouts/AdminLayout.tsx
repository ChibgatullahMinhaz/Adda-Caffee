import { Link, Outlet } from "react-router";
import {
  LayoutDashboard,
  PackageSearch,
  PackagePlus,
  Package,
  ClipboardList,
  Users,
  Truck,
  User,
  BarChart,
  TicketPercent,
  Settings,
  Menu,
  Home,
  Info,
  Globe,
  Store,
} from "lucide-react";

const AdminLayout: React.FunctionComponent = () => {
  return (
    <div className="drawer lg:drawer-open min-h-screen">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar border-b-2 border-base-100 ">
          <div className="flex-none lg:hidden">
            <label htmlFor="dashboard-drawer" className="btn btn-square btn-ghost">
              <Menu className="w-6 h-6" />
            </label>
          </div>
          <div className="flex-1 px-4 text-xl font-bold">Admin Dashboard</div>
        </div>

        <main className="flex-grow p-6">
          <Outlet />
        </main>

        <footer className="text-center py-4">
          <p>© 2025 Adda Caffe. All rights reserved.</p>
        </footer>
      </div>

      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay lg:hidden"></label>
        <aside className="menu p-4 max-w-72 bg-base-200 text-base-content min-h-screen space-y-2">
          <h2 className="text-xl font-bold mb-4">Admin Menu</h2>

          {/* Dashboard */}
          <li>
            <Link to="/admin" className="flex items-center gap-2">
              <LayoutDashboard size={18} /> Dashboard
            </Link>
          </li>

          {/* Product Management */}
          <div className="collapse collapse-arrow bg-base-100">
            <input type="checkbox" />
            <div className="collapse-title font-medium flex items-center gap-2">
              <Package size={18} /> Products
            </div>
            <div className="collapse-content">
              <ul className="space-y-1">
                <li><Link to="/admin/products"><PackageSearch size={16} /> All Products</Link></li>
                <li><Link to="/admin/products/add"><PackagePlus size={16} /> Add Product</Link></li>
                <li><Link to="/admin/categories"><ClipboardList size={16} /> Categories</Link></li>
              </ul>
            </div>
          </div>

          {/* Order Management */}
          <div className="collapse collapse-arrow bg-base-100">
            <input type="checkbox" />
            <div className="collapse-title font-medium flex items-center gap-2">
              <ClipboardList size={18} /> Orders
            </div>
            <div className="collapse-content">
              <ul className="space-y-1">
                <li><Link to="/admin/orders">All Orders</Link></li>
                <li><Link to="/admin/orders/pending">Pending Orders</Link></li>
                <li><Link to="/admin/orders/invoice">Invoices</Link></li>
              </ul>
            </div>
          </div>

          {/* User Management */}
          <div className="collapse collapse-arrow bg-base-100">
            <input type="checkbox" />
            <div className="collapse-title font-medium flex items-center gap-2">
              <Users size={18} /> Users
            </div>
            <div className="collapse-content">
              <ul className="space-y-1">
                <li><Link to="/admin/users">All Users</Link></li>
                <li><Link to="/admin/users/banned">Banned Users</Link></li>
              </ul>
            </div>
          </div>

          {/* Rider Management */}
          <div className="collapse collapse-arrow bg-base-100">
            <input type="checkbox" />
            <div className="collapse-title font-medium flex items-center gap-2">
              <Truck size={18} /> Riders
            </div>
            <div className="collapse-content">
              <ul className="space-y-1">
                <li><Link to="/admin/riders">All Riders</Link></li>
                <li><Link to="/admin/riders/add">Add Rider</Link></li>
              </ul>
            </div>
          </div>

          {/* Sales & Analytics */}
          <li>
            <Link to="/admin/analytics" className="flex items-center gap-2">
              <BarChart size={18} /> Analytics
            </Link>
          </li>

          {/* Coupons & Rewards */}
          <div className="collapse collapse-arrow bg-base-100">
            <input type="checkbox" />
            <div className="collapse-title font-medium flex items-center gap-2">
              <TicketPercent size={18} /> Coupons
            </div>
            <div className="collapse-content">
              <ul className="space-y-1">
                <li><Link to="/admin/coupons">All Coupons</Link></li>
                <li><Link to="/admin/rewards">Reward Points</Link></li>
              </ul>
            </div>
          </div>

          {/* CMS */}
          <div className="collapse collapse-arrow bg-base-100">
            <input type="checkbox" />
            <div className="collapse-title font-medium flex items-center gap-2">
              <Store size={18} /> CMS / Content
            </div>
            <div className="collapse-content">
              <ul className="space-y-1">
                <li><Link to="/admin/content/homepage"><Home size={16} /> Homepage</Link></li>
                <li><Link to="/admin/content/about"><Info size={16} /> About Page</Link></li>
                <li><Link to="/admin/content/contact"><User size={16} /> Contact Page</Link></li>
              </ul>
            </div>
          </div>

          {/* Settings */}
          <div className="collapse collapse-arrow bg-base-100">
            <input type="checkbox" />
            <div className="collapse-title font-medium flex items-center gap-2">
              <Settings size={18} /> Settings
            </div>
            <div className="collapse-content">
              <ul className="space-y-1">
                <li><Link to="/admin/settings/company">Company Info</Link></li>
                <li><Link to="/admin/settings/payment">Payment Settings</Link></li>
                <li><Link to="/admin/settings/language"><Globe size={16} /> Language</Link></li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default AdminLayout;
