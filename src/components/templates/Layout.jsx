import TopNav from "../organisms/TopNav";
import CategoryNav from "../organisms/CategoryNav";
import Footer from "../organisms/Footer";
import {useLocation} from "react-router-dom";

const Layout = ({children}) => {
    const location = useLocation();
    const isMypage = location.pathname === "/Mypage";

    console.log(isMypage);
    return (
        <>
            <TopNav />
            <CategoryNav />
            <main className={`${isMypage ? "w-screen relative ml-[-50vw] mr-[-50vw] bg-[#eee] pb-[450px]" : "md:w-[80vw] xl:w-[90vw] mx-auto pb-[450px]"}`}>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
