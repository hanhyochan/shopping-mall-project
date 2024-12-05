// Import Swiper core and required modules
import {Navigation, Pagination, Autoplay} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// 임시 데이터
const data = [
    {
        id: 1,
        title: "한파 대비 아우터",
        description: "최대 50% 할인",
        imageUrl: "https://image.msscdn.net/display/images/2024/11/22/1d1accbd6fd3450ca95084cd4182c0d0.jpg",
        link: "",
    },
    {
        id: 2,
        title: "태리태리가 추천하는 패딩스타일",
        description: "따뜻하고 편안한 겨울 신발",
        imageUrl: "https://image.msscdn.net/display/images/2024/11/22/aac5f0f2e7cc482eb997fde27a3b1981.jpg",
        link: "",
    },
    {
        id: 3,
        title: "태리태리가 추천하는 패딩스타일",
        description: "따뜻하고 편안한 겨울 신발",
        imageUrl: "https://image.msscdn.net/display/images/2024/11/22/aac5f0f2e7cc482eb997fde27a3b1981.jpg",
        link: "",
    },
];

const MainSwiper = () => {
    return (
        <>
            {typeof window !== "undefined" && (
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={1}
                    navigation
                    pagination={{clickable: true, type: "bullets"}}
                    autoplay={{
                        delay: 4000,
                    }}
                    className="!ml-[-10%] !mr-[-10%]"
                >
                    {data.map(item => (
                        <SwiperSlide key={item.id}>
                            <div className="relative flex justify-center text-center">
                                <img
                                    src={item.imageUrl}
                                    alt={item.title}
                                    style={{
                                        maxHeight: "600px",
                                        objectFit: "cover",
                                    }}
                                />
                                <div className="absolute bottom-0 p-4 text-white text-lg font-bold">
                                    <p>{item.title}</p>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </>
    );
};

export default MainSwiper;
