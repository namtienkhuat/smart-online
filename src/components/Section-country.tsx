import Image from "next/image";

export default function SectionCountry() {
    const country = [
        {
            id: 1,
            name: "Arabic Emirates",
            image: "/country1.png",
            desc: "shopname.ae",
        },
        {
            id: 2,
            name: "Denmark",
            image: "/country2.png",
            desc: "denmark.com.dk",
        },
        {
            id: 3,
            name: "Australia",
            image: "/country3.png",
            desc: "shopname.ae",
        },
        {
            id: 4,
            name: "France",
            image: "/country4.png",
            desc: "shopname.com.fr",
        },
        {
            id: 5,
            name: "United States",
            image: "/country5.png",
            desc: "shopname.ae",
        },
        {
            id: 6,
            name: "Italy",
            image: "/country8.png",
            desc: "shopname.it",
        },

        {
            id: 7,
            name: "Russia",
            image: "/country6.png",
            desc: "shopname.ru",
        },
        {
            id: 8,
            name: "China",
            image: "/country7.png",
            desc: "shopname.ae",
        },
        {
            id: 9,
            name: "Arabic Emirates",
            image: "/country1.png",
            desc: "shopname.ae",
        },

        {
            id: 10,
            name: "Great Britain",
            image: "/country9.png",
            desc: "shopname.co.uk",
        },
    ];
    return (
        <div className="pb-[46px]">
            <h3 className="text-[24px] font-semibold text-[#1C1C1C] pb-[24px]">
                Suppliers by region
            </h3>
            <div className="grid grid-cols-5 grid-rows-2 gap-x-[18px] gap-y-[10px]">
                {country.map((item: any) => (
                    <div key={item.id} className="flex items-center">
                        <Image
                            src={item.image}
                            alt=""
                            width={28}
                            height={20}
                            className="h-[28px]"
                        />
                        <div className="pl-[11px]">
                            <h3 className="font-normal text-[#1C1C1C]">
                                {item.name}
                            </h3>
                            <h3 className="font-normal text-[#8B96A5] text-[13px]">
                                {item.desc}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
