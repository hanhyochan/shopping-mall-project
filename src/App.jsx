// import ProductDetail from "./pages/ProductDetail";
import {Routes, Route} from "react-router-dom";
import Layout from "./components/templates/Layout";
import MyPage from "./pages/myPage/MyPage";
import Main from "./components/pages/Main";
import CategoryDetail from "./components/pages/CategoryDetail";
import ProductDetail from "./components/pages/ProductDetail";

const App = () => {
    return (
        <>
            <Layout>
                <Routes>
                    <Route
                        path="/"
                        element={<Main />}
                    />
                    <Route
                        path="/details/:productId"
                        element={<ProductDetail />}
                    />
                    <Route
                        path="/category"
                        element={<CategoryDetail />}
                    />
                    <Route
                        path="/myPage"
                        element={<MyPage />}
                    />
                </Routes>
            </Layout>
        </>
    );
};

export default App;
