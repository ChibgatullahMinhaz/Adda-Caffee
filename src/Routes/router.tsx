import { createBrowserRouter, type RouteObject } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorLayout from "../Layouts/ErrorLayout";

const routes: RouteObject[] = [
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                element: <Home></Home>
            }
        ]
    },
    {
        path: "*",
        Component: ErrorLayout,
    },
]

export const router = createBrowserRouter(routes);
