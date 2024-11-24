import Footer from "./Footer";
import TopNav from "./TopNav";
import CategoryNav from "./CategoryNav";
import React from "react";

const Layout = ({children}) => {
    return (
        <>
            <TopNav />
            <CategoryNav />
            <main className="md:w-[80vw] xl: w-[90vw] mx-auto">{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
