import { SearchOutlined, MenuOutlined } from "@ant-design/icons";
import { Menu, Input, Button } from "antd";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getAllProduct } from "../../api/productApi";

const CategoryNav = () => {
    // 서브 카테고리 페이지 이동
    const navigate = useNavigate();
    const navigateSub = e => {
        const Subcategory = e.target.textContent;
        navigate(`category?subcategory=${Subcategory}`);
    };
    // // 메뉴
    // const items = [
    //     {
    //         label: "의류",
    //         key: "SubMenu1",
    //         children: [
    //             {
    //                 label: (
    //                     <span
    //                         onClick={e => {
    //                             navigateSub(e);
    //                         }}
    //                     >
    //                         beauty
    //                     </span>
    //                 ),
    //                 key: "SubMenu1:1",
    //             },
    //             {
    //                 label: (
    //                     <span
    //                         onClick={e => {
    //                             navigateSub(e);
    //                         }}
    //                     >
    //                         groceries
    //                     </span>
    //                 ),
    //                 key: "SubMenu1:2",
    //             },
    //             {
    //                 label: (
    //                     <span
    //                         onClick={e => {
    //                             navigateSub(e);
    //                         }}
    //                     >
    //                         furniture
    //                     </span>
    //                 ),
    //                 key: "SubMenu1:3",
    //             },
    //             {
    //                 label: (
    //                     <span
    //                         onClick={e => {
    //                             navigateSub(e);
    //                         }}
    //                     >
    //                         fragrances
    //                     </span>
    //                 ),
    //                 key: "SubMenu1:4",
    //             },
    //         ],
    //     },
    //     {
    //         label: "운동복",
    //         key: "SubMenu2",
    //         children: [
    //             {
    //                 label: "Option 1",
    //                 key: "SubMenu2:1",
    //             },
    //             {
    //                 label: "Option 2",
    //                 key: "SubMenu2:2",
    //             },
    //         ],
    //     },
    //     {
    //         label: "신발",
    //         key: "SubMenu3",
    //         children: [
    //             {
    //                 label: "Option 1",
    //                 key: "SubMenu3:1",
    //             },
    //             {
    //                 label: "Option 2",
    //                 key: "SubMenu3:2",
    //             },
    //         ],
    //     },
    //     {
    //         label: "악세서리",
    //         key: "SubMenu4",
    //         children: [
    //             {
    //                 label: "Option 1",
    //                 key: "SubMenu4:1",
    //             },
    //             {
    //                 label: "Option 2",
    //                 key: "SubMenu4:2",
    //             },
    //         ],
    //     },
    //     {
    //         label: "SALE",
    //         key: "SubMenu5",
    //         children: [
    //             {
    //                 label: "Option 1",
    //                 key: "SubMenu5:1",
    //             },
    //             {
    //                 label: "Option 2",
    //                 key: "SubMenu5:2",
    //             },
    //         ],
    //     },
    // ];

    const [pro_category, setProCategory] = useState([])

    useEffect(() => {
        const fetchAllProduct = async () => {
            const AllProductData = await getAllProduct();
            setProCategory(AllProductData);
        };
        fetchAllProduct();
    }, []);
    const categoryName = Object.keys(pro_category)

    const items = [
        {
            label: "의류",
            key: "SubMenu1",
            children: [
                {
                    label: (
                        <span
                            onClick={e => {
                                navigateSub(e);
                            }}
                        >
                            beauty
                        </span>
                    ),
                    key: "SubMenu1:1",
                }
            ]
        }
    ];

    // 스크롤
    const targetRef = useRef(null);
    const handleScroll = () => {
        const nav = targetRef.current;
        if (window.scrollY > nav.offsetHeight) {
            nav.classList.add("shadow-md");
        } else {
            nav.classList.remove("shadow-md");
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

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
                    <Button className="text-base underline border-0">Best 10</Button>
                </div>

                <div className="static flex justify-center flex-1 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    <Menu
                        mode="horizontal"
                        items={items}
                        className="!border-0 min-w-[330px] text-base"
                    />
                </div>

                <div className="flex items-center gap-2 sm:w-[250px] w-full">
                    <Input
                        placeholder="상품을 검색해보세요"
                        className="w-full text-base"
                    />
                    <Button
                        className="border-0"
                        icon={<SearchOutlined />}
                    />
                </div>
            </div>
        </div>
        // <div
        //     className="sticky top-0 z-50 w-full py-3 mx-auto bg-white"
        //     ref={targetRef}
        // >
        //     <div className="flex items-center flex-col sm:flex-row justify-between gap-4 relative md:w-[80vw] xl: w-[90vw] mx-auto">
        //         <div className="hidden md:flex">
        //             <Button
        //                 className="border-0"
        //                 icon={<MenuOutlined />}
        //             />
        //             <Button className="text-base underline border-0">Best 10</Button>
        //         </div>

        //         <div className="static flex justify-center flex-1 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
        //             <Menu
        //                 mode="horizontal"
        //                 items={items}
        //                 className="!border-0 min-w-[330px] text-base"
        //             />
        //         </div>

        //         <div className="flex items-center gap-2 sm:w-[250px] w-full">
        //             <Input
        //                 placeholder="상품을 검색해보세요"
        //                 className="w-full text-base"
        //             />
        //             <Button
        //                 className="border-0"
        //                 icon={<SearchOutlined />}
        //             />
        //         </div>
        //     </div>
        // </div>
    );
};

export default CategoryNav;
