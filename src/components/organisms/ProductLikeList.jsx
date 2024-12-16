import {Table} from "antd";
import Heading from "../atoms/Heading";
import ProductLikeItem from "./ProductLikeItem";
import ProductLikeActions from "./ProductLikeActions";

const ProductLikeList = ({title, data, className}) => {
    const columns = [
        {
            title: "상품정보",
            dataIndex: "name",
            key: "name",
            render: (text, record) => <ProductLikeItem data={record} />,
        },
        {
            title: "판매가",
            dataIndex: "price",
            key: "price",
            render: text => `${text.toLocaleString("ko-KR")}원`,
        },
        {
            title: "배송비",
            dataIndex: "shipping",
            key: "shipping",
            render: () => "3,000원",
        },
        {
            title: "합계",
            dataIndex: "total",
            key: "total",
            render: (text, record) => (
                <div className="flex items-center justify-center gap-10">
                    <span>{(record.price + 3000).toLocaleString("ko-KR")}원</span>
                    <ProductLikeActions data={record} />
                </div>
            ),
        },
    ];
    console.log(data);
    return (
        <>
            <Heading
                text={`${title} 총 ${data?.length}개`}
                className={className}
                type="h3"
            />
            <Table
                columns={columns}
                dataSource={data}
                rowKey="id"
                pagination={false}
                bordered={false}
                className="w-full antd-table"
            />
        </>
    );
};

export default ProductLikeList;
