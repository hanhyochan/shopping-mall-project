import React from "react";
import Main from "./pages/Main";
import ProductDetail from "./pages/ProductDetail";
import CategoryDetail from "./pages/CategoryDetail";
import {Routes, Route} from "react-router-dom";
import Layout from "./components/common/Layout";
<<<<<<< HEAD
import MyPage from "./pages/MyPage";
=======
import MyPage from "./pages/myPage/MyPage";
>>>>>>> 6216e6be535d05788b1767394244d53c9e572de9

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
