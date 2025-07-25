import React, { useEffect, useState } from 'react';
import ScrollButton from '../Components/UI/ScrollButton';
import Navbar from '../Shared/Navbar';
import { Outlet, useLocation } from 'react-router';
import Loader from '../Components/UI/Loader';
import Footer from '../Shared/Footer';

const MainLayout: React.FC = () => {
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
        }, 200);
        return () => clearTimeout(timeout);
    }, [location]);
    return (
        <>

            <ScrollButton></ScrollButton>
            <header>
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className="" id="minHight">
                {routeLoading ? (
                    <Loader></Loader>
                ) : (
                    <Outlet></Outlet>

                )}
            </main>

            <footer>
                <Footer></Footer>
            </footer>

        </>
    );
};

export default MainLayout;