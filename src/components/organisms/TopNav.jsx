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
                    >
                        로그인
                    </Button>
                    <Button
                        antDesign={false}
                        onClick={() => handleButtonClick("/signup")}
                    >
                        회원가입
                    </Button>
                    <Button
                        antDesign={false}
                        onClick={() => handleButtonClick("/cart")}
                    >
                        장바구니
                    </Button>
                    <Button
                        antDesign={false}
                        onClick={() => handleButtonClick("/Mypage")}
                    >
                        마이페이지
                    </Button>
                    <Button
                        antDesign={false}
                        onClick={() => handleButtonClick("/board")}
                    >
                        게시판
                    </Button>
                </div>
            </div>
        </>
    );
};
export default TopNav;
