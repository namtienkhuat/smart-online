import Image from "next/image";
import { useState } from "react";

const country = [
    {
        id: 1,
        nation: "England",
        currency: "GBP",
        flag: "/flag/england.png",
        convert: 0.79,
    },
    {
        id: 2,
        nation: "Japan",
        currency: "JPY",
        flag: "/flag/japan.png",
        convert: 153.8,
    },
    {
        id: 3,
        nation: "VietNam",
        currency: "VND",
        flag: "/flag/vietnam.png",
        convert: 25379,
    },
    {
        id: 4,
        nation: "Korea",
        currency: "KRW",
        flag: "/flag/korea.png",
        convert: 1355.76,
    },
    {
        id: 5,
        nation: "Canada",
        currency: "CAD",
        flag: "/flag/canada.png",
        convert: 1.37,
    },
    {
        id: 6,
        nation: "China",
        currency: "CNY",
        flag: "/flag/china.png",
        convert: 7.21,
    },
    {
        id: 7,
        nation: "America",
        currency: "USD",
        flag: "/flag/america.png",
        convert: 21253,
    },
    {
        id: 8,
        nation: "Laos",
        currency: "LAK",
        flag: "/flag/laos.png",
        convert: 0.93,
    },
    {
        id: 9,
        nation: "Malaysia",
        currency: "MYR",
        flag: "/flag/malaysia.png",
        convert: 4.74,
    },
    {
        id: 10,
        nation: "Monaco",
        currency: "UER",
        flag: "/flag/monaco.png",
        convert: 0.93,
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
        convert: 0.93,
    },
];

export default function Navbar() {
    const [hidden, setHidden] = useState(false);
    const [nation, setNation] = useState("America, USD");
    const [flag, setFlag] = useState("/flag/america.png");
    const [currency, setCurrency] = useState("USD");
    const [convert, setConvert] = useState(1);
    const handleHidden = () => {
        setHidden(!hidden);
    };
    const handleCountry = (item: any) => {
        setNation(`${item.nation}, ${item.currency}`);
        setFlag(`${item.flag}`);
        setCurrency(`${item.currency}`);
        setConvert(item.convert);
    };
    return (
        <div className="flex justify-between py-[16px] font-medium">
            <div className="flex gap-x-[6px]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
                <div className="flex gap-x-[28px]">
                    <span>All category</span>
                    <span>Hot offers</span>
                    <span>Gift boxes</span>
                    <span>Projects</span>
                    <span>Menu item</span>
                    <div className="flex">
                        <span>Help</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 p-[3px] text-[#8B96A5]"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m19.5 8.25-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="flex gap-x-[32px] relative cursor-pointer">
                <div className="flex gap-x-[6px]" onClick={handleHidden}>
                    <span>{nation}</span>
                    {hidden == true ? (
                        <div className="absolute top-[40px] left-[-10px] pl-[5px] min-w-[150px] flex flex-col gap-y-[5px] p-[5px] bg-white border-solid border-primary border-[1px]">
                            {country.map((item: any) => (
                                <span
                                    key={item.id}
                                    onClick={() => handleCountry(item)}
                                    className="hover:text-white hover:bg-primary p-[5px] rounded-[6px]"
                                >{`${item.nation}, ${item.currency}`}</span>
                            ))}
                        </div>
                    ) : undefined}

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 p-[3px] text-[#8B96A5]"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                    </svg>
                </div>
                <div className="flex gap-x-[6px]">
                    <span>Ship to</span>
                    <Image src={flag} alt="" width={22} height={16} />

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 p-[3px] text-[#8B96A5]"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}
