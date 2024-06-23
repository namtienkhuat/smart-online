"use client";
import Newsletter from "@/components/Newsletter";
import BreadCrumb from "@/components/listview/BreadCrumb";
import Footer from "@/components/listview/Footer";
import Header from "@/components/listview/Header";
import MainContent from "@/components/listview/MainContent";
import Navbar from "@/components/listview/Navbar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useStore } from "../checkout/store";
import { usePerson } from "@/components/store";

const person = [
    {
        id: 1,
        fullName: "Khuat Tien Nam",
        name: "Nam",
        email: "nam@gmail.com",
        pass: "1",
        image: "/nam.jpg",
        date: "05/07/2003",
        code: 30027050,
    },
    {
        id: 2,
        fullName: "Khuat Manh Dat",
        name: "Dat",
        email: "dat@gmail.com",
        pass: "1",
        image: "/dat.jpg",
        date: "23/08/2007",
        code: 70028032,
    },
];

const allProducts = [
    {
        id: 1,
        name: "Iphone 15 ProMax",
        discountPrice: "$99.50",
        originalPrice: "$1128.00",
        image: "/smartphones/1.webp",
        category: "Smartphones ",
        brand: "Apple",
        feature: "Metallic",
        condition: "Old items",
        rating: "7.5",
    },
    {
        id: 2,
        name: "Iphone 14 ProMax",
        discountPrice: "$99.50",
        originalPrice: "$1128.00",
        image: "/smartphones/2.jpg",
        category: "Smartphones ",
        brand: "Apple",
        feature: "Metallic",
        condition: "Old items",
        rating: "7.5",
    },
    {
        id: 3,
        name: "Samsung Z Flip 5",
        discountPrice: "$99.50",
        originalPrice: "$1128.00",
        image: "/smartphones/3.jpg",
        category: "Smartphones ",
        brand: "Samsung",
        feature: "Metallic",
        condition: "Old items",
        rating: "7.5",
    },
    {
        id: 4,
        name: "Samsung Z Flip 5",
        discountPrice: "$99.50",
        originalPrice: "$1128.00",
        image: "/smartphones/4.png",
        category: "Smartphones ",
        brand: "Samsung",
        feature: "Metallic",
        condition: "Old items",
        rating: "7.5",
    },
    {
        id: 5,
        name: "Huawei phone N7",
        discountPrice: "$99.50",
        originalPrice: "$1128.00",
        image: "/smartphones/5.png",
        category: "Smartphones ",
        brand: "Huawei",
        feature: "Metallic",
        condition: "Old items",
        rating: "7.5",
    },
    {
        id: 6,
        name: "Huawei phone N7",
        discountPrice: "$99.50",
        originalPrice: "$1128.00",
        image: "/smartphones/6.png",
        category: "Smartphones ",
        brand: "Huawei",
        feature: "Metallic",
        condition: "Old items",
        rating: "7.5",
    },
    {
        id: 7,
        name: "Lenovo K8",
        discountPrice: "$99.50",
        originalPrice: "$1128.00",
        image: "/smartphones/7.png",
        category: "Smartphones ",
        brand: "Lenovo",
        feature: "Metallic",
        condition: "Old items",
        rating: "7.5",
    },
    {
        id: 8,
        name: "Poco Ultra",
        discountPrice: "$99.50",
        originalPrice: "$1128.00",
        image: "/smartphones/8.png",
        category: "Smartphones ",
        brand: "Poco",
        feature: "Metallic",
        condition: "Old items",
        rating: "7.5",
    },
    {
        id: 9,
        name: "Poco Ultra",
        discountPrice: "$99.50",
        originalPrice: "$1128.00",
        image: "/smartphones/9.jpg",
        category: "Smartphones ",
        brand: "Poco",
        feature: "Metallic",
        condition: "Old items",
        rating: "7.5",
    },
    {
        id: 10,
        name: "Iphone 15 ProMax",
        discountPrice: "$99.50",
        originalPrice: "$1128.00",
        image: "/smartphones/10.jpg",
        category: "Smartphones ",
        brand: "Apple",
        feature: "Metallic",
        condition: "Old items",
        rating: "7.5",
    },
    {
        id: 11,
        name: "Iphone 14 ProMax",
        discountPrice: "$99.50",
        originalPrice: "$1128.00",
        image: "/smartphones/11.jpg",
        category: "Smartphones ",
        brand: "Apple",
        feature: "Metallic",
        condition: "Old items",
        rating: "7.5",
    },
    {
        id: 12,
        name: "Samsung Z Flip 5",
        discountPrice: "$99.50",
        originalPrice: "$1128.00",
        image: "/smartphones/12.jpg",
        category: "Smartphones ",
        brand: "Samsung",
        feature: "Metallic",
        condition: "Old items",
        rating: "7.5",
    },
    {
        id: 13,
        name: "Samsung Z Flip 5",
        discountPrice: "$99.50",
        originalPrice: "$1128.00",
        image: "/smartphones/13.jpg",
        category: "Smartphones ",
        brand: "Samsung",
        feature: "Metallic",
        condition: "Old items",
        rating: "7.5",
    },
    {
        id: 14,
        name: "Huawei phone N7",
        discountPrice: "$99.50",
        originalPrice: "$1128.00",
        image: "/smartphones/5.png",
        category: "Smartphones ",
        brand: "Huawei",
        feature: "Metallic",
        condition: "Old items",
        rating: "7.5",
    },
    {
        id: 15,
        name: "Huawei phone N7",
        discountPrice: "$99.50",
        originalPrice: "$1128.00",
        image: "/smartphones/6.png",
        category: "Smartphones ",
        brand: "Huawei",
        feature: "Metallic",
        condition: "Old items",
        rating: "7.5",
    },
    {
        id: 16,
        name: "Lenovo K8",
        discountPrice: "$99.50",
        originalPrice: "$1128.00",
        image: "/smartphones/7.png",
        category: "Smartphones ",
        brand: "Lenovo",
        feature: "Metallic",
        condition: "Old items",
        rating: "7.5",
    },
    {
        id: 17,
        name: "Poco Ultra",
        discountPrice: "$99.50",
        originalPrice: "$1128.00",
        image: "/smartphones/8.png",
        category: "Smartphones ",
        brand: "Poco",
        feature: "Metallic",
        condition: "Old items",
        rating: "7.5",
    },
    {
        id: 18,
        name: "Poco Ultra",
        discountPrice: "$99.50",
        originalPrice: "$1128.00",
        image: "/smartphones/9.jpg",
        category: "Smartphones ",
        brand: "Poco",
        feature: "Metallic",
        condition: "Old items",
        rating: "7.5",
    },
    {
        id: 19,
        name: "Iphone 15 ProMax",
        discountPrice: "$99.50",
        originalPrice: "$1128.00",
        image: "/smartphones/1.webp",
        category: "Smartphones ",
        brand: "Apple",
        feature: "Metallic",
        condition: "Old items",
        rating: "7.5",
    },
    {
        id: 20,
        name: "Iphone 14 ProMax",
        discountPrice: "$99.50",
        originalPrice: "$1128.00",
        image: "/smartphones/2.jpg",
        category: "Smartphones ",
        brand: "Apple",
        feature: "Metallic",
        condition: "Old items",
        rating: "7.5",
    },
    {
        id: 21,
        name: "Samsung Z Flip 5",
        discountPrice: "$99.50",
        originalPrice: "$1128.00",
        image: "/smartphones/3.jpg",
        category: "Smartphones ",
        brand: "Samsung",
        feature: "Metallic",
        condition: "Old items",
        rating: "7.5",
    },
    {
        id: 22,
        name: "Samsung Z Flip 5",
        discountPrice: "$99.50",
        originalPrice: "$1128.00",
        image: "/smartphones/4.png",
        category: "Smartphones ",
        brand: "Samsung",
        feature: "Metallic",
        condition: "Old items",
        rating: "7.5",
    },
    {
        id: 23,
        name: "Huawei phone N7",
        discountPrice: "$99.50",
        originalPrice: "$1128.00",
        image: "/smartphones/5.png",
        category: "Smartphones ",
        brand: "Huawei",
        feature: "Metallic",
        condition: "Old items",
        rating: "7.5",
    },
    {
        id: 24,
        name: "Huawei phone N7",
        discountPrice: "$99.50",
        originalPrice: "$1128.00",
        image: "/smartphones/6.png",
        category: "Smartphones ",
        brand: "Huawei",
        feature: "Metallic",
        condition: "Old items",
        rating: "7.5",
    },
    {
        id: 25,
        name: "Lenovo K8",
        discountPrice: "$99.50",
        originalPrice: "$1128.00",
        image: "/smartphones/7.png",
        category: "Smartphones ",
        brand: "Lenovo",
        feature: "Metallic",
        condition: "Old items",
        rating: "7.5",
    },
    {
        id: 26,
        name: "Poco Ultra",
        discountPrice: "$99.50",
        originalPrice: "$1128.00",
        image: "/smartphones/8.png",
        category: "Smartphones ",
        brand: "Poco",
        feature: "Metallic",
        condition: "Old items",
        rating: "7.5",
    },
    {
        id: 27,
        name: "Poco Ultra",
        discountPrice: "$99.50",
        originalPrice: "$1128.00",
        image: "/smartphones/9.jpg",
        category: "Smartphones ",
        brand: "Poco",
        feature: "Metallic",
        condition: "Old items",
        rating: "7.5",
    },
    {
        id: 28,
        name: "Iphone 15 ProMax",
        discountPrice: "$99.50",
        originalPrice: "$1128.00",
        image: "/smartphones/1.webp",
        category: "Smartphones ",
        brand: "Apple",
        feature: "Metallic",
        condition: "Old items",
        rating: "7.5",
    },
    {
        id: 29,
        name: "Iphone 14 ProMax",
        discountPrice: "$99.50",
        originalPrice: "$1128.00",
        image: "/smartphones/2.jpg",
        category: "Smartphones ",
        brand: "Apple",
        feature: "Metallic",
        condition: "Old items",
        rating: "7.5",
    },
    {
        id: 30,
        name: "Samsung Z Flip 5",
        discountPrice: "$99.50",
        originalPrice: "$1128.00",
        image: "/smartphones/3.jpg",
        category: "Smartphones ",
        brand: "Samsung",
        feature: "Metallic",
        condition: "Old items",
        rating: "7.5",
    },
    {
        id: 31,
        name: "Samsung Z Flip 5",
        discountPrice: "$99.50",
        originalPrice: "$1128.00",
        image: "/smartphones/4.png",
        category: "Smartphones ",
        brand: "Samsung",
        feature: "Metallic",
        condition: "Old items",
        rating: "7.5",
    },
    {
        id: 32,
        name: "Huawei phone N7",
        discountPrice: "$99.50",
        originalPrice: "$1128.00",
        image: "/smartphones/5.png",
        category: "Smartphones ",
        brand: "Huawei",
        feature: "Metallic",
        condition: "Old items",
        rating: "7.5",
    },
    {
        id: 33,
        name: "Huawei phone N7",
        discountPrice: "$99.50",
        originalPrice: "$1128.00",
        image: "/smartphones/6.png",
        category: "Smartphones ",
        brand: "Huawei",
        feature: "Metallic",
        condition: "Old items",
        rating: "7.5",
    },
    {
        id: 34,
        name: "Lenovo K8",
        discountPrice: "$99.50",
        originalPrice: "$1128.00",
        image: "/smartphones/7.png",
        category: "Smartphones ",
        brand: "Lenovo",
        feature: "Metallic",
        condition: "Old items",
        rating: "7.5",
    },
    {
        id: 35,
        name: "Poco Ultra",
        discountPrice: "$99.50",
        originalPrice: "$1128.00",
        image: "/smartphones/8.png",
        category: "Smartphones ",
        brand: "Poco",
        feature: "Metallic",
        condition: "Old items",
        rating: "7.5",
    },
    {
        id: 36,
        name: "Poco Ultra",
        discountPrice: "$99.50",
        originalPrice: "$1128.00",
        image: "/smartphones/9.jpg",
        category: "Smartphones ",
        brand: "Poco",
        feature: "Metallic",
        condition: "Old items",
        rating: "7.5",
    },
    {
        id: 37,
        name: "Iphone 15 ProMax",
        discountPrice: "$99.50",
        originalPrice: "$1128.00",
        image: "/smartphones/1.webp",
        category: "Smartphones ",
        brand: "Apple",
        feature: "Metallic",
        condition: "Old items",
        rating: "7.5",
    },
    {
        id: 38,
        name: "Iphone 14 ProMax",
        discountPrice: "$99.50",
        originalPrice: "$1128.00",
        image: "/smartphones/2.jpg",
        category: "Smartphones ",
        brand: "Apple",
        feature: "Metallic",
        condition: "Old items",
        rating: "7.5",
    },
    {
        id: 39,
        name: "Samsung Z Flip 5",
        discountPrice: "$99.50",
        originalPrice: "$1128.00",
        image: "/smartphones/3.jpg",
        category: "Smartphones ",
        brand: "Samsung",
        feature: "Metallic",
        condition: "Old items",
        rating: "7.5",
    },
    {
        id: 40,
        name: "Samsung Z Flip 5",
        discountPrice: "$99.50",
        originalPrice: "$1128.00",
        image: "/smartphones/4.png",
        category: "Smartphones ",
        brand: "Samsung",
        feature: "Metallic",
        condition: "Old items",
        rating: "7.5",
    },
    {
        id: 41,
        name: "Huawei phone N7",
        discountPrice: "$99.50",
        originalPrice: "$1128.00",
        image: "/smartphones/5.png",
        category: "Smartphones ",
        brand: "Huawei",
        feature: "Metallic",
        condition: "Old items",
        rating: "7.5",
    },
    {
        id: 42,
        name: "Huawei phone N7",
        discountPrice: "$99.50",
        originalPrice: "$1128.00",
        image: "/smartphones/6.png",
        category: "Smartphones ",
        brand: "Huawei",
        feature: "Metallic",
        condition: "Old items",
        rating: "7.5",
    },
    {
        id: 43,
        name: "Lenovo K8",
        discountPrice: "$99.50",
        originalPrice: "$1128.00",
        image: "/smartphones/7.png",
        category: "Smartphones ",
        brand: "Lenovo",
        feature: "Metallic",
        condition: "Old items",
        rating: "7.5",
    },
    {
        id: 44,
        name: "Poco Ultra",
        discountPrice: "$99.50",
        originalPrice: "$1128.00",
        image: "/smartphones/8.png",
        category: "Smartphones ",
        brand: "Poco",
        feature: "Metallic",
        condition: "Old items",
        rating: "7.5",
    },
    {
        id: 45,
        name: "Poco Ultra",
        discountPrice: "$99.50",
        originalPrice: "$1128.00",
        image: "/smartphones/9.jpg",
        category: "Smartphones ",
        brand: "Poco",
        feature: "Metallic",
        condition: "Old items",
        rating: "7.5",
    },
];

const listBrands = [
    { id: 1, brand: "Samsung" },
    { id: 2, brand: "Apple" },
    { id: 3, brand: "Huawei" },
    { id: 4, brand: "Poco" },
    { id: 5, brand: "Lenovo" },
];

const pages = [
    { id: 1, page: 1 },
    { id: 2, page: 2 },
    { id: 3, page: 3 },
    { id: 4, page: 4 },
    { id: 5, page: 5 },
    { id: 6, page: 6 },
];

const quantityShow = [
    { id: 1, quantity: 3 },
    { id: 2, quantity: 6 },
    { id: 3, quantity: 9 },
    { id: 4, quantity: 12 },
    { id: 5, quantity: 15 },
    { id: 6, quantity: 7 },
    { id: 7, quantity: 8 },
];

export default function ListView() {
    const { storeListCart, setStore }: any = useStore();
    const { storePerson, setPerson }: any = usePerson();
    console.log("StorePerson in listview: ", storePerson);
    // favorite
    const [listFavorite, setListFavorite] = useState<any>([]);

    const handleFavorite = (item: any) => {
        const value = listFavorite.find(
            (element: any) => element.id == item.id
        );
        if (!value) {
            setListFavorite([...listFavorite, item]);
        }
        if (value) {
            setListFavorite([
                ...listFavorite.filter((element: any) => element.id != item.id),
            ]);
        }
    };

    // display interface
    const [display, setDisplay] = useState("flex");
    const handleDisplay = (item: any) => {
        setDisplay(item);
    };

    // category
    const [category, setCategory] = useState(false);
    const handleCategory = () => {
        setCategory(!category);
    };

    // BRANDS-------------------------------------------------
    const [brands, setBrands] = useState(false);
    const handleBrands = () => {
        setBrands(!brands);
    };

    // handleCommon brands
    const [common, setCommon] = useState(false);
    const handleCommon = (event: any, value: any) => {
        const result = event.target.checked;
        if (result == true) {
            setCommon(event.target.checked);
            const element = listFilter.find((item: any) => {
                item == value;
            });
            !element
                ? setListFilter([...listFilter, value])
                : setListFilter(listFilter);
        }
        if (result == false) {
            setCommon(event.target.checked);
            setListFilter([...listFilter.filter((item: any) => item != value)]);
        }
    };

    // FEATURES--------------------------------------------
    const [features, setFeatures] = useState(false);
    const handleFeatures = () => {
        setFeatures(!features);
    };

    // PRICE RANGE
    const [priceRange, setPriceRange] = useState(false);
    const handlePriceRange = () => {
        setPriceRange(!priceRange);
    };

    // CONDITION
    const [condition, setCondition] = useState(false);
    const handleCondition = () => {
        setCondition(!condition);
    };

    // RATING
    const [ratings, setRatings] = useState(false);
    const handleRatings = () => {
        setRatings(!ratings);
    };

    // display filter
    const [result, setResult] = useState<any>(allProducts);
    const [listFilter, setListFilter] = useState<any>([]);

    useEffect(() => {
        listFilter.length == 0
            ? setResult(allProducts)
            : setResult(
                  allProducts.filter((item: any) => {
                      listFilter.includes(item.brand);
                  })
              );
    }, [listFilter]);

    // Search
    const [change, setChange] = useState("");
    const handleChange = (event: any) => {
        setChange(event.target.value);
    };

    useEffect(() => {
        setResult(
            allProducts.filter((item, index) => item.name.includes(change))
        );
    }, [change]);

    // Clear all filter
    const handleClearAllFilter = () => {
        setListFilter([]);
        setCommon(false);
    };

    const handleClearDetail = (item: any) => {
        setListFilter(listFilter.filter((element: any) => element != item));
    };

    // Profile
    const [profile, setProfile] = useState();

    // Add to carts
    const [listCart, setListCart] = useState<any>([]);
    const handleAddToCart = (item: any) => {
        let value = listCart.find((element: any) => element.id == item.id);
        if (!value) {
            setListCart([...listCart, { ...item, total: 1 }]);
        }
        if (value) {
            const result = listCart.filter(
                (element: any) => element.id != value.id
            );
            const value1 = { ...item, total: value.total + 1 };

            setListCart([...result, value1]);
        }
        localStorage.setItem("cart", JSON.stringify({ listCart }));
    };

    // Display listCart
    const [displayMyCart, setDisplayMyCart] = useState(false);
    const handleDisplayMyCart = () => {
        setDisplayMyCart(!displayMyCart);
    };

    // Display listOrder
    const [displayOrder, setDisplayOrder] = useState(false);
    const handleDisplayOrder = () => {
        setDisplayOrder(!displayOrder);
    };

    // Add to orders
    const [listOrder, setListOrder] = useState<any>([]);
    const handleAddToOrder = (item: any) => {
        let z = 0;
        item.map((item: any) => {
            z += parseFloat(item.discountPrice.slice(1));
        });
        setListOrder([...listOrder, { product: [...item], totalPrice: z }]);
        setListCart([]);
    };

    // Pagination
    const [changePag, setChangePag] = useState(1);
    const handleNext = () => {
        changePag == numberPage ? setChangePag(1) : setChangePag(changePag + 1);
    };
    const handlePrevious = () => {
        changePag == 1 ? setChangePag(numberPage) : setChangePag(changePag - 1);
    };
    const handleFocus = (item: any) => {
        setChangePag(item);
    };

    // Display quantity products in one page
    const [show, setShow] = useState(false);
    const [selectQuantity, setSelectQuantity] = useState(9);
    const handleShow = () => {
        setShow(!show);
    };
    const handleSelectQuantity = (item: any) => {
        setSelectQuantity(item.quantity);
        // setChangePag(1);
    };

    const [numberPage, setNumberPage] = useState(
        result.length / selectQuantity
    );
    useEffect(() => {
        let value = allProducts.filter((item, index) =>
            item.name.includes(change)
        );

        const quantity = value.filter(
            (item, index: any) =>
                index >= selectQuantity * (changePag - 1) &&
                index <= changePag * selectQuantity - 1
        );
        setResult(quantity);
        setNumberPage(value.length / selectQuantity);
    }, [change, selectQuantity, changePag]);
    let newArray = Array.from({ length: numberPage }, (_, index) => index + 1);

    // Checkout product
    const router = useRouter();
    const handleCheckOut = (item: any) => {
        console.log(item);
        setStore(item);
        router.push("/checkout");
    };

    // display profile
    const [displayProfile, setDisplayPerson] = useState(false);
    const handleDisplayProfile = () => {
        setDisplayPerson(!displayProfile);
    };
    return (
        <main className="w-[1180px] mx-auto px-[5px] pb-[20px] relative">
            {/* Layout/header-alibaba */}
            <Header
                change={change}
                handleChange={handleChange}
                handleDisplayMyCart={handleDisplayMyCart}
                displayMyCart={displayMyCart}
                listCart={listCart}
                handleDisplayOrder={handleDisplayOrder}
                displayOrder={displayOrder}
                handleAddToOrder={handleAddToOrder}
                listOrder={listOrder}
                handleCheckOut={handleCheckOut}
                handleDisplayProfile={handleDisplayProfile}
                storePerson={storePerson}
                displayProfile={displayProfile}
            ></Header>

            {/* Navbar */}
            <Navbar></Navbar>

            {/* Breadcrumb */}
            <BreadCrumb></BreadCrumb>

            {/* MainContent */}
            <MainContent
                brands={brands}
                features={features}
                condition={condition}
                listFilter={listFilter}
                result={result}
                handleCategory={handleCategory}
                category={category}
                handleBrands={handleBrands}
                handleCondition={handleCondition}
                handleFeatures={handleFeatures}
                handlePriceRange={handlePriceRange}
                handleRatings={handleRatings}
                handleClearAllFilter={handleClearAllFilter}
                handleClearDetail={handleClearDetail}
                handleCommon={handleCommon}
                listBrands={listBrands}
                handleDisplay={handleDisplay}
                display={display}
                handleFavorite={handleFavorite}
                listFavorite={listFavorite}
                handleAddToCart={handleAddToCart}
                newArray={newArray}
                changePag={changePag}
                handleFocus={handleFocus}
                handleNext={handleNext}
                handlePrevious={handlePrevious}
                show={show}
                quantityShow={quantityShow}
                handleShow={handleShow}
                handleSelectQuantity={handleSelectQuantity}
                selectQuantity={selectQuantity}
            ></MainContent>

            {/* Newsletter */}
            <Newsletter></Newsletter>

            {/* Footer */}
            <Footer></Footer>
        </main>
    );
}
