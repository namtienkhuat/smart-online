import Image from "next/image";
import LogicDiscount from "./LogicDiscount";
export default function SectionSale({
    sale,
    handleAddToCart,
    seconds,
    minute,
    hour,
    day,
    discount,
    convert,
}: any) {
    console.log(discount);
    return (
        <div className="grid gap-x-[63px] grid-cols-[1fr_75%] pt-[30px] pb-[20px]">
            <div className="">
                <div className="pt-[20px]">
                    <h3 className="font-[600] text-[20px] text-[#1C1C1C]">
                        Deals and offers
                    </h3>
                    <h3 className="text-[#8B96A5]">Hygiene equipments</h3>
                </div>
                <div className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-x-[6px] pt-[18px]">
                    <div className="bg-[#606060] p-[8px] rounded-[4px] text-center">
                        <h3 className="font-bold text-white">{day}</h3>
                        <h3 className="text-[12px] text-white">Days</h3>
                    </div>
                    <div className="bg-[#606060] p-[8px] rounded-[4px] text-center">
                        <h3 className="font-bold text-white">{hour}</h3>
                        <h3 className="text-[12px] text-white">Hour</h3>
                    </div>
                    <div className="bg-[#606060] p-[8px] rounded-[4px] text-center">
                        <h3 className="font-bold text-white">{minute}</h3>
                        <h3 className="text-[12px] text-white">Min</h3>
                    </div>
                    <div className="bg-[#606060] p-[8px] rounded-[4px] text-center">
                        <h3 className="font-bold text-white">{seconds}</h3>
                        <h3 className="text-[12px] text-white">Sec</h3>
                    </div>
                </div>
            </div>
            <div className="flex justify-between text-center">
                {sale.length > 0 &&
                    sale.map((item: any) => (
                        <div
                            className="border-solid border-[#E0E0E0] border-[1px] rounded-[6px]"
                            key={item.id}
                        >
                            <Image
                                src={item.image}
                                alt=""
                                width={140}
                                height={140}
                                className="rounded-[6px]"
                            />
                            <div className="pt-[11px] pb-[10px]">
                                {" "}
                                <h3>{item.name}</h3>
                                {/* <h3>{item.usd * convert}</h3> */}
                                <LogicDiscount
                                    item={item}
                                    discount={discount}
                                ></LogicDiscount>
                                <button
                                    className="rounded-[6px] text-white bg-[#0D6EFD] w-full py-[5px] max-w-[100px] mx-auto"
                                    onClick={() =>
                                        handleAddToCart(item, discount)
                                    }
                                >
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}
