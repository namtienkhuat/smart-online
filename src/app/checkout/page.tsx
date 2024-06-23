"use client";
import Header from "@/components/checkout/Header";
import Navbar from "@/components/checkout/Navbar";
import MyCart from "@/components/checkout/MyCart";
import { useEffect, useState } from "react";
import { useStore } from "./store";
import { useRouter } from "next/navigation";

const coupon = [
    { id: 1, code: "NKT", coupon: "10%", tax: "$15.00" },
    { id: 2, code: "ADN", coupon: "20%", tax: "$20.00" },
    { id: 3, code: "GEN", coupon: "30%", tax: "$25.00" },
    { id: 4, code: "DES", coupon: "40%", tax: "$30.00" },
    { id: 5, code: "INS", coupon: "50%", tax: "$35.00" },
];

export default function CheckOut() {
    const { storeListCart, setStore }: any = useStore();
    console.log("storeListCart: ", storeListCart);
    const [addCoupon, setAddCoupon] = useState("Select to coupon");
    const [displayCoupon, setDisplayCoupon] = useState(false);
    const [applyCoupon, setApplyCoupon] = useState("Add to coupon");
    // const [quantity, setQuantity] = useState(0)
    const handleDisplayCoupon = () => {
        setDisplayCoupon(!displayCoupon);
    };

    const handleSelectCoupon = (item: any) => {
        setAddCoupon(`Coupon: ${item.coupon}`);
        setApplyCoupon(item.code);
    };
    const handleApplyCoupon = (item: any) => {
        const result = coupon.find(
            (element: any) => element.code == applyCoupon
        );
        if (result) {
            setApplyCoupon(result.code);
            setTax(result.tax);
            let value = parseFloat(result.coupon) / 100;
            setDiscount(subTotal * value);
        }
    };

    // Subtotal
    const [subTotal, setSubTotal] = useState(0);

    useEffect(() => {
        let x = 0;
        storeListCart.map((item: any) => {
            x += item.total * Number(item.discountPrice.slice(1));
        });
        setSubTotal(x);
    }, [storeListCart]);

    // Discount
    const [discount, setDiscount] = useState(0);

    // Tax
    const [tax, setTax] = useState("$0");

    // Total
    const [total, setTotal] = useState(0);
    useEffect(() => {
        setTotal(subTotal - discount + Number(tax.slice(1)));
    }, [subTotal, discount, tax]);

    // minus
    const handleMinus = (item: any) => {
        const result = storeListCart.find(
            (element: any) => element.id == item.id
        );
        const value = storeListCart.filter(
            (element: any) => element.id != item.id
        );
        let x = { ...result, total: result.total - 1 };
        if (result.total - 1 == 0) {
            setStore([...value]);
        } else {
            setStore([
                ...storeListCart.map((element: any) => {
                    return element.id == result.id ? x : element;
                }),
            ]);
        }
    };

    // plus
    const handlePlus = (item: any) => {
        const result = storeListCart.find(
            (element: any) => element.id == item.id
        );
        let newArray;

        let x = { ...result, total: ++result.total };
        if (result) {
            newArray = storeListCart.map((element: any) => {
                return element.id == result.id ? x : element;
            });
        }
        setStore([...newArray]);
    };

    // Remove
    const handleRemove = (item: any) => {
        setStore([
            ...storeListCart.filter((element: any) => element.id != item.id),
        ]);
    };

    // checkout
    const router = useRouter();
    const handleCheckOut = () => router.push("/listview");

    return (
        <main className="w-[1180px] mx-auto px-[5px] pb-[20px] relative">
            {/* Header */}
            <Header></Header>

            {/* Navbar */}
            <Navbar></Navbar>

            {/* CheckOut */}
            <MyCart
                coupon={coupon}
                addCoupon={addCoupon}
                handleDisplayCoupon={handleDisplayCoupon}
                displayCoupon={displayCoupon}
                handleApplyCoupon={handleApplyCoupon}
                applyCoupon={applyCoupon}
                storeListCart={storeListCart}
                subTotal={subTotal}
                tax={tax}
                discount={discount}
                total={total}
                handleSelectCoupon={handleSelectCoupon}
                handleCheckOut={handleCheckOut}
                handleRemove={handleRemove}
                handleMinus={handleMinus}
                handlePlus={handlePlus}
            ></MyCart>
        </main>
    );
}
