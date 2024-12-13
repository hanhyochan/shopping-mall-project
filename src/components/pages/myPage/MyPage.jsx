import React, { useState } from 'react';
import OrderHistory from './OrderHistory';
import ShoppingCart from './ShoppingCart';
import Favorites from './Favorites';
import RecentlyViewedItems from './RecentlyViewedItems';
import MyPosts from './MyPosts';
import AccountSettings from './AccountSettings';

const MyPage = () => {
    const [myPageView, setMyPageView] = useState('')

    const RenderPageView = () => {
        switch (myPageView) {
            case 'orderHistory':
                return <OrderHistory />;
            case 'shoppingCart':
                return <ShoppingCart />;
            case 'favorites':
                return <Favorites />;
            case 'recentlyViewedItems':
                return <RecentlyViewedItems />;
            case 'myPosts':
                return <MyPosts />;
            case 'accountSettings':
                return <AccountSettings />;
            default:
                return <OrderHistory />;
        }
    };

    return (
        <div className='flex justify-between'>
            <div className='h-[500px] w-[15%] border border-black flex justify-center pt-[50px]'>
                <div className='flex flex-col gap-[20px] text-sm'>
                    <h1 className='text-base font-bold'>나의 쇼핑정보</h1>
                    <span onClick={() => setMyPageView('orderHistory')}>주문내역</span>
                    <span onClick={() => setMyPageView('shoppingCart')}>장바구니</span>
                    <span onClick={() => setMyPageView('favorites')}>관심상품</span>
                    <span onClick={() => setMyPageView('recentlyViewedItems')}>최근본상품</span>
                    <span onClick={() => setMyPageView('myPosts')}>나의 게시글보기</span>
                    <span onClick={() => setMyPageView('accountSettings')}>회원정보변경</span>
                </div>
            </div>

            <div className='h-[500px] w-[80%] border border-black flex'>
                <RenderPageView />
            </div>
        </div>
    );
};

export default MyPage;