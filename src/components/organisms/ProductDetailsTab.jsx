import React, {useState} from "react";
import ProductInfo from "../ProductInfo";
import ProductReview from "../ProductReview";
import ProductQnA from "../ProductQnA";

const RenderContent = ({tabView}) => {
    const renderSwitch = () => {
        switch (tabView) {
            case "productInfo":
                return <ProductInfo />;
            case "productReview":
                return <ProductReview />;
            case "productQnA":
                return <ProductQnA />;
            default:
                return null;
        }
    };
    return <>{renderSwitch()}</>;
};

const ProductDetailsTab = () => {
    const [tabView, setTabView] = useState("productInfo");

    const handleClick = value => {
        setTabView(value);
    };

    return (
        <>
            <div className="grid w-full grid-cols-3 grid-rows-1 mt-24 text-lg text-center h-14">
                <button
                    onClick={() => handleClick("productInfo")}
                    className={`flex items-center justify-center border ${tabView === "productInfo" ? "border-black border-2 border-b-0" : "border-b-2 border-gray-300 border-b-black"}`}
                >
                    상세설명
                </button>

                <button
                    onClick={() => handleClick("productReview")}
                    className={`flex items-center justify-center border ${tabView === "productReview" ? "border-black border-2 border-b-0" : "border-b-2 border-gray-300 border-b-black"}`}
                >
                    상품리뷰
                </button>
                <button
                    onClick={() => handleClick("productQnA")}
                    className={`flex items-center justify-center border ${tabView === "productQnA" ? "border-black border-2 border-b-0" : "border-b-2 border-gray-300 border-b-black"}`}
                >
                    상품문의
                </button>
            </div>
            <div className="flex flex-col items-center justify-center py-24">
                <RenderContent tabView={tabView} />
            </div>
        </>
    );
};

export default ProductDetailsTab;
