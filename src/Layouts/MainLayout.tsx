import React, { lazy, Suspense, useCallback, useEffect, useState } from 'react';
import ScrollButton from '../Components/UI/ScrollButton';
const Navbar = lazy(() => import('../Shared/Navbar'));
import { Outlet, useLocation } from 'react-router';
import Loading from '../Components/ComponentLoading/Loading';
const Loader = lazy(() => import('../Components/UI/Loader'));
const Footer = lazy(() => import('../Shared/Footer'));
import { useTransition } from "react";

const MainLayout: React.FC = () => {
    const [isPending, startTransition] = useTransition();
    const location = useLocation();
    const handleScroll = useCallback(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [])
    useEffect(() => {
        startTransition(() => handleScroll());
    }, [location, handleScroll]);
    
    return (
        <>
            <ScrollButton></ScrollButton>
            <header>
                <nav>
                    <Suspense
                        fallback={
                            <div className="h-[88px] flex items-center justify-center">
                                <Loading />
                            </div>
                        }
                    >
                        <Navbar />
                    </Suspense>
                </nav>
            </header>
            <main id="minHight">
                {isPending ? <Loader /> : <Outlet />}
            </main>


            <Suspense
                fallback={
                    <div className="h-[350px] flex items-center justify-center">
                        <Loading />
                    </div>
                }
            >
                <Footer />
            </Suspense>

        </>
    );
};

export default MainLayout;