import { createBrowserRouter, type RouteObject } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorLayout from "../Layouts/ErrorLayout";
import OurProducts from "../Pages/OurProducts/OurProducts";
import OurProductSection from "../Components/OurProductSection/OurProductSection";
import OurStory from "../Pages/OurStory/OurStory";
import Signin from "../Components/Auth/Signin";
import AdminLayout from "../Layouts/AdminLayout";
import RiderLayout from "../Layouts/RiderLayout";
import UserDashboard from "../Layouts/UserDashboard";
import SignUp from "../Components/Auth/SignUp";
import CustomerHome from "../Dashboards/Customer/Pages/CustomerHome";
import CustomerInvoice from "../Dashboards/Customer/Pages/CustomerInvoice";
import UserOrderHistory from "../Dashboards/Customer/Pages/UserOrderHistory";
import TrackSelfOrder from "../Dashboards/Customer/Pages/TrackSelfOrder";
import Profile from "../Dashboards/Customer/Pages/Profile";
import RiderHome from "../Dashboards/Rider/Pages/RiderHome";
import AsingRides from "../Dashboards/Rider/Pages/AsingRides";
import DeliveryHistory from "../Dashboards/Rider/Pages/DeliveryHistory";
import Availibility from "../Dashboards/Rider/Pages/Availibility";
import Wallet from "../Dashboards/Rider/Pages/Wallet";
import Supports from "../Dashboards/Rider/Pages/Supports";

const routes: RouteObject[] = [
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/our-products',
                element: <OurProductSection></OurProductSection>
            },
            {
                path: '/our-story',
                element: <OurStory></OurStory>
            },
            {
                path: 'login',
                Component: Signin
            },
            {
                path: 'singUp',
                Component: SignUp
            }

        ]
    },
    {
        path: "/admin-dashboard",
        element: <AdminLayout></AdminLayout>,
    },
    {
        path: "/rider-dashboard",
        element: <RiderLayout></RiderLayout>,
        children: [
            {
                index: true,
                element: <RiderHome></RiderHome>
            },
            {
                path: 'driver/assign/rides',
                element: <AsingRides></AsingRides>
            },
            {
                path: 'driver/delivery/history',
                element: <DeliveryHistory></DeliveryHistory>
            },
            {
                path: 'driver/availability',
                element: <Availibility></Availibility>
            },
            {
                path: 'rider/own/waller/earnings',
                element: <Wallet></Wallet>
            },
            {
                path: 'supports',
                element: <Supports></Supports>
            },
            {
                path: 'rider/profile',
                element: <Profile></Profile>
            },
        ]
    },
    {
        path: "/customer-dashboard",
        element: <UserDashboard></UserDashboard>,
        children: [
            {
                index: true,
                element: <CustomerHome></CustomerHome>
            },
            {
                path: 'invoice-download',
                element: <CustomerInvoice></CustomerInvoice>
            },
            {
                path: 'my/order/history',
                element: <UserOrderHistory></UserOrderHistory>
            },
            {
                path: 'track/my/order',
                element: <TrackSelfOrder></TrackSelfOrder>
            },
            {
                path: 'my/profile',
                element: <Profile></Profile>
            }
        ]
    },
    {
        path: "*",
        Component: ErrorLayout,
    },
]

export const router = createBrowserRouter(routes);
