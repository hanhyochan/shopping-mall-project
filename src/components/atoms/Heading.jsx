const Heading = ({text, className = "", type = "h2"}) => {
    const Tag = type;
    return <Tag className={`text-3xl ${className}`}>{text}</Tag>;
};

export default Heading;
