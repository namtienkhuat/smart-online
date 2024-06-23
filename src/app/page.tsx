"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Items from "@/components/Item";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import SectionCountry from "@/components/Section-country";
import SectionInquiry from "@/components/Section-inquiry";
import SectionMain from "@/components/Section-main";
import SectionRecommend from "@/components/Section-recommend";
import SectionSale from "@/components/Section-sale";
import SectionService from "@/components/Section-service";
import { usePerson } from "@/components/store";
import { useEffect, useState } from "react";

const home = [
    {
        id: 1,
        name: "Sofa and chairs",
        usd: 19,
        image: "/home-interiors/sofa.png",
    },
    {
        id: 2,
        name: "Sofa and chairs",
        usd: 19,
        image: "/home-interiors/lamp.png",
    },
    {
        id: 3,
        name: "Kitchen dishes",
        usd: 19,
        image: "/home-interiors/dem.png",
    },
    {
        id: 4,
        name: "Smart watches",
        usd: 19,
        image: "/home-interiors/caibinh.png",
    },
    {
        id: 5,
        name: "Kitchen mixser",
        usd: 100,
        image: "/home-interiors/mayxay.png",
    },
    { id: 6, name: "Blenders", usd: 39, image: "/home-interiors/maypha.png" },
    {
        id: 7,
        name: "Home appliance",
        usd: 19,
        image: "/home-interiors/giado.png",
    },
    {
        id: 8,
        name: "Coffee maker",
        usd: 10,
        image: "/home-interiors/chaucay.png",
    },
];

const data = [
    {
        id: 1,
        type: "Home interiors",
        name: "Sofa and chairs",
        usd: 19,
        image: "/home-interiors/1.png",
        total: 3,
    },
    {
        id: 2,
        type: "Home interiors",
        name: "Sofa and chairs",
        usd: 19,
        image: "/home-interiors/2.png",
        total: 4,
    },
    {
        id: 3,
        type: "Home interiors",
        name: "Kitchen dishes",
        usd: 19,
        image: "/home-interiors/3.png",
        total: 5,
    },
    {
        id: 4,
        type: "Home interiors",
        name: "Smart watches",
        usd: 19,
        image: "/home-interiors/4.png",
        total: 3,
    },
    {
        id: 5,
        type: "Home interiors",
        name: "Kitchen mixser",
        usd: 100,
        image: "/home-interiors/5.png",
        total: 4,
    },
    {
        id: 6,
        type: "Home interiors",
        name: "Blenders",
        usd: 39,
        image: "/home-interiors/6.png",
        total: 5,
    },
    {
        id: 7,
        type: "Home interiors",
        name: "Home appliance",
        usd: 19,
        image: "/home-interiors/7.png",
        total: 3,
    },
    {
        id: 8,
        type: "Home interiors",
        name: "Coffee maker",
        usd: 10,
        image: "/home-interiors/8.png",
        total: 4,
    },
    {
        id: 9,
        type: "Automobiles",
        name: "Porsche car",
        usd: 19,
        image: "/automobiles/1.png",
        total: 5,
    },
    {
        id: 10,
        type: "Automobiles",
        name: "Porsche car",
        usd: 19,
        image: "/automobiles/2.png",
        total: 3,
    },
    {
        id: 11,
        type: "Automobiles",
        name: "Honda car",
        usd: 19,
        image: "/automobiles/3.png",
        total: 4,
    },
    {
        id: 12,
        type: "Automobiles",
        name: "Porsche car",
        usd: 19,
        image: "/automobiles/4.png",
        total: 5,
    },
    {
        id: 13,
        type: "Automobiles",
        name: "Porsche car",
        usd: 19,
        image: "/automobiles/5.png",
        total: 3,
    },
    {
        id: 14,
        type: "Automobiles",
        name: "Porsche car",
        usd: 19,
        image: "/automobiles/6.png",
        total: 4,
    },
    {
        id: 15,
        type: "Automobiles",
        name: "Porsche car",
        usd: 19,
        image: "/automobiles/7.png",
        total: 5,
    },
    {
        id: 16,
        type: "Automobiles",
        name: "Porsche car",
        usd: 19,
        image: "/automobiles/8.png",
        total: 3,
    },
];

const type = [
    { id: 1, type: "Automobiles" },
    { id: 2, type: "Clothes and wear" },
    { id: 3, type: "Home interiors" },
    { id: 4, type: "Computer and tech" },
    { id: 5, type: "Tools, equipments" },
    { id: 6, type: "Sports and outdoor" },
    { id: 7, type: "Animal and pets" },
    { id: 8, type: "Machinery tools" },
    { id: 9, type: "More category" },
];

const recommend = [
    {
        id: 1,
        image: "/section-recommend/1.png",
        price: "$10.30",
        desc: "T-shirts with multiple colors, for men",
    },
    {
        id: 2,
        image: "/section-recommend/2.png",
        price: "$10.30",
        desc: "T-shirts with multiple colors, for men",
    },
    {
        id: 3,
        image: "/section-recommend/3.png",
        price: "$10.30",
        desc: "T-shirts with multiple colors, for men",
    },
    {
        id: 4,
        image: "/section-recommend/4.png",
        price: "$10.30",
        desc: "T-shirts with multiple colors, for men",
    },
    {
        id: 5,
        image: "/section-recommend/5.png",
        price: "$10.30",
        desc: "T-shirts with multiple colors, for men",
    },
    {
        id: 6,
        image: "/section-recommend/6.png",
        price: "$10.30",
        desc: "T-shirts with multiple colors, for men",
    },
    {
        id: 7,
        image: "/section-recommend/7.png",
        price: "$10.30",
        desc: "T-shirts with multiple colors, for men",
    },
    {
        id: 8,
        image: "/section-recommend/8.png",
        price: "$10.30",
        desc: "T-shirts with multiple colors, for men",
    },
    {
        id: 9,
        image: "/section-recommend/9.png",
        price: "$10.30",
        desc: "T-shirts with multiple colors, for men",
    },
    {
        id: 10,
        image: "/section-recommend/10.png",
        price: "$10.30",
        desc: "T-shirts with multiple colors, for men",
    },
];

const sale = [
    {
        id: 1,
        usd: 10,
        image: "/smartwatches.png",
        percent: "-25%",
        name: "Smart Watches",
        total: 2,
    },
    {
        id: 2,
        usd: 20,
        image: "/laptops.png",
        percent: "-15%",
        name: "Laptops",
        total: 3,
    },
    {
        id: 3,
        usd: 30,
        image: "/goprocameras.png",
        percent: " -40%",
        name: "GoPro Cameras",
        total: 3,
    },
    {
        id: 4,
        usd: 40,
        image: "/headphones.png",
        percent: "-25%",
        name: "Headphones",
        total: 5,
    },
    {
        id: 5,
        usd: 50,
        image: "/canoncameras.png",
        percent: "-25%",
        name: "Canon Cameras",
        total: 4,
    },
];

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

const country = [
    {
        id: 1,
        nation: "England",
        currency: "GBP",
        flag: "/flag/england.png",
        convert: 0.8,
    },
    {
        id: 2,
        nation: "Japan",
        currency: "JPY",
        flag: "/flag/japan.png",
        convert: 153,
    },
    {
        id: 3,
        nation: "VietNam",
        currency: "VND",
        flag: "/flag/vietnam.png",
        convert: 25000,
    },
    {
        id: 4,
        nation: "Korea",
        currency: "KRW",
        flag: "/flag/korea.png",
        convert: 1355,
    },
    {
        id: 5,
        nation: "Canada",
        currency: "CAD",
        flag: "/flag/canada.png",
        convert: 1.4,
    },
    {
        id: 6,
        nation: "China",
        currency: "CNY",
        flag: "/flag/china.png",
        convert: 7.2,
    },
    {
        id: 7,
        nation: "America",
        currency: "USD",
        flag: "/flag/america.png",
        convert: 1,
    },
    {
        id: 8,
        nation: "Laos",
        currency: "LAK",
        flag: "/flag/laos.png",
        convert: 0.9,
    },
    {
        id: 9,
        nation: "Malaysia",
        currency: "MYR",
        flag: "/flag/malaysia.png",
        convert: 4.7,
    },
    {
        id: 10,
        nation: "Monaco",
        currency: "UER",
        flag: "/flag/monaco.png",
        convert: 0.9,
    },
    {
        id: 11,
        nation: "Panama",
        currency: "USD",
        flag: "/flag/panama.png",
        convert: 1,
    },
    {
        id: 12,
        nation: "France",
        currency: "UER",
        flag: "/flag/france.png",
        convert: 0.9,
    },
];

const discountPercent = [
    {
        id: 1,
        nation: "England",
        array: [
            { id: 2, percent: "-10%" },
            { id: 3, percent: "-15%" },
            { id: 4, percent: "-20%" },
            { id: 5, percent: "-25%" },
            { id: 1, percent: "-5%" },
        ],
    },
    {
        id: 2,
        nation: "Japan",
        array: [
            { id: 1, percent: "-10%" },
            { id: 2, percent: "-15%" },
            { id: 3, percent: "-20%" },
            { id: 4, percent: "-25%" },
            { id: 5, percent: "-30%" },
        ],
    },
    {
        id: 3,
        nation: "VietNam",
        array: [
            { id: 1, percent: "-15%" },
            { id: 2, percent: "-20%" },
            { id: 3, percent: "-25%" },
            { id: 4, percent: "-30%" },
            { id: 5, percent: "-35%" },
        ],
    },
    {
        id: 4,
        nation: "Korea",
        array: [
            { id: 1, percent: "-40%" },
            { id: 2, percent: "-45%" },
            { id: 3, percent: "-50%" },
            { id: 4, percent: "-55%" },
            { id: 5, percent: "-60%" },
        ],
    },
    {
        id: 5,
        nation: "Canada",
        array: [
            { id: 1, percent: "-45%" },
            { id: 2, percent: "-50%" },
            { id: 3, percent: "-55%" },
            { id: 4, percent: "-60%" },
            { id: 5, percent: "-65%" },
        ],
    },
    {
        id: 6,
        nation: "China",
        array: [
            { id: 1, percent: "-50%" },
            { id: 2, percent: "-55%" },
            { id: 3, percent: "-60%" },
            { id: 4, percent: "-65%" },
            { id: 5, percent: "-70%" },
        ],
    },
    {
        id: 7,
        nation: "America",
        array: [
            { id: 1, percent: "-55%" },
            { id: 2, percent: "-60%" },
            { id: 3, percent: "-65%" },
            { id: 4, percent: "-70%" },
            { id: 5, percent: "-75%" },
        ],
    },
    {
        id: 8,
        nation: "Laos",
        array: [
            { id: 1, percent: "-60%" },
            { id: 2, percent: "-65%" },
            { id: 3, percent: "-70%" },
            { id: 4, percent: "-75%" },
            { id: 5, percent: "-80%" },
        ],
    },
    {
        id: 9,
        nation: "Malaysia",
        array: [
            { id: 1, percent: "-65%" },
            { id: 2, percent: "-70%" },
            { id: 3, percent: "-75%" },
            { id: 4, percent: "-80%" },
            { id: 5, percent: "-85%" },
        ],
    },
    {
        id: 10,
        nation: "Monaco",
        array: [
            { id: 1, percent: "-70%" },
            { id: 2, percent: "-75%" },
            { id: 3, percent: "-80%" },
            { id: 4, percent: "-85%" },
            { id: 5, percent: "-90%" },
        ],
    },
    {
        id: 11,
        nation: "Panama",
        array: [
            { id: 1, percent: "-75%" },
            { id: 2, percent: "-80%" },
            { id: 3, percent: "-85%" },
            { id: 4, percent: "-90%" },
            { id: 5, percent: "-95%" },
        ],
    },
    {
        id: 12,
        nation: "France",
        array: [
            { id: 1, percent: "-60%" },
            { id: 2, percent: "-65%" },
            { id: 3, percent: "-70%" },
            { id: 4, percent: "-75%" },
            { id: 5, percent: "-80%" },
        ],
    },
];

export default function Home() {
    const { storePerson, setPerson }: any = usePerson();
    // Search product
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState(data);
    const handleChange = (event: any) => {
        setSearch(event.target.value);
    };

    const [focus, setFocus] = useState("");
    const handleFocus = (item: any) => {
        setFocus(item.type);
    };

    useEffect(() => {
        setSearchResults(
            data.filter((item, index) => {
                return !focus
                    ? item.name.includes(search)
                    : item.type == focus && item.name.includes(search);
            })
        );
    }, [focus, search]);

    // Add to cart

    const [addProduct, setAddProduct] = useState<any>([]);

    const handleAddToCart = (item: any, discount: any) => {
        const element = addProduct.find((a: any) => a.id == item.id);
        let newArray;
        if (!element) {
            let y = { ...item, total: 1 };
            newArray = addProduct.concat(y);
        }
        if (element) {
            let x = { ...element, total: ++element.total };
            newArray = addProduct.map((b: any) => {
                return b.id == element.id ? x : b;
            });
        }
        setAddProduct(newArray);
        const a = localStorage.getItem("cart");
        const b = JSON.parse(a || "{}");
        const x = { [profile.id]: newArray };
        localStorage.setItem("cart", JSON.stringify({ ...b, ...x }));
    };

    // Display to Cart
    const [displayCart, setDisplayCart] = useState(0);
    const handleDisplayCart = () => {
        setDisplayCart(displayCart + 1);
    };

    // Add to Orders

    const [listOrder, setListOrder] = useState<any>([]);
    const [invoice, setInvoice] = useState(0);

    const handleAddOrder = (item: any) => {
        console.log(item);
        let z = 0;
        item.map((item: any) => {
            let resultDiscount = discount.array.find(
                (element: any) => element.id == item.id
            );
            z +=
                item.total *
                item.usd *
                (1 + parseFloat(resultDiscount.percent) / 100);
        });
        z = z * convert;
        setListOrder([...listOrder, { product: [...item], totalPrice: z }]);
        setAddProduct([]);
        const a = localStorage.getItem("order");
        const b = JSON.parse(a || "{}");
        const x = {
            [profile.id]: [...listOrder, { product: [...item], totalPrice: z }],
        };
        localStorage.setItem("order", JSON.stringify({ ...b, ...x }));
        const c = localStorage.getItem("cart");
        const d = JSON.parse(c || "{}");
        const y = { [profile.id]: [] };
        localStorage.setItem("cart", JSON.stringify({ ...d, ...y }));
    };
    useEffect(() => {
        let x = 0;
        listOrder.map((item: any) => {
            x += item.total * item.usd;
        });
        setInvoice(x);
    }, [listOrder]);

    // Display to Order
    const [displayOrder, setDisplayOrder] = useState(false);
    const handleDisplayOrder = () => {
        setDisplayOrder(!displayOrder);
    };

    // SetTime Sale
    // const [day, setDay] = useState(4);
    // const [hour, setHour] = useState(13);
    // const [minute, setMinute] = useState(1);
    // const [seconds, setSeconds] = useState(5);

    // const handleUpdateSeconds = () => {
    //     if (seconds == 0) {
    //         setSeconds(60);
    //         if (minute == 0) {
    //             setMinute(59);
    //             if (hour == 0) {
    //                 setHour(23);
    //                 setDay(day - 1);
    //             } else {
    //                 setHour(hour - 1);
    //             }
    //         } else {
    //             setMinute(minute - 1);
    //         }
    //     } else {
    //         setSeconds(seconds - 1);
    //     }
    // };

    // setTimeout(handleUpdateSeconds, 1000);

    // Action login
    const [error, setError] = useState("");
    const [change, setChange] = useState(false);
    const [email, setEmail] = useState("");
    const [profile, setProfile] = useState<any>({});
    const [display, setDisplay] = useState(0);

    const handleEmail = (event: any) => {
        setEmail(event.target.value);
    };
    const [pass, setPass] = useState("");
    const handlePass = (event: any) => {
        setPass(event.target.value);
    };

    const handleDisplayLogin = () => {
        console.log(change);
        console.log(addProduct);
        // if (change == 0) {
        //     localStorage.getItem("order");
        //     setChange(change + 1);
        // }

        if (change == false) {
            const cart = localStorage.getItem("cart"); //lấy ra một object chứa id và products đã lưu trong localstorage của 1 user
            const cartConvert = JSON.parse(cart || "{}"); //chuyển đổi về object
            const x = { [profile.id]: addProduct }; // gán giá trị mới cho x, gồm id và products của 1 user mới
            localStorage.setItem(
                "cart",
                JSON.stringify({ ...cartConvert, ...x })
            ); // gán lại giá trị của cart trong localstorage gồm cả của user mới là x và user cũ là b
            const item = localStorage.getItem("person"); // lấy ra person trong localstorage chính là profile của 1 user
            const profile2 = JSON.parse(item || "{}"); // chuyển về dạng object
            if (item) {
                setProfile(profile2); //nếu có person thì ta truyền profile vào setProfile để cập nhật lại profile khi ta load lại trang
            }
            const order = localStorage.getItem("order"); // lấy ra cart trong localstorage là 1 object chứa id các user và products mà các user chọn
            const orderConvert = JSON.parse(order || "{}"); //chuyển x về object
            const y = { [profile.id]: listOrder };
            localStorage.setItem(
                "order",
                JSON.stringify({ ...orderConvert, ...y })
            );
            setListOrder([]); // lúc này a là 1 object   const x = a || b
            setChange(!change);
            setProfile({});
            setAddProduct([]);
        }
    };
    const handleStatus = () => {
        const element = person.find(
            (a: any) => a.email == email && a.pass == pass
        );
        if (!element) {
            setError("Email or password is incorrect!");
        }
        if (element) {
            setProfile({ ...element });
            setChange(!change);
            localStorage.setItem("person", JSON.stringify(element));
            const cart = localStorage.getItem("cart");
            const cartConvert = JSON.parse(cart || "{}");
            setAddProduct(cartConvert[element.id] || []);
            const order = localStorage.getItem("order");
            const orderConvert = JSON.parse(order || "{}");
            setListOrder(orderConvert[element.id] || []);
            setPerson(element);
        }
    };
    const handleDisplayProfile = () => {
        setDisplay(display + 1);
    };

    useEffect(() => {
        const item = localStorage.getItem("person");
        const profile = JSON.parse(item || "{}");
        if (item) {
            setProfile(profile);
        }
        const x = localStorage.getItem("cart");
        const a = JSON.parse(x || "{}");
        setAddProduct(a[profile.id] || []);
        const y = localStorage.getItem("order");
        const b = JSON.parse(y || "{}");
        setListOrder(b[profile.id] || []);
    }, []);

    // Nation and currency and discount
    const [discount, setDiscount] = useState<any>({
        id: 7,
        nation: "America",
        array: [
            { id: 1, name: "Smart Watches", percent: "-55%" },
            { id: 2, name: "Laptops", percent: "-60%" },
            { id: 3, name: "GoPro Cameras", percent: "-65%" },
            { id: 4, name: "Headphones", percent: "-70%" },
            { id: 5, name: "Canon Cameras", percent: "-75%" },
        ],
    });
    const [hidden, setHidden] = useState(false);
    const [nation, setNation] = useState("America, USD");
    const [flag, setFlag] = useState("/flag/america.png");
    const [currency, setCurrency] = useState("USD");
    const [convert, setConvert] = useState(1);
    const handleHidden = () => {
        setHidden(!hidden);
    };
    const handleCountry = (item: any) => {
        console.log(item);
        let findNation = discountPercent.find(
            (element: any) => element.nation == item.nation
        );
        setNation(`${item.nation}, ${item.currency}`);
        setFlag(`${item.flag}`);
        setCurrency(`${item.currency}`);
        setConvert(item.convert);
        setDiscount(findNation);
    };
    console.log("storePerson: ", storePerson);

    return (
        <main className="w-[1180px] mx-auto px-[5px] pb-[20px] relative">
            {/* Layout/header-alibaba */}
            <Header
                search={search}
                handleChange={handleChange}
                addProduct={addProduct}
                displayCart={displayCart}
                handleDisplayCart={handleDisplayCart}
                handleAddOrder={handleAddOrder}
                displayOrder={displayOrder}
                handleDisplayOrder={handleDisplayOrder}
                listOrder={listOrder}
                invoice={invoice}
                profile={profile}
                display={display}
                handleDisplayProfile={handleDisplayProfile}
            ></Header>

            {/* Navbar */}
            <Navbar
                country={country}
                handleHidden={handleHidden}
                hidden={hidden}
                handleCountry={handleCountry}
                nation={nation}
                flag={flag}
            ></Navbar>

            {/* Section-main */}
            <SectionMain
                handleFocus={handleFocus}
                focus={focus}
                handleDisplayLogin={handleDisplayLogin}
                change={change}
                handleStatus={handleStatus}
                email={email}
                handleEmail={handleEmail}
                pass={pass}
                handlePass={handlePass}
                error={error}
                profile={profile}
            ></SectionMain>

            {/* Section-sale */}
            <SectionSale
                sale={sale}
                // seconds={seconds}
                // minute={minute}
                // hour={hour}
                // day={day}
                discount={discount}
                handleAddToCart={handleAddToCart}
                convert={convert}
            ></SectionSale>

            {/* Block-items-group */}
            <Items
                searchResults={searchResults}
                handleAddToCart={handleAddToCart}
                currency={currency}
                convert={convert}
            ></Items>

            {/* Section-inquiry */}
            <SectionInquiry></SectionInquiry>

            {/* Section-recommend */}
            <SectionRecommend recommend={recommend}></SectionRecommend>

            {/* Section-service */}
            <SectionService></SectionService>

            {/* Section-country */}
            <SectionCountry></SectionCountry>

            {/* Newsletter */}
            <Newsletter></Newsletter>

            {/* Footer */}
            <Footer></Footer>
        </main>
    );
}
