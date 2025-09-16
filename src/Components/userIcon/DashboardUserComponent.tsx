import React from 'react';
import { Link } from 'react-router';
import useAuth from '../../Hook/useAuth';
import defaultIcon from '../../assets/defualt avata/defualtAvata.webp'
const DashboardUserComponent: React.FC = () => {
    const { user } = useAuth()
    const profileIcon: string = user && user?.photoURL ? user?.photoURL : defaultIcon;

    return (
        <>
            <Link to={`/`} className="space-y-2">
                <div className="flex items-center gap-x-2.5" >
                    <img src={profileIcon} alt="user icon" className="w-12 h-12 rounded-xl bg-amber-400" />
                    <div id="dasboardUserIcon">
                        <h2 className="font-bold text-2xl capitalize">{user?.displayName}</h2>
                        <p className="text-sm">Adda Caffe</p>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default DashboardUserComponent;