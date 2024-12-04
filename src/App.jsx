import React from "react";
import Main from "./pages/Main";
import ProductDetail from "./pages/ProductDetail";
import CategoryDetail from "./pages/CategoryDetail";
import {Routes, Route} from "react-router-dom";
import Layout from "./components/common/Layout";
import MyPage from "./pages/myPage/MyPage";
// 현정 작업중
import Main2 from "./components2/pages/Main2";
import Layout2 from "./components2/templates/Layout2";

const App = () => {
    return (
        <>
            <Layout2>
                <Routes>
                    {/* <Route
                        path="/"
                        element={<Main />}
                    /> */}
                    {/* 현졍 작업중 */}
                    <Route
                        path="/"
                        element={<Main2 />}
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
            </Layout2>
        </>
    );
};

export default App;
