import Image from "next/image";

export default function SectionService() {
    return (
        <div className="pt-[30px]">
            <h3 className="text-[24px] font-semibold text-[#1C1C1C] pb-[24px]">
                Our extra services
            </h3>
            <div className="grid grid-cols-4 gap-x-[20px]">
                <div>
                    <div className="relative">
                        <Image
                            src="/service1.png"
                            alt=""
                            width={280}
                            height={120}
                        />
                        <div className="p-[15px] bg-[#D1E7FF] w-fit rounded-[50%] absolute right-[15px] top-[90px] border-solid border-white border-[2px]">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M15.755 14.255H14.965L14.685 13.985C15.665 12.845 16.255 11.365 16.255 9.755C16.255 6.165 13.345 3.255 9.755 3.255C6.165 3.255 3.255 6.165 3.255 9.755C3.255 13.345 6.165 16.255 9.755 16.255C11.365 16.255 12.845 15.665 13.985 14.685L14.255 14.965V15.755L19.255 20.745L20.745 19.255L15.755 14.255ZM9.755 14.255C7.26501 14.255 5.255 12.245 5.255 9.755C5.255 7.26501 7.26501 5.255 9.755 5.255C12.245 5.255 14.255 7.26501 14.255 9.755C14.255 12.245 12.245 14.255 9.755 14.255Z"
                                    fill="#1C1C1C"
                                />
                            </svg>
                        </div>
                    </div>
                    <h3 className="pt-[16px] pl-[20px] pb-[20px] pr-[45px] text-[#1C1C1C] font-medium">
                        Source from Industry Hubs
                    </h3>
                </div>
                <div>
                    <div className="relative">
                        <Image
                            src="/service2.png"
                            alt=""
                            width={280}
                            height={120}
                        />
                        <div className="p-[15px] bg-[#D1E7FF] w-fit rounded-[50%] absolute right-[15px] top-[90px] border-solid border-white border-[2px]">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M20 2H4C3 2 2 2.9 2 4V7.01C2 7.73 2.43 8.35 3 8.7V20C3 21.1 4.1 22 5 22H19C19.9 22 21 21.1 21 20V8.7C21.57 8.35 22 7.73 22 7.01V4C22 2.9 21 2 20 2ZM19 20H5V9H19V20ZM20 7H4V4H20V7Z"
                                    fill="#1C1C1C"
                                />
                                <path d="M15 12H9V14H15V12Z" fill="#1C1C1C" />
                            </svg>
                        </div>
                    </div>
                    <h3 className="pt-[16px] pl-[20px] pb-[20px] pr-[45px] text-[#1C1C1C] font-medium">
                        Customize Your Products
                    </h3>
                </div>
                <div>
                    <div className="relative">
                        <Image
                            src="/service3.png"
                            alt=""
                            width={280}
                            height={120}
                        />
                        <div className="p-[15px] bg-[#D1E7FF] w-fit rounded-[50%] absolute right-[15px] top-[90px] border-solid border-white border-[2px]">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3.51 6.03L11.02 9.25L3.5 8.25L3.51 6.03ZM11.01 14.75L3.5 17.97V15.75L11.01 14.75ZM1.51 3L1.5 10L16.5 12L1.5 14L1.51 21L22.5 12L1.51 3Z"
                                    fill="#1C1C1C"
                                />
                            </svg>
                        </div>
                    </div>
                    <h3 className="pt-[16px] pl-[20px] pb-[20px] pr-[45px] text-[#1C1C1C] font-medium">
                        Fast, reliable shipping by ocean or air
                    </h3>
                </div>
                <div>
                    <div className="relative">
                        <Image
                            src="/service4.png"
                            alt=""
                            width={280}
                            height={120}
                        />
                        <div className="p-[15px] bg-[#D1E7FF] w-fit rounded-[50%] absolute right-[15px] top-[90px] border-solid border-white border-[2px]">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z"
                                    fill="#1C1C1C"
                                />
                            </svg>
                        </div>
                    </div>
                    <h3 className="pt-[16px] pl-[20px] pb-[20px] pr-[45px] text-[#1C1C1C] font-medium">
                        Product monitoring and inspection
                    </h3>
                </div>
            </div>
        </div>
    );
}
