import Footer from "./Footer";
import TopNav from "./TopNav";
import CategoryNav from "./CategoryNav";
import React from "react";
import {useLocation} from "react-router-dom";

const Layout = ({children}) => {
    const {search} = useLocation(); // url에서 쿼리파라미터추출
    const query = new URLSearchParams(search);
    const subcategory = query.get("subcategory");

    return (
        <>
            <TopNav />
            {/* 서브카테고리 경로로 갔을때 카테고리 네비바 숨기기 */}
            {subcategory ? null : <CategoryNav />}
            <main className="md:w-[80vw] xl: w-[90vw] mx-auto pb-[450px]">{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
