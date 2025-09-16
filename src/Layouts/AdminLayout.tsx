import { Link, Outlet, useLocation } from "react-router";
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

  Store,
  Shield,
  Activity,
  DollarSign,
  HelpCircle,
  MessageCircle,
  Database,
  Server,
} from "lucide-react";
import { useEffect, useState } from "react";
import Loader from "../Components/UI/Loader";
import DashboardUserComponent from "../Components/userIcon/DashboardUserComponent";
const AdminLayout: React.FunctionComponent = () => {
  const [routeLoading, setRouteLoading] = useState<boolean>(true);
  const location = useLocation();

  useEffect(() => {
    setRouteLoading(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    const timeout = setTimeout(() => {
      setRouteLoading(false);
    }, 100);
    return () => clearTimeout(timeout);
  }, [location]);

 
  return (
    <div className="drawer lg:drawer-open min-h-screen">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar   border-b-2 border-base-200 ">
          <div className="flex-none lg:hidden">
            <label htmlFor="dashboard-drawer" className="btn btn-square btn-ghost">
              <Menu className="w-6 h-6" />
            </label>
          </div>
          <div className="flex-1 px-4 text-xl font-bold">Admin Dashboard</div>
        </div>

        <main className="flex-grow p-6">
          {routeLoading ? (
            <Loader></Loader>
          ) : (
            <Outlet></Outlet>

          )}
        </main>

        <footer className="text-center py-4 sticky bottom-0 z-30 ">
          <p>© 2025 Adda Caffe. All rights reserved.</p>
        </footer>
      </div>

      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay lg:hidden"></label>
        <aside className="menu p-4 max-w-72 bg-base-200 text-base-content min-h-screen space-y-2">
          <DashboardUserComponent />

          {/* Dashboard */}
          <li>
            <Link to="/admin-dashboard" className="flex items-center gap-2 bg-[#382827] text-[#E3B577]">
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
                <li><Link to="/admin-dashboard/products/managements"><PackageSearch size={16} /> All Products</Link></li>
                <li><Link to="/admin-dashboard/products/add"><PackagePlus size={16} /> Add Product</Link></li>
                <li><Link to="/admin-dashboard/categories"><ClipboardList size={16} /> Categories</Link></li>
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
                <li><Link to="/admin-dashboard/all/orders">All Orders</Link></li>
                <li><Link to="/admin-dashboard/all/pending/orders">Pending Orders</Link></li>
                <li><Link to="/admin-dashboard/all/invoice">Invoices</Link></li>
                <li><Link to="/admin-dashboard/assign/orders">Assign Order</Link></li>
                <li><Link to="/admin-dashboard/all/refund/orders">Refund Order</Link></li>
                <li><Link to="/admin-dashboard/all/returned">Returned Order</Link></li>
                <li><Link to="/admin-dashboard/all/reviews">Reviews</Link></li>
                <li><Link to="/admin-dashboard/Track/order">Track Order</Link></li>
                <li><Link to="/admin-dashboard/order/history">Order History</Link></li>
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
                <li><Link to="/admin-dashboard/all/users">All Users</Link></li>
                <li><Link to="/admin-dashboard/user/make/admin">Make Admin</Link></li>
                <li><Link to="/admin-dashboard/banned/user">Banned Users</Link></li>
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
                <li><Link to="/admin-dashboard/rider/riders">All Riders</Link></li>
                <li><Link to="/admin-dashboard/rider/pending/rider">Pending Rider</Link></li>
                <li><Link to="/admin-dashboard/rider/rejected/rider">Rejected Rider</Link></li>
                <li><Link to="/admin-dashboard/rider/add/rider">Add Rider</Link></li>
                <li><Link to="/admin-dashboard/rider/manual/assign">Manual Assign</Link></li>
              </ul>
            </div>
          </div>

          {/* Analytics & Reports */}
          <div className="collapse collapse-arrow bg-base-100">
            <input type="checkbox" />
            <div className="collapse-title font-medium flex items-center gap-2">
              <BarChart size={18} /> Analytics / Reports
            </div>
            <div className="collapse-content">
              <ul className="space-y-1">
                <li><Link to="/admin-dashboard/reports/overview">Overview</Link></li>
                <li><Link to="/admin-dashboard/reports/sales/reports">Sales Report</Link></li>
                <li><Link to="/admin-dashboard/revenue">Revenue</Link></li>
                <li><Link to="/admin-dashboard/top/products">Top Products</Link></li>
                <li><Link to="/admin-dashboard/order/reports">Order Report</Link></li>
                <li><Link to="/admin-dashboard/customer/insights">Customer Insights</Link></li>
                <li><Link to="/admin-dashboard/finance/summary">Finance Summary</Link></li>
                <li><Link to="/admin-dashboard/reports/export">Export Reports</Link></li>
              </ul>
            </div>
          </div>

          {/* Coupons & Rewards */}
          <div className="collapse collapse-arrow bg-base-100">
            <input type="checkbox" />
            <div className="collapse-title font-medium flex items-center gap-2">
              <TicketPercent size={18} /> Coupons
            </div>
            <div className="collapse-content">
              <ul className="space-y-1">
                <li><Link to="/admin-dashboard/all/coupons">All Coupons</Link></li>
                <li><Link to="/admin-dashboard/reward">Reward Points</Link></li>
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
                <li><Link to="/admin-dashboard/content/homepage"><Home size={16} /> Homepage</Link></li>
                <li><Link to="/admin-dashboard/content/about"><Info size={16} /> About Page</Link></li>
                <li><Link to="/admin-dashboard/content/contact"><User size={16} /> Contact Page</Link></li>
              </ul>
            </div>
          </div>

          {/* ✅ NEW: Finance & Transactions */}
          <div className="collapse collapse-arrow bg-base-100">
            <input type="checkbox" />
            <div className="collapse-title font-medium flex items-center gap-2">
              <DollarSign size={18} /> Finance
            </div>
            <div className="collapse-content">
              <ul className="space-y-1">
                <li><Link to="/admin-dashboard/finance/overview">Overview</Link></li>
                <li><Link to="/admin-dashboard/finance/transactions">Transactions</Link></li>
                <li><Link to="/admin-dashboard/finance/refunds">Refunds</Link></li>
                <li><Link to="/admin-dashboard/finance/payouts">Payouts</Link></li>
              </ul>
            </div>
          </div>

          {/* ✅ NEW: Security & Logs */}
          <div className="collapse collapse-arrow bg-base-100">
            <input type="checkbox" />
            <div className="collapse-title font-medium flex items-center gap-2">
              <Shield size={18} /> Security
            </div>
            <div className="collapse-content">
              <ul className="space-y-1">
                <li><Link to="/admin-dashboard/security/roles">Roles & Permissions</Link></li>
                <li><Link to="/admin-dashboard/security/logs"><Activity size={16} /> Audit Logs</Link></li>
                <li><Link to="/admin-dashboard/security/activity">Activity Feed</Link></li>
              </ul>
            </div>
          </div>

          {/* ✅ NEW: Support & Tickets */}
          <div className="collapse collapse-arrow bg-base-100">
            <input type="checkbox" />
            <div className="collapse-title font-medium flex items-center gap-2">
              <HelpCircle size={18} /> Support
            </div>
            <div className="collapse-content">
              <ul className="space-y-1">
                <li><Link to="/admin-dashboard/support/tickets">Tickets</Link></li>
                <li><Link to="/admin-dashboard/support/chat"><MessageCircle size={16} /> Live Chat</Link></li>
                <li><Link to="/admin-dashboard/support/reviews">Manage Reviews</Link></li>
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
                <li><Link to="/admin-dashboard/settings/company">Company Info</Link></li>
                <li><Link to="/admin-dashboard/settings/payment">Payment Settings</Link></li>
                {/* ✅ NEW: Advanced Settings */}
                <li><Link to="/admin-dashboard/settings/backup"><Database size={16} /> Backup & Restore</Link></li>
                <li><Link to="/admin-dashboard/settings/maintenance"><Server size={16} /> Maintenance Mode</Link></li>
                <li><Link to="/admin-dashboard/settings/monitor">System Monitor</Link></li>
              </ul>
            </div>
          </div>

        </aside>
      </div>
    </div>
  );
};

export default AdminLayout;
