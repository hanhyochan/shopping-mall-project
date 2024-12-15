import React, {useState} from "react";
import OrderHistory from "./OrderHistory";
import ShoppingCart from "./ShoppingCart";
import LikedProduct from "./LikedProduct";
import MyPage from "./MyPage";
import MypageHeader from "../../molecules/MypageHeader";
import RecentlyViewedItems from "./RecentlyViewedItems";
import MyPosts from "./MyPosts";
import AccountSettings from "./AccountSettings";

const MyPageLayout = () => {
    const [myPageView, setMyPageView] = useState("myPage");

    const pageComponents = {
        myPage: <MyPage />,
        orderHistory: <OrderHistory />,
        shoppingCart: <ShoppingCart />,
        likedProduct: <LikedProduct />,
        recentlyViewedItems: <RecentlyViewedItems />,
        myPosts: <MyPosts />,
        accountSettings: <AccountSettings />,
    };

    return (
        <>
            <MypageHeader />
            <div className="flex justify-between pt-20 md:w-[80vw] xl:w-[90vw] mx-auto gap-[40px]">
                <div className="h-[500px] bg-white flex justify-center pt-[50px] min-w-[230px]">
                    <div className="flex flex-col gap-[20px] text-sm">
                        <h2 className="text-lg font-bold">나의 쇼핑정보</h2>
                        <button onClick={() => setMyPageView("orderHistory")}>주문내역</button>
                        <button onClick={() => setMyPageView("shoppingCart")}>장바구니</button>
                        <button onClick={() => setMyPageView("likedProduct")}>관심상품</button>
                        <button onClick={() => setMyPageView("recentlyViewedItems")}>최근본상품</button>
                        <button onClick={() => setMyPageView("myPosts")}>나의 게시글보기</button>
                        <button onClick={() => setMyPageView("accountSettings")}>회원정보변경</button>
                    </div>
                </div>

                <div className="h-[500px] bg-white flex-1">{pageComponents[myPageView]}</div>
            </div>
        </>
    );
};

export default MyPageLayout;
