import Image from "next/image";
export default function SectionRecommend({ recommend }: any) {
    return (
        <div className="pt-[30px]">
            <h3 className="pb-[25px] font-semibold text-[24px]">
                Recommended items
            </h3>
            <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-[20px]">
                {" "}
                {recommend.length > 0 &&
                    recommend.map((item: any) => (
                        <div
                            key={item.id}
                            className="border-solid border-[#E0E0E0] border-[1px] rounded-[6px]"
                        >
                            <Image
                                src={item.image}
                                alt=""
                                width={150}
                                height={170}
                                className="mx-auto"
                            />
                            <div className="pl-[16px] pt-[29px]">
                                <h3 className="font-medium text-[#1C1C1C]">
                                    {item.price}
                                </h3>
                                <p className="text-[#8B96A5] font-normal leading-[24px]">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}
