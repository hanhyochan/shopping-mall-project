import React from 'react';

const ProductSizes = ({ data = [] }) => {
    const colors = data.map((el) => {
        if (el === "XS") {
            return <div className="flex items-center justify-center w-8 h-8 text-sm border border-gray-300 rounded-md ">XS</div>
        } else if (el === "S") {
            return <div className="flex items-center justify-center w-8 h-8 text-sm border border-gray-300 rounded-md ">S</div>
        } else if (el === "M") {
            return <div className="flex items-center justify-center w-8 h-8 text-sm border border-gray-300 rounded-md ">M</div>
        } else if (el === "L") {
            return <div className="flex items-center justify-center w-8 h-8 text-sm border border-gray-300 rounded-md ">L</div>
        } else if (el === "XL") {
            return <div className="flex items-center justify-center w-8 h-8 text-sm border border-gray-300 rounded-md ">XL</div>
        } else if (el === "free") {
            return <div className="flex items-center justify-center w-8 h-8 text-sm border border-gray-300 rounded-md ">free</div>
        }
    })
    return colors;
};

export default ProductSizes;