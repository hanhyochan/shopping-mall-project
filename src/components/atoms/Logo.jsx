const Logo = ({onClick}) => {
    return (
        <h1
            onClick={onClick}
            className="text-2xl cursor-pointer"
        >
            MyApp
        </h1>
    );
};

export default Logo;
