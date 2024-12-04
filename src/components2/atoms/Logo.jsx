import {useNavigate} from "react-router-dom";
const Logo = () => {
    const navigate = useNavigate();
    return (
        <span
            onClick={() => navigate("/")}
            className="text-2xl cursor-pointer"
        >
            MyApp
        </span>
    );
};

export default Logo;
