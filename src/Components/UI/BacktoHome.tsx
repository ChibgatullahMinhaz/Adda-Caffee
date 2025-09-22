import { ArrowBigLeft } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const BacktoHome:React.FC = () => {
    return (
        <>
            <Link to={`/`} className="sticky bottom-2 z-10 bg-green-950 p-2 rounded-xl text-base-200 font-semibold flex  items-center">
                <ArrowBigLeft ></ArrowBigLeft>
                <span>Back to Home</span>
            </Link>
        </>
    );
};

export default BacktoHome;