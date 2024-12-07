import {Card, Rate} from "antd";
import {LikeOutlined} from "@ant-design/icons";
import Button from "../atoms/Button";

const ReviewItem = ({data}) => {
    if (!data || data.length === 0) {
        return <p>리뷰가 없습니다.</p>;
    }

    return (
        <>
            <Card key={data.id}>
                <div className="flex">
                    <Rate
                        disabled
                        value={data.rating}
                    />
                    <p className="pl-5 font-bold">{data.title}</p>
                </div>
                <p className="mt-2">{data.id}</p>
                <p className="mt-1">{data.content}</p>
                <Button
                    type="text"
                    text={`도움돼요 ${data.like}`}
                    icon={<LikeOutlined />}
                    className="!border border-gray-300 mt-3"
                />
            </Card>
        </>
    );
};

export default ReviewItem;
