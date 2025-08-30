import { NavLink, Outlet, useLocation } from "react-router";
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
import { useEffect, useState } from "react";
import Loader from "../Components/UI/Loader";

const RiderLayout = () => {
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
                <div className="w-full navbar">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="dashboard-drawer" className="btn btn-square btn-ghost">
                            <Menu className="w-6 h-6" />
                        </label>
                    </div>
                    <div className="flex-1 px-4 text-xl font-bold">Rider Dashboard</div>
                </div>

                <main className="flex-grow p-6 bg-base-100">
                     {routeLoading ? (
                            <Loader></Loader>
                        ) : (
                            <Outlet></Outlet>

                        )}
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
                            <NavLink to="/rider-dashboard" className={({ isActive }) =>
                                isActive ? "flex items-center gap-2 bg-amber-50" : "flex items-center gap-2"
                            }
                            >
                                <LayoutDashboard size={18} /> Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/rider-dashboard/driver/assign/rides" className={({ isActive }) => isActive ? "flex items-center gap-2 bg-amber-50" : "flex items-center gap-2"}>
                                <MapPin size={18} /> Assigned Deliveries
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/rider-dashboard/driver/delivery/history" className={({ isActive }) => isActive ? "flex items-center gap-2 bg-amber-50" : "flex items-center gap-2"}
                            >
                                <History size={18} /> Delivery History
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/rider-dashboard/driver/availability" className={({ isActive }) => isActive ? "flex items-center gap-2 bg-amber-50" : "flex items-center gap-2"} >
                                <Clock size={18} /> Availability
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/rider-dashboard/rider/own/waller/earnings" className={({ isActive }) => isActive ? "flex items-center gap-2 bg-amber-50" : "flex items-center gap-2"}>
                                <Wallet size={18} /> Wallet
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/rider-dashboard/supports" className={({ isActive }) => isActive ? "flex items-center gap-2 bg-amber-50" : "flex items-center gap-2"}>
                                <LifeBuoy size={18} /> Support
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/rider-dashboard/rider/profile" className={({ isActive }) => isActive ? "flex items-center gap-2 bg-amber-50" : "flex items-center gap-2"}>
                                <UserCircle size={18} /> Profile
                            </NavLink>
                        </li>
                    </ul>
                </aside>
            </div>
        </div >
    );
};

export default RiderLayout;
