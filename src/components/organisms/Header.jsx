import Logo from "../atoms/Logo";
import {Link} from "react-router-dom";
const Header = () => {
    const navItems = [
        {path: "/login", text: "로그인"},
        {path: "/signup", text: "회원가입"},
        {path: "/cart", text: "장바구니"},
        {path: "/Mypage", text: "마이페이지"},
        {path: "/board", text: "게시판"},
    ];

    return (
        <header className="flex justify-between py-2 px-4 items-center md:w-4/5 xl:w-9/10 mx-auto">
            <Link
                to="/"
                className="cursor-pointer"
            >
                <Logo />
            </Link>
            <nav>
                <ul className="flex gap-5 text-sm">
                    {navItems.map(({path, text}) => (
                        <li key={path}>
                            <Link
                                to={path}
                                className="cursor-pointer"
                            >
                                {text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
