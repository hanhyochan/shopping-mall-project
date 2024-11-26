import React from "react";
import Main from "./pages/Main";
import ProductDetail from "./pages/ProductDetail";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/common/Layout";

const App = () => {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/details/:productId' element={<ProductDetail />} />
                </Routes>
            </Layout>
        </>
    );
};

export default App;
