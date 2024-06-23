import Image from "next/image";

export default function Items({
    searchResults,
    handleAddToCart,
    currency,
    convert,
}: any) {
    return (
        <div className="pb-[20px]">
            {" "}
            <div className="grid grid-cols-[24%_1fr]">
                <div className="bg-[url('/homeandoutdoor.png')]  pl-[20px]">
                    <h3
                        className="font-semibold text-[#1C1C1C] text-[20px] pt-[20px]
                   "
                    >
                        Home and outdoor
                    </h3>
                    <button className="pt-[18px] font-medium px-[16px] py-[10.5px] rounded-[6px] bg-white border-solid border-white border-[1px] shadow-[#38383814]">
                        Source now
                    </button>
                </div>
                <div className="grid grid-cols-[1fr_1fr_1fr_1fr] grid-rows-[1fr_1fr]">
                    {searchResults.length > 0 &&
                        searchResults.map((item: any) => (
                            <div
                                className="flex justify-between border-solid border-[#E0E0E0] border-[1px]"
                                key={item.id}
                            >
                                <div className="pl-[16px] pt-[20px]">
                                    <h3 className="pb-[9px]">{item.name}</h3>
                                    <div className="text-[#8B96A5] pb-[46px] flex flex-col">
                                        <div>
                                            <h3>From</h3>{" "}
                                            <h3>{`${currency} ${Math.ceil(
                                                item.usd * convert
                                            )}`}</h3>
                                        </div>
                                        <button
                                            className="rounded-[6px] text-white bg-[#0D6EFD] p-[5px] w-fit"
                                            onClick={() =>
                                                handleAddToCart(item)
                                            }
                                        >
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                                <Image
                                    src={item.image}
                                    alt=""
                                    width={82}
                                    height={82}
                                    className="h-[82px] self-end
                            "
                                />
                            </div>
                        ))}
                </div>
            </div>{" "}
            <div className="grid grid-cols-[24%_1fr] pt-[20px]">
                <div className="bg-[url('/consumer.png')]  pl-[20px]">
                    <h3
                        className="font-semibold text-[#1C1C1C] text-[20px] pt-[20px]
                   "
                    >
                        Consumer electronics and gadgets
                    </h3>
                    <button className="pt-[18px] font-medium px-[16px] py-[10.5px] rounded-[6px] bg-white border-solid border-white border-[1px] shadow-[#38383814]">
                        Source now
                    </button>
                </div>
                <div className="grid grid-cols-[1fr_1fr_1fr_1fr] grid-rows-[1fr_1fr]">
                    <div className="flex justify-between border-solid border-[#E0E0E0] border-[1px]">
                        <div className="pl-[16px] pt-[20px]">
                            <h3 className="pb-[9px]">Sofa chair</h3>
                            <div className="text-[#8B96A5] pb-[46px]">
                                <h3>From</h3>
                                <h3>USD 19</h3>
                            </div>
                        </div>
                        <Image
                            src="/sofa.png"
                            alt=""
                            width={82}
                            height={82}
                            className="h-[82px] self-end
                            "
                        />
                    </div>
                    <div className="flex justify-between border-solid border-[#E0E0E0] border-[1px]">
                        <div className="pl-[16px] pt-[20px]">
                            <h3 className="pb-[9px]">Sofa chair</h3>
                            <div className="text-[#8B96A5] pb-[46px]">
                                <h3>From</h3>
                                <h3>USD 19</h3>
                            </div>
                        </div>
                        <Image
                            src="/lamp.png"
                            alt=""
                            width={82}
                            height={82}
                            className="h-[82px] self-end
                            "
                        />
                    </div>
                    <div className="flex justify-between border-solid border-[#E0E0E0] border-[1px]">
                        <div className="pl-[16px] pt-[20px]">
                            <h3 className="pb-[9px]">Sofa chair</h3>
                            <div className="text-[#8B96A5] pb-[46px]">
                                <h3>From</h3>
                                <h3>USD 19</h3>
                            </div>
                        </div>
                        <Image
                            src="/dem.png"
                            alt=""
                            width={82}
                            height={82}
                            className="h-[82px] self-end
                            "
                        />
                    </div>
                    <div className="flex justify-between border-solid border-[#E0E0E0] border-[1px]">
                        <div className="pl-[16px] pt-[20px]">
                            <h3 className="pb-[9px]">Sofa chair</h3>
                            <div className="text-[#8B96A5] pb-[46px]">
                                <h3>From</h3>
                                <h3>USD 19</h3>
                            </div>
                        </div>
                        <Image
                            src="/caibinh.png"
                            alt=""
                            width={82}
                            height={82}
                            className="h-[82px] self-end
                            "
                        />
                    </div>
                    <div className="flex justify-between border-solid border-[#E0E0E0] border-[1px]">
                        <div className="pl-[16px] pt-[20px]">
                            <h3 className="pb-[9px]">Sofa chair</h3>
                            <div className="text-[#8B96A5] pb-[46px]">
                                <h3>From</h3>
                                <h3>USD 19</h3>
                            </div>
                        </div>
                        <Image
                            src="/mayxay.png"
                            alt=""
                            width={82}
                            height={82}
                            className="h-[82px self-end
                                "
                        />
                    </div>
                    <div className="flex justify-between border-solid border-[#E0E0E0] border-[1px]">
                        <div className="pl-[16px] pt-[20px]">
                            <h3 className="pb-[9px]">Sofa chair</h3>
                            <div className="text-[#8B96A5] pb-[46px]">
                                <h3>From</h3>
                                <h3>USD 19</h3>
                            </div>
                        </div>
                        <Image
                            src="/maypha.png"
                            alt=""
                            width={82}
                            height={82}
                            className="h-[82px] self-end
                            "
                        />
                    </div>
                    <div className="flex justify-between border-solid border-[#E0E0E0] border-[1px]">
                        <div className="pl-[16px] pt-[20px]">
                            <h3 className="pb-[9px]">Sofa chair</h3>
                            <div className="text-[#8B96A5] pb-[46px]">
                                <h3>From</h3>
                                <h3>USD 19</h3>
                            </div>
                        </div>
                        <Image
                            src="/giado.png"
                            alt=""
                            width={82}
                            height={82}
                            className="h-[82px] self-end
                            "
                        />
                    </div>
                    <div className="flex justify-between border-solid border-[#E0E0E0] border-[1px]">
                        <div className="pl-[16px] pt-[20px]">
                            <h3 className="pb-[9px]">Sofa chair</h3>
                            <div className="text-[#8B96A5] pb-[46px]">
                                <h3>From</h3>
                                <h3>USD 19</h3>
                            </div>
                        </div>
                        <Image
                            src="/chaucay.png"
                            alt=""
                            width={82}
                            height={82}
                            className="h-[82px] self-end
                            "
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
