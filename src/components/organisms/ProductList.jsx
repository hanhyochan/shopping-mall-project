import React from "react";
import {Row, Col} from "antd";
import Heading from "../atoms/Heading";
import Product from "../organisms/Product.jsx";

const ProductList = ({title, data, className}) => {
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
                {data?.map(item => (
                    <Col
                        xs={24} // 모바일: 한 줄에 한 개
                        sm={12} // 작은 화면: 한 줄에 두 개
                        md={8} // 중간 화면: 한 줄에 세 개
                        lg={6} // 큰 화면: 한 줄에 네 개
                        key={item.id}
                    >
                        <Product data={item} />
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default ProductList;
