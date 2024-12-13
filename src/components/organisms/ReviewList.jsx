import {Row, Col} from "antd";
import ReviewItem from "./ReviewItem.jsx";

const ReviewList = ({data, deleteReview}) => {
    return (
        <>
            <Row
                gutter={[16, 20]}
                className="w-full"
            >
                {data?.map(item => (
                    <Col
                        xs={24}
                        key={item.id}
                    >
                        <ReviewItem
                            data={item}
                            deleteReview={deleteReview}
                        />
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default ReviewList;
