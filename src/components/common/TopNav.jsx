import React from "react";
import {useNavigate} from "react-router-dom";

const TopNav = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="flex justify-between py-[10px] items-center md:w-[80vw] xl: w-[90vw]">
                <span
                    onClick={() => navigate("/")}
                    className="text-2xl cursor-pointer"
                >
                    MyApp
                </span>
                <div className="flex gap-[20px] text-sm">
                    <button>로그인</button>
                    <button>회원가입</button>
                    <button>장바구니</button>
                    <button>마이페이지</button>
                    <button>게시판</button>
                </div>
            </div>
        </>
    );
};
export default TopNav;
