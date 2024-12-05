import Logo from "../atoms/Logo";
import Button from "../atoms/Button";
import {useNavigate} from "react-router-dom";

const TopNav = () => {
    const navigate = useNavigate();
    const handleLogoClick = () => {
        navigate("/");
    };
    const handleButtonClick = path => {
        navigate(path);
    };
    return (
        <>
            <div className="flex justify-between py-[10px] items-center md:w-[80vw] xl: w-[90vw]">
                <Logo onClick={handleLogoClick} />
                <div className="flex gap-[20px] text-sm">
                    <Button
                        antDesign={false}
                        onClick={() => handleButtonClick("/login")}
                        text="로그인"
                    />
                    <Button
                        antDesign={false}
                        onClick={() => handleButtonClick("/signup")}
                        text="회원가입"
                    />
                    <Button
                        antDesign={false}
                        onClick={() => handleButtonClick("/cart")}
                        text="장바구니"
                    />
                    <Button
                        antDesign={false}
                        onClick={() => handleButtonClick("/Mypage")}
                        text="마이페이지"
                    />
                    <Button
                        antDesign={false}
                        onClick={() => handleButtonClick("/board")}
                        text="게시판"
                    />
                </div>
            </div>
        </>
    );
};
export default TopNav;
