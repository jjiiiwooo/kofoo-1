import React from 'react';
import '../style/BottomNav.css';
import { Link } from 'react-router-dom';
import { MdHome } from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";


const BottomNav = () => {
    return (
        <nav className="Wrapper">
            <div>
                <Link to ="/login/main" className="nav-link">
                    <MdHome/>
                </Link>
            </div>
            <div>
                <Link to="/login/main/picture" className="nav-link">
                    <FaCamera/>
                </Link>
            </div>
            <div>
                <Link to="/login/main/mypage" className="nav-link">
                    <FaUserAlt />
                </Link>
            </div>
        </nav>
    );
};

export default BottomNav;