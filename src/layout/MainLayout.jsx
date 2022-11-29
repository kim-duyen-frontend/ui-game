import React from 'react';
import Sidebar from '../components/sidebar';
import "./style.scss";

const MainLayout = ({ children }) => {
    return (
        <div className="mainlayout">
            <Sidebar/>
            {children}
        </div>
    );
};

export default MainLayout;