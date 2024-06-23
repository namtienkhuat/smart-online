export default function SectionInquiry() {
    return (
        <div className="bg-[url('/section-inquiry.png')] flex justify-between gap-x-[178px] h-[420px] rounded-[6px] ">
            <div className="pt-[40px] pl-[40px]">
                <h3 className="font-semibold text-[32px] text-white leading-[38.73px]">
                    An easy way to send requests to all suppliers
                </h3>
                <h3 className="font-normal text-white pt-[13px] leading-[24px]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt.
                </h3>
            </div>
            <div className=" mt-[30px] mr-[31px] mb-[44px] bg-white flex flex-col pl-[20px] rounded-[6px]">
                <h3 className="pt-[22px] font-semibold text-[20px] text-[#1C1C1C]">
                    Send quote to suppliers
                </h3>
                <input
                    type="text"
                    placeholder="What item you need?"
                    className="pt-[11px] pb-[10px] pl-[10px] pr-[270px]"
                />
                <input
                    type="text"
                    placeholder="Type more details"
                    className="pt-[11px] pb-[43px] pl-[11px] pr-[37px]"
                />
                <div className="flex w-fit">
                    <input
                        type="text"
                        placeholder="Quantity"
                        className="pt-[11px] pb-[11px] pl-[11px]"
                    />
                    <div className="flex items-center">
                        <h3 className="pt-[11px] pr-[41px] pb-[10px] pl-[10px]">
                            Psc
                        </h3>
                        <svg
                            width="12"
                            height="8"
                            viewBox="0 0 12 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="mx-[6px] mr-[16.3px] ml-[8.3px]"
                        >
                            <path
                                d="M10.59 0.295013L6 4.87501L1.41 0.295013L0 1.70501L6 7.70501L12 1.70501L10.59 0.295013Z"
                                fill="#8B96A5"
                            />
                        </svg>
                    </div>
                </div>
                <button className="rounded-[6px] bg-[#0D6EFD] mb-[25px] w-fit py-[10.5px] px-[16px] text-white">
                    Send inquiry
                </button>
            </div>
        </div>
    );
}
