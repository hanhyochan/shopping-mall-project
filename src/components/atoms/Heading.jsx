const Heading = ({text, className = ""}) => {
    return <h2 className={`text-3xl ${className}`}>{text}</h2>;
};

export default Heading;
