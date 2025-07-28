import { Link, Outlet } from "react-router";
import {
    LayoutDashboard,
    FileDown,
    PackageSearch,
    History,
    UserCircle,
    Menu,
} from "lucide-react";
const UserDashboard = () => {
    return (
        <div className="drawer lg:drawer-open min-h-screen">
            {/* Hidden checkbox to toggle drawer on mobile */}
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            {/* Main content */}
            <div className="drawer-content flex flex-col">
                <div className="w-full navbar bg-base-300">
                    <div className="flex-none lg:hidden">
                        {/* Toggle button (only visible on small screens) */}
                        <label
                            htmlFor="dashboard-drawer"
                            className="btn btn-square btn-ghost"
                        >
                            <Menu className="w-6 h-6" />
                        </label>
                    </div>
                    <div className="flex-1 px-4 text-xl font-bold">My Dashboard</div>
                </div>

                {/* Page content */}
                <main className="flex-grow p-6 bg-base-100">
                    <Outlet />
                </main>

                {/* Footer */}
                <footer className="bg-base-300 text-center py-4">
                    <p>© 2025 Adda Caffe. All rights reserved.</p>
                </footer>
            </div>

            {/* Sidebar */}
            <div className="drawer-side">
                <label
                    htmlFor="dashboard-drawer"
                    className="drawer-overlay lg:hidden"
                ></label>
                <aside className="menu p-4 max-w-64 bg-base-200 text-base-content min-h-screen">
                    <h2 className="text-xl font-bold mb-4">My Menu</h2>
                    <ul className="menu p-0 space-y-1">
                        <li>
                            <Link to="/admin-dashboard" className="flex items-center gap-2">
                                <LayoutDashboard size={18} /> Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/admin-dashboard/Teacher-Request"
                                className="flex items-center gap-2"
                            >
                                <FileDown size={18} /> Download invoice
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin-dashboard/Users" className="flex items-center gap-2">
                                <PackageSearch size={18} />
                                Track My Orders
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin-dashboard/AllClasses" className="flex items-center gap-2">
                                <History size={18} />
                                Order History
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin-dashboard/Profile" className="flex items-center gap-2">
                                <UserCircle size={18} />
                                Profile
                            </Link>
                        </li>
                    </ul>
                </aside>
            </div>
        </div>
    );
};

export default UserDashboard;