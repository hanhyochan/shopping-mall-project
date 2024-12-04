const Logo = ({onClick}) => {
    return (
        <span
            onClick={onClick}
            className="text-2xl cursor-pointer"
        >
            MyApp
        </span>
    );
};

export default Logo;
