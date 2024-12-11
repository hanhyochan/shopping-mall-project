import React from "react";
import {Row, Col} from "antd";
import Heading from "../atoms/Heading";
import Product from "../organisms/Product.jsx";

const ProductList = ({title, data, className, reviewdata}) => {
    const getReviewCount = productId => {
        if (!productId || !reviewdata || !Array.isArray(reviewdata)) {
            return 0;
        }
        const product = reviewdata.find(el => el.pro_id === Number(productId));
        const count = product?.reviews?.length || 0;
        return count;
    };
    return (
        <>
            <Heading
                text={title}
                className={className}
            />
            <Row
                gutter={[16, 20]}
                className="w-full"
            >
                {data?.map(item => {
                    return (
                        <Col
                            xs={24} // 모바일: 한 줄에 한 개
                            sm={12} // 작은 화면: 한 줄에 두 개
                            md={8} // 중간 화면: 한 줄에 세 개
                            lg={6} // 큰 화면: 한 줄에 네 개
                            key={item.id}
                        >
                            <Product
                                data={item}
                                reviewCount={getReviewCount(item.id)}
                            />
                        </Col>
                    );
                })}
            </Row>
        </>
    );
};

export default ProductList;
