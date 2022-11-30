import React from 'react';
import GalleryImage from '../components/gallery';
import Sidebar from '../components/sidebar';
import "./style.scss";

const MainLayout = ({ children }) => {
    return (
        <div className="mainlayout">
            <Sidebar/>
            <GalleryImage/>
            {children}
        </div>
    );
};

export default MainLayout;