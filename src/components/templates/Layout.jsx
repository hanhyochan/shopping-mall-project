import TopNav from "../organisms/TopNav";
import CategoryNav from "../organisms/CategoryNav";
import Footer from "../organisms/Footer";

const Layout = ({children}) => {
    return (
        <>
            <TopNav />
            <CategoryNav />
            <main className="md:w-[80vw] xl: w-[90vw] mx-auto pb-[450px]">{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
