import Modal from "../molecules/Modal";
import {Input, Rate} from "antd";
import {useState} from "react";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {useParams} from "react-router-dom";
import {postReview} from "../../api/productApi";

const ReviewModal = ({isOpen, onClose}) => {
    const {productId} = useParams();
    const queryClient = useQueryClient(); // React Query 클라이언트

    // 폼데이터
    const [formData, setFormData] = useState({
        id: "",
        rating: 0,
        title: "",
        content: "",
        like: 0,
    });
    // 리뷰작성
    const mutation = useMutation({
        mutationFn: newReview => postReview(productId, newReview),
        onSuccess: () => {
            console.log("Review added successfully");
            queryClient.invalidateQueries(["reviews", productId]);
            onClose(); // 모달 닫기
        },
        onError: error => {
            console.error("Review submission error:", error);
            alert(`리뷰 등록 중 오류 발생: ${error.message}`);
        },
    });

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]: value}));
    };

    const handleRatingChange = value => {
        setFormData(prev => ({...prev, rating: value}));
    };

    const handleSubmit = () => {
        const newReview = {
            rating: formData.rating,
            title: formData.title,
            content: formData.content,
        };
        alert("리뷰 작성이 완료되었습니다");
        mutation.mutate(newReview); // 서버에 리뷰 데이터 전송
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            onClick={handleSubmit}
            title="리뷰 작성"
            confirmText="리뷰 작성"
        >
            <div className="flex flex-col">
                <Rate
                    onChange={handleRatingChange}
                    value={formData.rating}
                    className="mb-3"
                />
                <Input
                    name="id"
                    readOnly
                    value="로그인한 userId"
                    className="mb-3"
                />
                <Input
                    name="title"
                    placeholder="제목을 입력하세요"
                    value={formData.title}
                    onChange={handleChange}
                    className="mb-3"
                />
                <Input.TextArea
                    name="content"
                    placeholder="리뷰 내용을 입력하세요"
                    value={formData.content}
                    onChange={handleChange}
                    className="mb-3"
                    rows={4}
                />
                {mutation.isError && <p className="text-red-500 mt-2">리뷰 제출 실패! 다시 시도해주세요.</p>}
                {mutation.isSuccess && <p className="text-green-500 mt-2">리뷰가 성공적으로 제출되었습니다!</p>}
            </div>
        </Modal>
    );
};

export default ReviewModal;
