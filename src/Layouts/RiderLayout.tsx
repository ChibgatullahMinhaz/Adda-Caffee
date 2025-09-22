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
import DashboardUserComponent from "../Components/userIcon/DashboardUserComponent";
import BacktoHome from "../Components/UI/BacktoHome";

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

                <main className="flex-grow p-6">
                    {routeLoading ? (
                        <Loader></Loader>
                    ) : (
                        <Outlet></Outlet>

                    )}
                </main>

                <footer className="text-center py-4">
                    <p>© 2025 Adda Caffe. All rights reserved.</p>
                </footer>
            </div>

            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay lg:hidden"></label>
                <aside className="menu p-4 max-w-64 text-base-content min-h-screen bg-base-200 space-y-3.5">
                    <DashboardUserComponent />
                    <ul className="menu p-0 space-y-1 min-h-screen">
                        <li>
                            <NavLink to="/rider-dashboard" className={({ isActive }) =>
                                isActive ? "flex items-center gap-2 bg-[#382827] text-base-200"
                                    : "flex items-center gap-2"
                            }
                            >
                                <LayoutDashboard size={18} /> Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/rider-dashboard/driver/assign/rides" className={({ isActive }) => isActive ? "flex items-center gap-2 bg-[#382827] border border-[#382827] text-base-200"
                                : "flex items-center gap-2 bg-base-300 border border-gray-300"}>
                                <MapPin size={18} /> Assigned Deliveries
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/rider-dashboard/driver/delivery/history" className={({ isActive }) => isActive ? "flex items-center gap-2 bg-[#382827] border border-[#382827] text-base-200"
                                : "flex items-center gap-2 bg-base-300 border border-gray-300"}
                            >
                                <History size={18} /> Delivery History
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/rider-dashboard/driver/availability" className={({ isActive }) => isActive ? "flex items-center gap-2 bg-[#382827] border border-[#382827] text-base-200"
                                : "flex items-center gap-2 bg-base-300 border border-gray-300"} >
                                <Clock size={18} /> Availability
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/rider-dashboard/rider/own/waller/earnings" className={({ isActive }) => isActive ? "flex items-center gap-2 bg-[#382827] border border-[#382827] text-base-200"
                                : "flex items-center gap-2 bg-base-300 border border-gray-300"}>
                                <Wallet size={18} /> Wallet
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/rider-dashboard/supports" className={({ isActive }) => isActive ? "flex items-center gap-2 bg-[#382827] border border-[#382827] text-base-200"
                                : "flex items-center gap-2 bg-base-300 border border-gray-300"}>
                                <LifeBuoy size={18} /> Support
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/rider-dashboard/rider/profile" className={({ isActive }) => isActive ? "flex items-center gap-2 bg-[#382827] border border-[#382827] text-base-200"
                                : "flex items-center gap-2 bg-base-300 border border-gray-300"}>
                                <UserCircle size={18} /> Profile
                            </NavLink>
                        </li>
                    </ul>
                    <BacktoHome />
                </aside>
            </div>
        </div >
    );
};

export default RiderLayout;
