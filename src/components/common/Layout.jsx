import Footer from "./Footer";
import TopNav from "./TopNav";
import CategoryNav from "./CategoryNav";
import React from 'react';

const Layout = ({ children }) => {
    return (
        <>
            <TopNav />
            <CategoryNav />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;