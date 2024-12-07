import React, {useEffect} from "react";
import {useState} from "react";
import axios from "axios";
import {List, Card, Rate} from "antd";

const ProductReview = () => {
    const [review, setReview] = useState([]);
    // 리뷰 페취 하기
    const fetchReview = async () => {
        try {
            const response = await axios.get("http://localhost:3000/reviews");
            setReview(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchReview();
    }, []);
    // 리뷰 쓰기

    return (
        <>
            <div className="grid w-full h-48 grid-cols-3 grid-rows-1 border border-gray-300 mb-14">
                <div className="flex flex-col items-center justify-center border-r border-gray-300">
                    <span className="text-base">구매고객 총 평점</span>
                    <h1 className="text-2xl">5점</h1>
                </div>
                <div className="flex flex-col items-center justify-center border-r border-gray-300">
                    <span className="text-base">별점 비율</span>
                </div>
                <div className="flex flex-col items-center justify-center ">
                    <span className="text-base">한줄평</span>
                </div>
            </div>

            <div className="flex flex-col w-full">
                <button className="mb-4 text-right cursor-pointer">리뷰쓰기</button>
                <hr className="mb-4 border border-black" />
                <List
                    grid={{gutter: 16, column: 1}}
                    dataSource={review}
                    renderItem={review => (
                        <List.Item>
                            <Card>
                                <div className="flex">
                                    <Rate
                                        disabled
                                        value={review.rating}
                                    />
                                    <p className="pl-5">{review.title}</p>
                                </div>

                                <p>{review.content}</p>

                                <p>좋아요: {review.like}</p>
                            </Card>
                        </List.Item>
                    )}
                />
            </div>
        </>
    );
};

export default ProductReview;
