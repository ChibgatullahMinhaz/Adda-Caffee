import { createBrowserRouter, type RouteObject } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorLayout from "../Layouts/ErrorLayout";
import OurProducts from "../Pages/OurProducts/OurProducts";
import OurProductSection from "../Components/OurProductSection/OurProductSection";
import OurStory from "../Pages/OurStory/OurStory";
import Signin from "../Components/Auth/Signin";

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
                element: <OurProducts></OurProducts>
            },
            {
                path: '/our-story',
                element: <OurStory></OurStory>
            },
            {
                path: '/our-commitment',
                element: <OurProductSection></OurProductSection>
            },
            {
                path: 'login',
                Component: Signin
            }

        ]
    },
    {
        path: "*",
        Component: ErrorLayout,
    },
]

export const router = createBrowserRouter(routes);
