import { MenuOutlined } from "@ant-design/icons";
import Button from "../atoms/Button";
import SearchInput from "../molecules/SearchInput";
import { Menu } from "antd";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useQueries } from "@tanstack/react-query";
import { getAllProduct } from "../../api/productApi";

const CategoryNav = () => {
    const [proCategory, setProCategory] = useState([]);
    const navigate = useNavigate();
    const navigateSub = subCategory => {
        navigate(`category?subcategory=${subCategory}`);
    };

    const [categoryQuery] = useQueries({
        queries: [
            {
                queryKey: ["categoryNav"],
                queryFn: () => getAllProduct(),
            }
        ]
    })

    const { data: categoryData, isLoading: isProductLoading, error: productError } = categoryQuery;

    useEffect(() => {
        if (categoryData) {
            setProCategory(categoryData);
        }
    }, [categoryData])

    const uniqueCategories = [...new Set(proCategory.map(item => item.category))];

    // 카테고리 키워드만 가져온것
    const items = uniqueCategories.map((category, index) => {
        // 카테고리에 맞춰서 모은 것들
        const filteredItems = proCategory.filter(item => item.category === category);
        // 카테고리에 맞춰 모은 것들 타입만 가져온거거
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

    // 스크롤
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

    if (isProductLoading) return <div>로딩중입니다</div>;

    if (productError) return <div>Error fetching data</div>;


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
