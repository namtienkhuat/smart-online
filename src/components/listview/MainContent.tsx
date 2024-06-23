import Image from "next/image";
const cellphones = [
    {
        id: 1,
        title: "Canon Cmera EOS 2000, Black 10x zoom",
        discountPrice: "$998.00",
        originalPrice: "$1128.00",
        rating: "7.5",
        orders: "154",
        ship: "Free Shipping",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        image: "/cellphones/1.jpg",
    },
    {
        id: 2,
        title: "GoPro HERO6 4K Action Camera - Black",
        discountPrice: "$998.00",
        originalPrice: "",
        rating: "7.5",
        orders: "154",
        ship: "Free Shipping",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        image: "/cellphones/2.jpg",
    },
    {
        id: 3,
        title: "Canon Cmera EOS 2000, Black 10x zoom",
        discountPrice: "$998.00",
        originalPrice: "",
        rating: "7.5",
        orders: "154",
        ship: "Free Shipping",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        image: "/cellphones/3.jpg",
    },
    {
        id: 4,
        title: "Canon Cmera EOS 2000, Black 10x zoom",
        discountPrice: "$998.00",
        originalPrice: "$1128.00",
        rating: "7.5",
        orders: "154",
        ship: "Free Shipping",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        image: "/cellphones/4.jpg",
    },
    {
        id: 5,
        title: "Canon Cmera EOS 2000, Black 10x zoom",
        discountPrice: "$998.00",
        originalPrice: "",
        rating: "7.5",
        orders: "154",
        ship: "Free Shipping",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        image: "/cellphones/5.jpg",
    },
    {
        id: 6,
        title: "Canon Cmera EOS 2000, Black 10x zoom",
        discountPrice: "$998.00",
        originalPrice: "",
        rating: "7.5",
        orders: "154",
        ship: "Free Shipping",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        image: "/cellphones/6.jpg",
    },
];

export default function MainContent({
    result,
    features,
    brands,
    condition,
    ratings,
    listFilter,
    handleCategory,
    category,
    handleBrands,
    handleCondition,
    handleFeatures,
    handlePriceRange,
    handleRatings,
    handleClearAllFilter,
    handleClearDetail,
    handleCommon,
    listBrands,
    display,
    handleDisplay,
    handleFavorite,
    listFavorite,
    handleAddToCart,

    handleFocus,
    changePag,
    handleNext,
    handlePrevious,
    show,
    quantityShow,
    handleShow,
    handleSelectQuantity,
    selectQuantity,
    newArray,
}: any) {
    console.log("listFavorite in MainContent: ", listFavorite);
    return (
        <div className="grid grid-cols-[1fr_4fr] gap-x-[28px]">
            <div>
                {/* Category */}
                <div className="border-y border-solid border-[#DEE2E7]">
                    <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={handleCategory}
                    >
                        <h3 className="text-[#1C1C1C] font-semibold py-[15px]">
                            Category
                        </h3>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 8.29504L6 14.295L7.41 15.705L12 11.125L16.59 15.705L18 14.295L12 8.29504Z"
                                fill="#8B96A5"
                            />
                        </svg>
                    </div>
                    {category && (
                        <div className="flex flex-col text-[#505050] font-normal gap-y-[17px]">
                            <span className="pt-[9px]">Mobile accessory</span>
                            <span>Electronics</span>
                            <span>Smartphones </span>
                            <span>Laptops</span>
                            <span className="pb-[28px] text-[#0D6EFD]">
                                See all
                            </span>
                        </div>
                    )}
                </div>

                {/* Brands */}
                <div className="border-b border-solid border-[#DEE2E7]">
                    <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={handleBrands}
                    >
                        <h3 className="text-[#1C1C1C] font-semibold py-[15px]">
                            Brands
                        </h3>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 8.29504L6 14.295L7.41 15.705L12 11.125L16.59 15.705L18 14.295L12 8.29504Z"
                                fill="#8B96A5"
                            />
                        </svg>
                    </div>
                    {brands && (
                        <div>
                            {" "}
                            <div className="flex flex-col gap-y-[17px]">
                                {listBrands.map((item: any) => (
                                    <div key={item.id}>
                                        <input
                                            type="checkbox"
                                            value={item.brand}
                                            checked={listFilter.includes(
                                                item.brand
                                            )}
                                            onChange={(event) =>
                                                handleCommon(event, item.brand)
                                            }
                                        />
                                        <label className="pl-[13px]">
                                            {item.brand}
                                        </label>
                                    </div>
                                ))}

                                <span className="pb-[28px] text-[#0D6EFD]">
                                    See all
                                </span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Features */}
                <div className="border-b border-solid border-[#DEE2E7]">
                    <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={handleFeatures}
                    >
                        <h3 className="text-[#1C1C1C] font-semibold py-[15px]">
                            Features
                        </h3>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 8.29504L6 14.295L7.41 15.705L12 11.125L16.59 15.705L18 14.295L12 8.29504Z"
                                fill="#8B96A5"
                            />
                        </svg>
                    </div>
                    {features && (
                        <div>
                            {" "}
                            <div className="flex flex-col gap-y-[17px]">
                                <div>
                                    <input type="checkbox" name="male" />
                                    <label htmlFor="male" className="pl-[13px]">
                                        Metallic
                                    </label>
                                </div>
                                <div>
                                    <input type="checkbox" name="female" />
                                    <label
                                        htmlFor="female"
                                        className="pl-[13px]"
                                    >
                                        Plastic cover
                                    </label>
                                </div>
                                <div>
                                    <input type="checkbox" name="male" />
                                    <label htmlFor="male" className="pl-[13px]">
                                        8GB Ram
                                    </label>
                                </div>
                                <div>
                                    <input type="checkbox" name="female" />
                                    <label
                                        htmlFor="female"
                                        className="pl-[13px]"
                                    >
                                        Super power
                                    </label>
                                </div>
                                <div>
                                    <input type="checkbox" name="female" />
                                    <label
                                        htmlFor="female"
                                        className="pl-[13px]"
                                    >
                                        Large Memory
                                    </label>
                                </div>
                                <span className="pb-[28px] text-[#0D6EFD]">
                                    See all
                                </span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Price range */}
                <div className="border-b border-solid border-[#DEE2E7]">
                    <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={handlePriceRange}
                    >
                        <h3 className="text-[#1C1C1C] font-semibold py-[15px]">
                            Price range
                        </h3>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 8.29504L6 14.295L7.41 15.705L12 11.125L16.59 15.705L18 14.295L12 8.29504Z"
                                fill="#8B96A5"
                            />
                        </svg>
                    </div>
                </div>

                {/* Condition */}
                <div className="border-b border-solid border-[#DEE2E7]">
                    <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={handleCondition}
                    >
                        <h3 className="text-[#1C1C1C] font-semibold py-[15px]">
                            Condition
                        </h3>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 8.29504L6 14.295L7.41 15.705L12 11.125L16.59 15.705L18 14.295L12 8.29504Z"
                                fill="#8B96A5"
                            />
                        </svg>
                    </div>
                    {condition && (
                        <div>
                            {" "}
                            <div className="flex flex-col gap-y-[17px]">
                                <div>
                                    <input type="radio" name="male" />
                                    <label htmlFor="male" className="pl-[13px]">
                                        Any
                                    </label>
                                </div>
                                <div>
                                    <input type="radio" name="female" />
                                    <label
                                        htmlFor="female"
                                        className="pl-[13px]"
                                    >
                                        Refurbished
                                    </label>
                                </div>
                                <div>
                                    <input type="radio" name="male" />
                                    <label htmlFor="male" className="pl-[13px]">
                                        Brand new
                                    </label>
                                </div>
                                <div className="pb-[28px]">
                                    <input type="radio" name="female" />
                                    <label
                                        htmlFor="female"
                                        className="pl-[13px]"
                                    >
                                        Old items
                                    </label>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Ratings */}
                <div className="">
                    <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={handleRatings}
                    >
                        <h3 className="text-[#1C1C1C] font-semibold py-[15px]">
                            Ratings
                        </h3>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 8.29504L6 14.295L7.41 15.705L12 11.125L16.59 15.705L18 14.295L12 8.29504Z"
                                fill="#8B96A5"
                            />
                        </svg>
                    </div>
                    {ratings && (
                        <div>
                            {" "}
                            <div className="flex flex-col gap-y-[17px]">
                                <div className="flex gap-x-[13px] ">
                                    <input type="checkbox" name="male" />
                                    <svg
                                        width="93"
                                        height="18"
                                        viewBox="0 0 93 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M83.7 14.4663L89.4474 18L87.9222 11.34L93 6.85895L86.3133 6.28105L83.7 0L81.0867 6.28105L74.4 6.85895L79.4778 11.34L77.9526 18L83.7 14.4663Z"
                                            fill="#FF9017"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M65.1 14.4663L70.8475 18L69.3223 11.34L74.4001 6.85895L67.7134 6.28105L65.1 0L62.4867 6.28105L55.8 6.85895L60.8778 11.34L59.3526 18L65.1 14.4663Z"
                                            fill="#FF9017"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M46.5 14.4663L52.2474 18L50.7221 11.34L55.7999 6.85895L49.1133 6.28105L46.5 0L43.8867 6.28105L37.2 6.85895L42.2778 11.34L40.7526 18L46.5 14.4663Z"
                                            fill="#FF9017"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M27.9 14.4663L33.6474 18L32.1222 11.34L37.2 6.85895L30.5133 6.28105L27.9 0L25.2867 6.28105L18.6 6.85895L23.6778 11.34L22.1526 18L27.9 14.4663Z"
                                            fill="#FF9017"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M9.3 14.4663L15.0474 18L13.5222 11.34L18.6 6.85895L11.9133 6.28105L9.3 0L6.6867 6.28105L0 6.85895L5.0778 11.34L3.5526 18L9.3 14.4663Z"
                                            fill="#FF9017"
                                        />
                                    </svg>
                                </div>
                                <div className="flex gap-x-[13px] ">
                                    <input type="checkbox" name="female" />
                                    <svg
                                        width="93"
                                        height="18"
                                        viewBox="0 0 93 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M83.7 14.4663L89.4474 18L87.9222 11.34L93 6.85895L86.3133 6.28105L83.7 0L81.0867 6.28105L74.4 6.85895L79.4778 11.34L77.9526 18L83.7 14.4663Z"
                                            fill="#BDC4CD"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M65.1 14.4663L70.8475 18L69.3223 11.34L74.4001 6.85895L67.7134 6.28105L65.1 0L62.4867 6.28105L55.8 6.85895L60.8778 11.34L59.3526 18L65.1 14.4663Z"
                                            fill="#FF9017"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M46.5 14.4663L52.2474 18L50.7221 11.34L55.7999 6.85895L49.1133 6.28105L46.5 0L43.8867 6.28105L37.2 6.85895L42.2778 11.34L40.7526 18L46.5 14.4663Z"
                                            fill="#FF9017"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M27.9 14.4663L33.6474 18L32.1222 11.34L37.2 6.85895L30.5133 6.28105L27.9 0L25.2867 6.28105L18.6 6.85895L23.6778 11.34L22.1526 18L27.9 14.4663Z"
                                            fill="#FF9017"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M9.3 14.4663L15.0474 18L13.5222 11.34L18.6 6.85895L11.9133 6.28105L9.3 0L6.6867 6.28105L0 6.85895L5.0778 11.34L3.5526 18L9.3 14.4663Z"
                                            fill="#FF9017"
                                        />
                                    </svg>
                                </div>
                                <div className="flex gap-x-[13px] ">
                                    <input type="checkbox" name="male" />
                                    <svg
                                        width="93"
                                        height="18"
                                        viewBox="0 0 93 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M83.7 14.4663L89.4474 18L87.9222 11.34L93 6.85895L86.3133 6.28105L83.7 0L81.0867 6.28105L74.4 6.85895L79.4778 11.34L77.9526 18L83.7 14.4663Z"
                                            fill="#BDC4CD"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M65.1 14.4663L70.8475 18L69.3223 11.34L74.4001 6.85895L67.7134 6.28105L65.1 0L62.4867 6.28105L55.8 6.85895L60.8778 11.34L59.3526 18L65.1 14.4663Z"
                                            fill="#BDC4CD"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M46.5 14.4663L52.2474 18L50.7221 11.34L55.7999 6.85895L49.1133 6.28105L46.5 0L43.8867 6.28105L37.2 6.85895L42.2778 11.34L40.7526 18L46.5 14.4663Z"
                                            fill="#FF9017"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M27.9 14.4663L33.6474 18L32.1222 11.34L37.2 6.85895L30.5133 6.28105L27.9 0L25.2867 6.28105L18.6 6.85895L23.6778 11.34L22.1526 18L27.9 14.4663Z"
                                            fill="#FF9017"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M9.3 14.4663L15.0474 18L13.5222 11.34L18.6 6.85895L11.9133 6.28105L9.3 0L6.6867 6.28105L0 6.85895L5.0778 11.34L3.5526 18L9.3 14.4663Z"
                                            fill="#FF9017"
                                        />
                                    </svg>
                                </div>
                                <div className="flex gap-x-[13px] pb-[185px]">
                                    <input type="checkbox" name="female" />
                                    <svg
                                        width="93"
                                        height="18"
                                        viewBox="0 0 93 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M83.7 14.4663L89.4474 18L87.9222 11.34L93 6.85895L86.3133 6.28105L83.7 0L81.0867 6.28105L74.4 6.85895L79.4778 11.34L77.9526 18L83.7 14.4663Z"
                                            fill="#BDC4CD"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M65.1 14.4663L70.8475 18L69.3223 11.34L74.4001 6.85895L67.7134 6.28105L65.1 0L62.4867 6.28105L55.8 6.85895L60.8778 11.34L59.3526 18L65.1 14.4663Z"
                                            fill="#BDC4CD"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M46.5 14.4663L52.2474 18L50.7221 11.34L55.7999 6.85895L49.1133 6.28105L46.5 0L43.8867 6.28105L37.2 6.85895L42.2778 11.34L40.7526 18L46.5 14.4663Z"
                                            fill="#BDC4CD"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M27.9 14.4663L33.6474 18L32.1222 11.34L37.2 6.85895L30.5133 6.28105L27.9 0L25.2867 6.28105L18.6 6.85895L23.6778 11.34L22.1526 18L27.9 14.4663Z"
                                            fill="#FF9017"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M9.3 14.4663L15.0474 18L13.5222 11.34L18.6 6.85895L11.9133 6.28105L9.3 0L6.6867 6.28105L0 6.85895L5.0778 11.34L3.5526 18L9.3 14.4663Z"
                                            fill="#FF9017"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div>
                <div className="flex justify-between items-center py-[11px] pl-[19px] pr-[10px] border-solid border rounded-[6px] border-[#DEE2E7]">
                    <h3>
                        12,911 items in{" "}
                        <span className="font-semibold text-[#1C1C1C]">
                            Mobile accessory
                        </span>
                    </h3>
                    <div className="flex gap-x-[10px] items-center">
                        <div>
                            <input type="checkbox" name="male" />
                            <label
                                htmlFor="male"
                                className="pl-[13px] py-[8.5px] pr-[6px]"
                            >
                                Verified only
                            </label>
                        </div>
                        <div className="flex items-center gap-x-[62px] p-[10px] border-solid border rounded-[6px] border-[#DEE2E7]">
                            <button>Featured</button>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M16.59 8.29504L12 12.875L7.41 8.29504L6 9.70504L12 15.705L18 9.70504L16.59 8.29504Z"
                                    fill="#8B96A5"
                                />
                            </svg>
                        </div>
                        <div className="flex items-center border-solid border rounded-[6px] border-[#DEE2E7] ">
                            <div
                                className={
                                    display == "flex"
                                        ? "px-[7px] py-[10px] bg-[#EFF2F4] "
                                        : "px-[7px] "
                                }
                                onClick={() => handleDisplay("flex")}
                            >
                                {" "}
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M11 3H3V11H11V3Z" fill="#1C1C1C" />
                                    <path
                                        d="M11 13H3V21H11V13Z"
                                        fill="#1C1C1C"
                                    />
                                    <path
                                        d="M21 3H13V11H21V3Z"
                                        fill="#1C1C1C"
                                    />
                                    <path
                                        d="M21 13H13V21H21V13Z"
                                        fill="#1C1C1C"
                                    />
                                </svg>
                            </div>
                            <div
                                className={
                                    display == "grid"
                                        ? "bg-[#EFF2F4] py-[10px] px-[7px] rounded-tr-[6px] rounded-br-[6px] border-l-2 border-solid border-[#DEE2E7]"
                                        : "py-[10px] px-[7px] rounded-tr-[6px] rounded-br-[6px] border-l-2 border-solid border-[#DEE2E7]"
                                }
                                onClick={() => handleDisplay("grid")}
                            >
                                {" "}
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M21 8H3V4H21V8ZM21 10H3V14H21V10ZM21 16H3V20H21V16Z"
                                        fill="#1C1C1C"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex pt-[20px] gap-x-[8px] items-center text-[#505050]">
                    {listFilter.map((item: any) => (
                        <div
                            key={item}
                            className="flex items-center gap-x-[9px] border border-solid border-[#0D6EFD] pr-[6px] pl-[10px] py-[6.5px] rounded-[6px]"
                        >
                            <span>{item}</span>
                            <div onClick={() => handleClearDetail(item)}>
                                {" "}
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M15.8334 5.34163L14.6584 4.16663L10.0001 8.82496L5.34175 4.16663L4.16675 5.34163L8.82508 9.99996L4.16675 14.6583L5.34175 15.8333L10.0001 11.175L14.6584 15.8333L15.8334 14.6583L11.1751 9.99996L15.8334 5.34163Z"
                                        fill="#8B96A5"
                                    />
                                </svg>
                            </div>
                        </div>
                    ))}

                    {listFilter.length > 0 && (
                        <h3
                            className="font-normal text-primary p-[5px] cursor-pointer"
                            onClick={handleClearAllFilter}
                        >
                            Clear all filter
                        </h3>
                    )}
                </div>

                {/* Filter */}
                {display == "grid" && result.length != 0 ? (
                    <div className="grid grid-cols-3 grid-rows-3 gap-[20px] pt-[20px]">
                        {result.map((item: any) => (
                            <div
                                key={item.id}
                                className=" border border-solid border-[#DEE2E7] rounded-[6px] w-full"
                            >
                                <Image
                                    src={item.image}
                                    alt=""
                                    width={230}
                                    height={230}
                                    className="mx-auto my-[15px]"
                                />
                                <div className="py-[17px] pl-[20px] border-t border-solid border-[#DEE2E7] ">
                                    <div className="flex justify-between pr-[20px]">
                                        <div className="flex flex-col gap-y-[9px]">
                                            <div className="flex items-center gap-x-[8px]">
                                                <span className="font-semibold text-[#1C1C1C]">
                                                    {item.discountPrice}
                                                </span>
                                                <span className="font-normal text-[#8B96A5] line-through">
                                                    {item.originalPrice}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-x-[6px]">
                                                <svg
                                                    width="80"
                                                    height="15"
                                                    viewBox="0 0 80 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                        d="M72 12.0553L76.944 15L75.632 9.45L80 5.71579L74.248 5.23421L72 0L69.752 5.23421L64 5.71579L68.368 9.45L67.056 15L72 12.0553Z"
                                                        fill="#D5CDC5"
                                                    />
                                                    <path
                                                        fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                        d="M56 12.0553L60.944 15L59.632 9.45L64 5.71579L58.248 5.23421L56 0L53.752 5.23421L48 5.71579L52.368 9.45L51.056 15L56 12.0553Z"
                                                        fill="#FF9017"
                                                    />
                                                    <path
                                                        fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                        d="M40 12.0553L44.944 15L43.632 9.45L48 5.71579L42.248 5.23421L40 0L37.752 5.23421L32 5.71579L36.368 9.45L35.056 15L40 12.0553Z"
                                                        fill="#FF9017"
                                                    />
                                                    <path
                                                        fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                        d="M24 12.0553L28.944 15L27.632 9.45L32 5.71579L26.248 5.23421L24 0L21.752 5.23421L16 5.71579L20.368 9.45L19.056 15L24 12.0553Z"
                                                        fill="#FF9017"
                                                    />
                                                    <path
                                                        fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                        d="M8 12.0553L12.944 15L11.632 9.45L16 5.71579L10.248 5.23421L8 0L5.752 5.23421L0 5.71579L4.368 9.45L3.056 15L8 12.0553Z"
                                                        fill="#FF9017"
                                                    />
                                                </svg>
                                                <h3 className="text-[#FF9017] font-normal">
                                                    {item.rating}
                                                </h3>
                                            </div>
                                        </div>
                                        <svg
                                            width="44"
                                            height="44"
                                            viewBox="0 0 44 44"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mt-[2px]"
                                            onClick={() => handleFavorite(item)}
                                        >
                                            <g filter="url(#filter0_d_239_5304)">
                                                <rect
                                                    x="2"
                                                    y="1"
                                                    width="40"
                                                    height="40"
                                                    rx="6"
                                                    fill={
                                                        listFavorite.find(
                                                            (element: any) =>
                                                                element.id ==
                                                                item.id
                                                        )
                                                            ? "#FF69B4"
                                                            : "white"
                                                    }
                                                />
                                                <rect
                                                    x="2.5"
                                                    y="1.5"
                                                    width="39"
                                                    height="39"
                                                    rx="5.5"
                                                    stroke={
                                                        listFavorite.find(
                                                            (element: any) =>
                                                                element.id ==
                                                                item.id
                                                        )
                                                            ? "#FF69B4"
                                                            : "#DEE2E7"
                                                    }
                                                />
                                                <path
                                                    d="M26.5 11.825C24.76 11.825 23.09 12.635 22 13.915C20.91 12.635 19.24 11.825 17.5 11.825C14.42 11.825 12 14.245 12 17.325C12 21.105 15.4 24.185 20.55 28.865L22 30.175L23.45 28.855C28.6 24.185 32 21.105 32 17.325C32 14.245 29.58 11.825 26.5 11.825ZM22.1 27.375L22 27.475L21.9 27.375C17.14 23.065 14 20.215 14 17.325C14 15.325 15.5 13.825 17.5 13.825C19.04 13.825 20.54 14.815 21.07 16.185H22.94C23.46 14.815 24.96 13.825 26.5 13.825C28.5 13.825 30 15.325 30 17.325C30 20.215 26.86 23.065 22.1 27.375Z"
                                                    fill={
                                                        listFavorite.find(
                                                            (element: any) =>
                                                                element.id ==
                                                                item.id
                                                        )
                                                            ? "white"
                                                            : "#0D6EFD"
                                                    }
                                                />
                                            </g>
                                            <defs>
                                                <filter
                                                    id="filter0_d_239_5304"
                                                    x="0"
                                                    y="0"
                                                    width="44"
                                                    height="44"
                                                    filterUnits="userSpaceOnUse"
                                                    color-interpolation-filters="sRGB"
                                                >
                                                    <feFlood
                                                        flood-opacity="0"
                                                        result="BackgroundImageFix"
                                                    />
                                                    <feColorMatrix
                                                        in="SourceAlpha"
                                                        type="matrix"
                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                        result="hardAlpha"
                                                    />
                                                    <feOffset dy="1" />
                                                    <feGaussianBlur stdDeviation="1" />
                                                    <feColorMatrix
                                                        type="matrix"
                                                        values="0 0 0 0 0.220833 0 0 0 0 0.220833 0 0 0 0 0.220833 0 0 0 0.08 0"
                                                    />
                                                    <feBlend
                                                        mode="normal"
                                                        in2="BackgroundImageFix"
                                                        result="effect1_dropShadow_239_5304"
                                                    />
                                                    <feBlend
                                                        mode="normal"
                                                        in="SourceGraphic"
                                                        in2="effect1_dropShadow_239_5304"
                                                        result="shape"
                                                    />
                                                </filter>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <h3 className="pt-[10px] font-normal text-[#606060]">
                                            {item.name}
                                        </h3>
                                        <button
                                            className="bg-primary rounded-[6px] font-semibold text-white mr-[20px] p-[5px]"
                                            onClick={() =>
                                                handleAddToCart(item)
                                            }
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : undefined ? (
                    display == "grid" && result.length == 0
                ) : (
                    <h3 className="text-primary font-bold text-[20px] text-center py-[150px]">
                        Not found product
                    </h3>
                )}

                {/* Default */}
                {display == "flex" ? (
                    <div className="pt-[20px] flex flex-col gap-y-[10px]">
                        {cellphones.map((item: any) => (
                            <div
                                key={item.id}
                                className="flex rounded-[6px] border-solid border border-[#DEE2E7] pl-[7px] pt-[9px]"
                            >
                                <Image
                                    src={item.image}
                                    alt=""
                                    width={210}
                                    height={210}
                                    className="h-[210px]  rounded-[6px]"
                                />
                                <div className=" pl-[12px]">
                                    <h3 className="font-medium text-[#1C1C1C] pt-[14px]">
                                        {item.title}
                                    </h3>
                                    <div className="flex gap-x-[7px] items-center pt-[16px]">
                                        <span className="font-semibold text-[20px]">
                                            {item.discountPrice}
                                        </span>
                                        <span className="line-through text-[#A9ACB0] font-semibold">
                                            {item.originalPrice}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-x-[9px]">
                                        <div className="flex items-center gap-x-[6px]">
                                            {" "}
                                            <svg
                                                width="80"
                                                height="15"
                                                viewBox="0 0 80 15"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M72 12.0553L76.944 15L75.632 9.45L80 5.71579L74.248 5.23421L72 0L69.752 5.23421L64 5.71579L68.368 9.45L67.056 15L72 12.0553Z"
                                                    fill="#D5CDC5"
                                                />
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M56 12.0553L60.944 15L59.632 9.45L64 5.71579L58.248 5.23421L56 0L53.752 5.23421L48 5.71579L52.368 9.45L51.056 15L56 12.0553Z"
                                                    fill="#FF9017"
                                                />
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M40 12.0553L44.944 15L43.632 9.45L48 5.71579L42.248 5.23421L40 0L37.752 5.23421L32 5.71579L36.368 9.45L35.056 15L40 12.0553Z"
                                                    fill="#FF9017"
                                                />
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M24 12.0553L28.944 15L27.632 9.45L32 5.71579L26.248 5.23421L24 0L21.752 5.23421L16 5.71579L20.368 9.45L19.056 15L24 12.0553Z"
                                                    fill="#FF9017"
                                                />
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M8 12.0553L12.944 15L11.632 9.45L16 5.71579L10.248 5.23421L8 0L5.752 5.23421L0 5.71579L4.368 9.45L3.056 15L8 12.0553Z"
                                                    fill="#FF9017"
                                                />
                                            </svg>
                                            <span className="text-[#FF9017] font-normal pr-[3px]">
                                                {item.rating}
                                            </span>
                                        </div>
                                        <svg
                                            width="6"
                                            height="6"
                                            viewBox="0 0 6 6"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle
                                                cx="3"
                                                cy="3"
                                                r="3"
                                                fill="#DEE2E7"
                                            />
                                        </svg>

                                        <div>
                                            <span>{item.orders} orders</span>
                                        </div>
                                        <svg
                                            width="6"
                                            height="6"
                                            viewBox="0 0 6 6"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle
                                                cx="3"
                                                cy="3"
                                                r="3"
                                                fill="#DEE2E7"
                                            />
                                        </svg>

                                        <div>
                                            <span className="font-normal text-[#00B517]">
                                                {item.ship}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="pt-[12px] font-normal text-[#606060]">
                                        {item.desc}
                                    </p>
                                    <h3 className="text-primary pb-[31px]">
                                        View details
                                    </h3>
                                </div>
                                <div className="pr-[20px] pt-[11px]">
                                    {" "}
                                    <svg
                                        width="44"
                                        height="44"
                                        viewBox="0 0 44 44"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g filter="url(#filter0_d_238_5615)">
                                            <rect
                                                x="2"
                                                y="1"
                                                width="40"
                                                height="40"
                                                rx="6"
                                                fill="white"
                                            />
                                            <rect
                                                x="2.5"
                                                y="1.5"
                                                width="39"
                                                height="39"
                                                rx="5.5"
                                                stroke="#DEE2E7"
                                            />
                                            <path
                                                d="M26.5 11.825C24.76 11.825 23.09 12.635 22 13.915C20.91 12.635 19.24 11.825 17.5 11.825C14.42 11.825 12 14.245 12 17.325C12 21.105 15.4 24.185 20.55 28.865L22 30.175L23.45 28.855C28.6 24.185 32 21.105 32 17.325C32 14.245 29.58 11.825 26.5 11.825ZM22.1 27.375L22 27.475L21.9 27.375C17.14 23.065 14 20.215 14 17.325C14 15.325 15.5 13.825 17.5 13.825C19.04 13.825 20.54 14.815 21.07 16.185H22.94C23.46 14.815 24.96 13.825 26.5 13.825C28.5 13.825 30 15.325 30 17.325C30 20.215 26.86 23.065 22.1 27.375Z"
                                                fill="#0D6EFD"
                                            />
                                        </g>
                                        <defs>
                                            <filter
                                                id="filter0_d_238_5615"
                                                x="0"
                                                y="0"
                                                width="44"
                                                height="44"
                                                filterUnits="userSpaceOnUse"
                                                color-interpolation-filters="sRGB"
                                            >
                                                <feFlood
                                                    flood-opacity="0"
                                                    result="BackgroundImageFix"
                                                />
                                                <feColorMatrix
                                                    in="SourceAlpha"
                                                    type="matrix"
                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                    result="hardAlpha"
                                                />
                                                <feOffset dy="1" />
                                                <feGaussianBlur stdDeviation="1" />
                                                <feColorMatrix
                                                    type="matrix"
                                                    values="0 0 0 0 0.220833 0 0 0 0 0.220833 0 0 0 0 0.220833 0 0 0 0.08 0"
                                                />
                                                <feBlend
                                                    mode="normal"
                                                    in2="BackgroundImageFix"
                                                    result="effect1_dropShadow_238_5615"
                                                />
                                                <feBlend
                                                    mode="normal"
                                                    in="SourceGraphic"
                                                    in2="effect1_dropShadow_238_5615"
                                                    result="shape"
                                                />
                                            </filter>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : undefined}
                <div className="flex pt-[30px] gap-x-[9px] w-fit text-right pb-[43px] mx-auto mr-[0px]">
                    {" "}
                    <div
                        onClick={handleShow}
                        className="cursor-pointer flex items-center gap-x-[19px] p-[10px] border-solid border rounded-[6px] border-[#DEE2E7]"
                    >
                        <div className="relative">
                            <button className="min-w-[65px]">
                                Show {selectQuantity}
                            </button>
                            {show == true ? (
                                <div className="absolute flex flex-col  min-w-[250px] text-left">
                                    {quantityShow.map((item: any) => (
                                        <h3
                                            key={item.id}
                                            className=""
                                            onClick={() =>
                                                handleSelectQuantity(item)
                                            }
                                        >
                                            Quantity products on a page:{" "}
                                            {item.quantity}
                                        </h3>
                                    ))}
                                </div>
                            ) : undefined}
                        </div>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16.59 8.29504L12 12.875L7.41 8.29504L6 9.70504L12 15.705L18 9.70504L16.59 8.29504Z"
                                fill="#8B96A5"
                            />
                        </svg>
                    </div>
                    <div className="flex px-[10px] items-center border border-solid border-[#DEE2E7] rounded-[6px]">
                        <div
                            onClick={handlePrevious}
                            className="cursor-pointer"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="mr-[10px]"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M14.6446 5.36644C14.1708 4.87785 13.4055 4.87785 12.9317 5.36644L7.35535 11.1168C6.88155 11.6054 6.88155 12.3946 7.35535 12.8832L12.9317 18.6336C13.4055 19.1221 14.1708 19.1221 14.6446 18.6336C15.1185 18.145 15.1185 17.3557 14.6446 16.8671L9.9309 11.9937L14.6446 7.13289C15.1185 6.6443 15.1063 5.84251 14.6446 5.36644Z"
                                    fill="#8B96A5"
                                />
                            </svg>
                        </div>
                        {newArray.map((item: any) => (
                            <span
                                key={item}
                                onClick={() => handleFocus(item)}
                                className={
                                    item == changePag
                                        ? "bg-[#EFF2F4] cursor-pointer py-[10px] px-[18px]  border-l border-solid border-[#DEE2E7] font-medium text-[#8B96A5]"
                                        : "cursor-pointer py-[10px] px-[18px] border-l border-solid border-[#DEE2E7] font-medium text-[#1C1C1C]"
                                }
                            >
                                {item}
                            </span>
                        ))}
                        <div
                            className="border-l border-[#DEE2E7] py-[10px] cursor-pointer"
                            onClick={handleNext}
                        >
                            {" "}
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="ml-[10px]"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M8.35535 5.36831C7.88155 5.85729 7.88155 6.64716 8.35535 7.13614L13.0691 12.0008L8.35535 16.8654C7.88155 17.3544 7.88155 18.1443 8.35535 18.6333C8.82916 19.1222 9.59453 19.1222 10.0683 18.6333L15.6446 12.8784C16.1185 12.3895 16.1185 11.5996 15.6446 11.1106L10.0683 5.35577C9.60668 4.87934 8.82916 4.87934 8.35535 5.36831Z"
                                    fill="#1C1C1C"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
