const ProductColors = ({data = [], onColorChange, isButton = true}) => {
    const colorMap = {
        white: "bg-white border border-gray-300",
        ivory: "border border-gray-300 bg-[#fffff0]",
        bagie: "bg-[#f5dcb7]",
        pink: "bg-[#ffcce7]",
        gray: "bg-[#d0d0d0]",
        black: "bg-[#494949]",
        charcoal: "bg-[#36454f]",
        mocha: "bg-[#946038]",
        brown: "bg-[#b76100]",
        skyblue: "bg-[#a6e1fc]",
        purple: "bg-[#ca91d8]",
        navy: "bg-[#000080]",
        sora: "bg-[#7cb5ec]",
        wine: "bg-[#aa3539]",
    };

    return (
        <div className={`flex justify-center items-center gap-3 ${!isButton ? "!gap-1" : ""}`}>
            {data.map((el, index) => {
                const colorClass = colorMap[el];
                return colorClass ? (
                    <div key={index}>
                        {isButton ? (
                            <button
                                className={`${colorClass} rounded-full w-7 h-7`}
                                aria-label={`Color: ${el}`}
                                data-color={el}
                                onClick={() => {
                                    onColorChange(el);
                                }}
                            />
                        ) : (
                            <span
                                className={`${colorClass} w-4 h-1 flex`}
                                aria-label={`Color: ${el}`}
                            />
                        )}
                    </div>
                ) : null;
            })}
        </div>
    );
};

export default ProductColors;
