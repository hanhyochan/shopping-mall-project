import React from 'react';

const ProductColors = ({ data = [] }) => {
    const colors = data.map((el) => {
        if (el === "white") {
            return <div className="bg-white border border-gray-300 rounded-full w-7 h-7"></div>
        } else if (el === "ivory") {
            return <div className="border border-gray-300 rounded-full bg-[#fffff0] w-7 h-7"></div>
        } else if (el === "bagie") {
            return <div className="rounded-full bg-[#f5dcb7] w-7 h-7"></div>
        } else if (el === "pink") {
            return <div className="rounded-full bg-[#ffcce7] w-7 h-7"></div>
        } else if (el === "gray") {
            return <div className="rounded-full bg-[#d0d0d0] w-7 h-7"></div>
        } else if (el === "black") {
            return <div className="rounded-full bg-[#494949] w-7 h-7"></div>
        } else if (el === "charcoal") {
            return <div className="rounded-full bg-[#36454f] w-7 h-7"></div>
        } else if (el === "mocha") {
            return <div className="rounded-full bg-[#946038] w-7 h-7"></div>
        } else if (el === "brown") {
            return <div className="rounded-full bg-[#b76100] w-7 h-7"></div>
        } else if (el === "skyblue") {
            return <div className="rounded-full bg-[#a6e1fc] w-7 h-7"></div>
        } else if (el === "purple") {
            return <div className="rounded-full bg-[#ca91d8] w-7 h-7"></div>
        } else if (el === "navy") {
            return <div className="rounded-full bg-[#000080] w-7 h-7"></div>
        } else if (el === "sora") {
            return <div className="rounded-full bg-[#7cb5ec] w-7 h-7"></div>
        } else if (el === "wine") {
            return <div className="rounded-full bg-[#aa3539] w-7 h-7"></div>
        }
    })
    return colors;
};

export default ProductColors;