import Image from "next/image";
export default function Navbar({
    nation,
    flag,
    country,
    hidden,
    handleHidden,
    handleCountry,
}: any) {
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
