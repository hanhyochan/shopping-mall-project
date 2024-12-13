import {Card, Rate} from "antd";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {LikeOutlined, MoreOutlined} from "@ant-design/icons";
import {deleteReview} from "../../api/productApi";
import {useState, useCallback} from "react";
import {Modal, message} from "antd";
import Button from "../atoms/Button";

const ReviewItem = ({data}) => {
    const queryClient = useQueryClient();
    if (!data || data.length === 0) {
        return <p>리뷰가 없습니다.</p>;
    }
    const [menuOpen, setMenuOpen] = useState(false);
    const handleClick = useCallback(() => {
        setMenuOpen(!menuOpen);
    }, []);

    // 리뷰 삭제
    const deleteReviewMutation = useMutation({
        mutationFn: deleteReview,
        onSuccess: () => {
            // 삭제 성공 시 해당 상품의 리뷰 쿼리 무효화
            queryClient.invalidateQueries(["reviews", id]);
            message.success("리뷰가 성공적으로 삭제되었습니다.");
        },
        onError: error => {
            message.error("리뷰 삭제 중 오류가 발생했습니다.");
            console.error(error);
        },
    });

    // 리뷰 삭제
    const handleDeleteReview = useCallback(
        reviewId => {
            Modal.confirm({
                title: "리뷰를 삭제하시겠습니까?",
                content: "삭제된 리뷰는 복구할 수 없습니다.",
                onOk() {
                    deleteReviewMutation.mutate(reviewId);
                },
                okText: "삭제",
                cancelText: "취소",
            });
        },
        [deleteReviewMutation]
    );
    return (
        <>
            <Card
                key={data.id}
                className="relative"
            >
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
                <div className="absolute top-3 right-0">
                    <Button
                        type="button"
                        icon={<MoreOutlined />}
                        onClick={handleClick}
                        className="relative"
                    />
                    {menuOpen && (
                        <ul className="absolute right-0 top-full mt-2 p-2 border border-gray-300 bg-white rounded shadow-lg">
                            <li className="flex flex-col items-center gap-1">
                                <Button
                                    type="button"
                                    text="수정하기"
                                />
                                <Button
                                    type="button"
                                    text="삭제하기"
                                    onClick={() => {
                                        handleDeleteReview(data.id);
                                    }}
                                />
                            </li>
                        </ul>
                    )}
                </div>
            </Card>
        </>
    );
};

export default ReviewItem;
