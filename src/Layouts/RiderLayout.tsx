import { Link, Outlet } from "react-router";
import {
    LayoutDashboard,
    MapPin,
    History,
    Clock,
    UserCircle,
    Wallet,
    LifeBuoy,
    Menu,
} from "lucide-react";

const RiderLayout = () => {
    return (
        <div className="drawer lg:drawer-open min-h-screen">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="w-full navbar">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="dashboard-drawer" className="btn btn-square btn-ghost">
                            <Menu className="w-6 h-6" />
                        </label>
                    </div>
                    <div className="flex-1 px-4 text-xl font-bold">Rider Dashboard</div>
                </div>

                <main className="flex-grow p-6 bg-base-100">
                    <Outlet />
                </main>

                <footer className="bg-base-300 text-center py-4">
                    <p>© 2025 Adda Caffe. All rights reserved.</p>
                </footer>
            </div>

            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay lg:hidden"></label>
                <aside className="menu p-4 max-w-64 text-base-content min-h-screen">
                    <h2 className="text-xl font-bold mb-4">Rider Menu</h2>
                    <ul className="menu p-0 space-y-1">
                        <li>
                            <Link to="/rider-dashboard" className="flex items-center gap-2">
                                <LayoutDashboard size={18} /> Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to="/rider-dashboard/assigned" className="flex items-center gap-2">
                                <MapPin size={18} /> Assigned Deliveries
                            </Link>
                        </li>
                        <li>
                            <Link to="/rider-dashboard/history" className="flex items-center gap-2">
                                <History size={18} /> Delivery History
                            </Link>
                        </li>
                        <li>
                            <Link to="/rider-dashboard/availability" className="flex items-center gap-2">
                                <Clock size={18} /> Availability
                            </Link>
                        </li>
                        <li>
                            <Link to="/rider-dashboard/wallet" className="flex items-center gap-2">
                                <Wallet size={18} /> Wallet
                            </Link>
                        </li>
                        <li>
                            <Link to="/rider-dashboard/support" className="flex items-center gap-2">
                                <LifeBuoy size={18} /> Support
                            </Link>
                        </li>
                        <li>
                            <Link to="/rider-dashboard/profile" className="flex items-center gap-2">
                                <UserCircle size={18} /> Profile
                            </Link>
                        </li>
                    </ul>
                </aside>
            </div>
        </div>
    );
};

export default RiderLayout;
