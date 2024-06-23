export default function Newsletter() {
    return (
        <div>
            <div className="mx-auto bg-[#EFF2F4]">
                <div className="text-center pt-[38px]">
                    <h3 className="text-[20px] font-semibold text-[#1C1C1C]">
                        Subscribe on our newsletter
                    </h3>
                    <p className="text-[#606060] font-normal">
                        Get daily news on upcoming offers from many suppliers
                        all over the world
                    </p>
                </div>
                <div className="flex justify-center gap-x-[8px] pt-[21px] pb-[39px]">
                    <div className="flex bg-white items-center border-[1px] border-solid border-[#DEE2E7] rounded-[6px] gap-x-[6px] pl-[8px]">
                        <svg
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20.1666 5.50002C20.1666 4.49169 19.3416 3.66669 18.3333 3.66669H3.66665C2.65831 3.66669 1.83331 4.49169 1.83331 5.50002V16.5C1.83331 17.5084 2.65831 18.3334 3.66665 18.3334H18.3333C19.3416 18.3334 20.1666 17.5084 20.1666 16.5V5.50002ZM18.3333 5.50002L11 10.0834L3.66665 5.50002H18.3333ZM18.3333 16.5H3.66665V7.33335L11 11.9167L18.3333 7.33335V16.5Z"
                                fill="#8B96A5"
                            />
                        </svg>
                        <input type="text" placeholder="Email" />
                    </div>
                    <button className="px-[16px] py-[10.5px] rounded-[6px] font-medium bg-[#127FFF] text-white">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
}
