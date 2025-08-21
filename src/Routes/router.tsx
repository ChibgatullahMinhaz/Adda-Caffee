import { createBrowserRouter, type RouteObject } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorLayout from "../Layouts/ErrorLayout";
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
import AdminHome from "../Dashboards/Admin/Pages/AdminHome";
import ProductManagements from "../Dashboards/Admin/Pages/Products/ProductManagements";
import Categories from "../Dashboards/Admin/Pages/Products/Categories";
import AddProducts from "../Dashboards/Admin/Pages/Products/AddProducts";
import UpdateProduct from "../Dashboards/Admin/Pages/Products/UpdateProduct";
import ProductDetails from "../Dashboards/Admin/Pages/Products/ProductDetails";
import AllUsers from "../Dashboards/Admin/Pages/Users/AllUsers";
import UserDetails from "../Dashboards/Admin/Pages/Users/UserDetails";
import MakeAdmin from "../Dashboards/Admin/Pages/Users/MakeAdmin";
import BannedUser from "../Dashboards/Admin/Pages/Users/BannedUser";
import Allorder from "../Dashboards/Admin/Pages/Order/Allorder";
import PendingOrder from "../Dashboards/Admin/Pages/Order/PendingOrder";
import OrderInvoice from "../Dashboards/Admin/Pages/Order/OrderInvoice";
import ReturnedOrder from "../Dashboards/Admin/Pages/Order/ReturnedOrder";
import RefundOrder from "../Dashboards/Admin/Pages/Order/RefundOrder";
import Review from "../Dashboards/Admin/Pages/Order/Review";
import TrackOrder from "../Dashboards/Admin/Pages/Order/TrackOrder";
import OrderHistory from "../Dashboards/Admin/Pages/Order/OrderHitory";
import OrderDetails from "../Dashboards/Admin/Pages/Order/OrderDetails";
import AssignOrder from "../Dashboards/Admin/Pages/Order/AssignOrder";
import Riders from "../Dashboards/Admin/Pages/Riders/Riders";
import ManualAssign from "../Dashboards/Admin/Pages/Riders/ManulaAssign";
import AddRider from "../Dashboards/Admin/Pages/Riders/AddRider";
import RejectedRider from "../Dashboards/Admin/Pages/Riders/RejectedRider";
import PendingRider from "../Dashboards/Admin/Pages/Riders/PendingRider";
import ReportsOverview from "../Dashboards/Admin/Pages/RepostAnalytics/ReportsOverview";
import SalesReports from "../Dashboards/Admin/Pages/RepostAnalytics/SalesReports";
import Reveneue from "../Dashboards/Admin/Pages/RepostAnalytics/Reveneue";
import TopProducts from "../Dashboards/Admin/Pages/RepostAnalytics/TopProducts";
import CustomerInsights from "../Dashboards/Admin/Pages/RepostAnalytics/CustomerInsights";
import FinanceSummury from "../Dashboards/Admin/Pages/RepostAnalytics/FinanceSummury";
import ExportReports from "../Dashboards/Admin/Pages/RepostAnalytics/ExportReports";
import OrderReport from "../Dashboards/Admin/Pages/RepostAnalytics/OrderReport";
import AllCoupon from "../Dashboards/Admin/Pages/Copon/AllCoupon";
import RewardPoints from "../Dashboards/Admin/Pages/Copon/RewardPoints";
import ContactPage from "../Dashboards/Admin/Pages/CMS/ContactPage";
import AboutPage from "../Dashboards/Admin/Pages/CMS/AboutPage";
import HomePage from "../Dashboards/Admin/Pages/CMS/HomePage";
import FinanceOverview from "../Dashboards/Admin/Pages/Finance/FinanceOverview";
import FinanceTransaction from "../Dashboards/Admin/Pages/Finance/FinanceTransaction";
import RefundOverview from "../Dashboards/Admin/Pages/Finance/RefundOverview";
import FinancePayouts from "../Dashboards/Admin/Pages/Finance/FinancePayouts";
import RolesPermission from "../Dashboards/Admin/Pages/Security/Roles&permition";
import AuditLog from "../Dashboards/Admin/Pages/Security/AuditLog";
import ActivityFeed from "../Dashboards/Admin/Pages/Security/ActivityFeed";
import Ticket from "../Dashboards/Admin/Pages/Supports/Ticket";
import LiveChat from "../Dashboards/Admin/Pages/Supports/LiveChat";
import CompanyInfo from "../Dashboards/Admin/Pages/Settings/CompanyInfo";
import SystemMonitoring from "../Dashboards/Admin/Pages/Settings/SystemMonitoring";
import MaintananceMode from "../Dashboards/Admin/Pages/Settings/MaintananceMode";
import BackupRestore from "../Dashboards/Admin/Pages/Settings/BackupRestore";
import PaymentsSeting from "../Dashboards/Admin/Pages/Settings/PaymentsSeting";

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
        children: [
            {
                index: true,
                element: <AdminHome></AdminHome>
            },
            {
                path: 'products/managements',
                element: <ProductManagements></ProductManagements>,
            }
            ,
            {
                path: 'categories',
                element: <Categories></Categories>,
            }
            ,
            {
                path: 'products/add',
                element: <AddProducts></AddProducts>,
            }
            ,
            {
                path: 'products/update/:productId',
                element: <UpdateProduct></UpdateProduct>,
            }
            ,
            {
                path: 'products/details/:productId',
                element: <ProductDetails></ProductDetails>,
            },
            {
                // user managements
                path: 'all/users',
                element: <AllUsers></AllUsers>,
            }, {
                path: 'user/details/:userId',
                element: <UserDetails></UserDetails>
            }
            , {
                path: 'user/make/admin',
                element: <MakeAdmin></MakeAdmin>
            }
            , {
                path: 'banned/user',
                element: <BannedUser></BannedUser>
            },
            // order managements
            {
                path: 'all/orders',
                element: <Allorder></Allorder>
            },
            {
                path: 'all/pending/orders',
                element: <PendingOrder></PendingOrder>
            },
            {
                path: 'all/invoice',
                element: <OrderInvoice></OrderInvoice>
            },
            {
                path: 'all/returned',
                element: <ReturnedOrder></ReturnedOrder>
            },
            {
                path: 'all/refund/orders',
                element: <RefundOrder></RefundOrder>
            },
            {
                path: 'all/reviews',
                element: <Review></Review>
            },
            {
                path: 'Track/order',
                element: <TrackOrder></TrackOrder>
            },
            {
                path: 'order/history',
                element: <OrderHistory></OrderHistory>
            },
            {
                path: 'order/details/:orderId',
                element: <OrderDetails></OrderDetails>
            },
            {
                path: 'assign/orders',
                element: <AssignOrder></AssignOrder>
            },
            // rider managements
            {
                path: 'rider/riders',
                element: <Riders></Riders>
            },
            {
                path: 'rider/manual/assign',
                element: <ManualAssign></ManualAssign>
            },
            {
                path: 'rider/add/rider',
                element: <AddRider></AddRider>
            },
            {
                path: 'rider/rejected/rider',
                element: <RejectedRider></RejectedRider>
            },
            {
                path: 'rider/pending/rider',
                element: <PendingRider></PendingRider>
            },
            // analytics/reports
            {
                path: 'reports/overview',
                element: <ReportsOverview></ReportsOverview>
            },
            {
                path: 'reports/sales/reports',
                element: <SalesReports></SalesReports>
            },
            {
                path: 'revenue',
                element: <Reveneue></Reveneue>
            },
            {
                path: 'top/products',
                element: <TopProducts></TopProducts>
            },
            {
                path: 'customer/insights',
                element: <CustomerInsights></CustomerInsights>
            },
            {
                path: 'finance/summary',
                element: <FinanceSummury></FinanceSummury>
            },
            {
                path: 'reports/export',
                element: <ExportReports></ExportReports>
            },
            {
                path: 'order/reports',
                element: <OrderReport></OrderReport>
            },
            //coupons
            {
                path: 'all/coupons',
                element: <AllCoupon></AllCoupon>
            },
            {
                path: 'reward',
                element: <RewardPoints></RewardPoints>
            },
            //cms
            {
                path: 'content/homepage',
                element: <HomePage></HomePage>
            },
            {
                path: 'content/about',
                element: <AboutPage></AboutPage>
            },
            {
                path: 'content/contact',
                element: <ContactPage></ContactPage>
            },
            //finance
            {
                path: 'finance/overview',
                element: <FinanceOverview></FinanceOverview>
            },
            {
                path: 'finance/transactions',
                element: <FinanceTransaction></FinanceTransaction>
            },
            {
                path: 'finance/refunds',
                element: <RefundOverview></RefundOverview>
            },
            {
                path: 'finance/payouts',
                element: <FinancePayouts></FinancePayouts>
            },
            //Security
            {
                path: 'security/roles',
                element: <RolesPermission></RolesPermission>
            },
            {
                path: 'security/logs',
                element: <AuditLog></AuditLog>
            },
            {
                path: 'security/activity',
                element: <ActivityFeed></ActivityFeed>
            },

            //Support & Tickets
            {
                path: 'support/tickets',
                element: <Ticket></Ticket>
            },
            {
                path: 'support/chat',
                element: <LiveChat></LiveChat>
            },
            {
                path: 'support/reviews',
                element: <Review></Review>
            },

            //settings 
            {
                path: 'settings/company',
                element: <CompanyInfo></CompanyInfo>
            },
            {
                path: 'settings/payment',
                element: <PaymentsSeting></PaymentsSeting>
            },
            {
                path: 'settings/backup',
                element: <BackupRestore></BackupRestore>
            },
            {
                path: 'settings/maintenance',
                element: <MaintananceMode></MaintananceMode>
            },
            {
                path: 'settings/monitor',
                element: <SystemMonitoring></SystemMonitoring>
            },

        ]
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
