import { MenuOutlined } from "@ant-design/icons";
import Button from "../atoms/Button";
import SearchInput from "../molecules/SearchInput";
import { Menu } from "antd";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useAllProducts from "../../hooks/useAllProducts";

const CategoryNav = () => {
    const [proCategory, setProCategory] = useState([]);
    const navigate = useNavigate();
    const navigateSub = subCategory => {
        navigate(`category?subcategory=${subCategory}`);
    };
    const { allProductsData, isProductsLoading, productsError } = useAllProducts();

    useEffect(() => {
        if (allProductsData) {
            setProCategory(allProductsData);
        }
    }, [allProductsData])

    const uniqueCategories = [...new Set(proCategory.map(item => item.category))];

    const items = uniqueCategories.map((category, index) => {
        const filteredItems = proCategory.filter(item => item.category === category);
        const uniqueCategoryTypes = [...new Set(filteredItems.map(item => item.type))];

        return {
            label: category.toUpperCase(),
            key: `SubMenu${index}`,
            children: uniqueCategoryTypes.map((type, childIndex) => ({
                label: <span>{type}</span>,
                key: `${category}-${type}-${childIndex}`,
                onClick: () => navigateSub(type),
            })),
        };
    });

    const targetRef = useRef(null);
    const handleScroll = () => {
        const nav = targetRef.current;
        if (!nav) return;
        if (window.scrollY > nav.offsetHeight) {
            nav.classList.add("shadow-md");
        } else {
            nav.classList.remove("shadow-md");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, [targetRef]);

    if (isProductsLoading) return <div>로딩중입니다</div>;
    if (productsError) return <div>Error fetching data</div>;

    return (
        <div
            className="sticky top-0 z-50 w-full py-3 mx-auto bg-white"
            ref={targetRef}
        >
            <div className="flex items-center flex-col sm:flex-row justify-between gap-4 relative md:w-[80vw] xl: w-[90vw] mx-auto">
                <div className="hidden md:flex">
                    <Button
                        className="border-0"
                        icon={<MenuOutlined />}
                    />
                    <Button
                        className="text-base underline border-0"
                        text="Best 10"
                    />
                </div>

                <div className="static flex justify-center flex-1 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    <Menu
                        mode="horizontal"
                        items={items}
                        className="!border-0 text-base min-w-[400px]"
                    />
                </div>

                <div className="flex items-center gap-2 sm:w-[250px] w-full">
                    <SearchInput placeholder="상품을 검색해보세요" />
                </div>
            </div>
        </div>
    );
};

export default CategoryNav;
