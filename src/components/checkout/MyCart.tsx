import Image from "next/image";

export default function MyCart({
    coupon,
    addCoupon,
    handleDisplayCoupon,
    displayCoupon,
    handleApplyCoupon,
    applyCoupon,
    storeListCart,
    subTotal,
    tax,
    discount,
    total,
    handleSelectCoupon,
    handleCheckOut,
    handleRemove,
    handleMinus,
    handlePlus,
}: any) {
    return (
        <div>
            <div className="pt-[27px] pb-[23px] flex justify-between">
                {" "}
                <h3 className="text-[#1C1C1C] font-semibold text-[24px] ">
                    My Cart: {storeListCart.length}
                </h3>
                <div
                    className="flex gap-x-[10px] cursor-pointer relative"
                    onClick={handleDisplayCoupon}
                >
                    <div className="flex justify-between p-[10px] border border-[#DEE2E7] rounded-[6px] min-w-[210px]">
                        {discount != 0 ? (
                            <button className="min-w-[55px]">
                                {addCoupon}
                            </button>
                        ) : (
                            <button className="min-w-[55px]">
                                {addCoupon}
                            </button>
                        )}
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16.59 8.29504L12 12.875L7.41 8.29504L6 9.70504L12 15.705L18 9.70504L16.59 8.29504Z"
                                fill="#8B96A5"
                            />
                        </svg>
                    </div>
                    {displayCoupon == true ? (
                        <div className="absolute top-[50px] right-[0px] bg-white shadow-sm border border-primary p-[10px] rounded-[6px] min-w-[287px] ">
                            {coupon.map((item: any) => (
                                <div
                                    onClick={() => handleSelectCoupon(item)}
                                    key={item.id}
                                    className="grid grid-cols-2 gap-x-[40px] p-[5px] hover:bg-primary hover:text-white rounded-[6px]"
                                >
                                    <span>Coupon: {item.coupon}</span>
                                    <span>Code: {item.code}</span>
                                </div>
                            ))}
                        </div>
                    ) : undefined}
                </div>
            </div>
            <div className="grid grid-cols-[3fr_1fr] gap-x-[20px]">
                <div className="flex flex-col gap-y-[20px] rounded-[6px] border border-[#DEE2E7] pt-[23px] px-[20px]">
                    {storeListCart.map((item: any) => (
                        <div
                            key={item.id}
                            className="flex justify-between  border-b border-[#DEE2E7]"
                        >
                            <div className="flex gap-x-[10px]">
                                <div className="rounded-[6px] border border-[#DEE2E7] p-[5px] h-fit shadow-sm">
                                    {" "}
                                    <Image
                                        src={item.image}
                                        alt=""
                                        width={70}
                                        height={70}
                                        className="h-[70px]"
                                    />
                                </div>
                                <div className="flex gap-y-[6px] flex-col">
                                    <h3 className="text-[#1C1C1C] font-medium">
                                        {item.name}
                                    </h3>
                                    <div className="leading-[24px] font-normal text-[#8B96A5] flex gap-x-[10px] flex-col">
                                        <span>
                                            Brand: {item.brand}, Category:{" "}
                                            {item.category}, Condition:{" "}
                                            {item.condition}
                                        </span>
                                        <span>Feature: {item.feature}</span>
                                    </div>
                                    <div className="flex gap-x-[8.5px] pb-[20px] pt-[4px]">
                                        <button
                                            onClick={() => handleRemove(item)}
                                            className="rounded-[6px] shadow-sm border border-[#DEE2E7] text-[13px] font-medium text-[#FA3434] py-[7px] px-[10px]"
                                        >
                                            Remove
                                        </button>
                                        <button className="rounded-[6px] shadow-sm border border-[#DEE2E7] text-[13px] font-medium text-[#0D6EFD] py-[7px] px-[10px]">
                                            Save for later
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-[12px]">
                                <h3 className="text-[#1C1C1C] font-medium text-right">
                                    {item.discountPrice}
                                </h3>
                                <div className="flex gap-x-[35px] p-[10px] border border-[#DEE2E7] rounded-[6px]">
                                    <div onClick={() => handleMinus(item)}>
                                        {" "}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 bg-primary text-white rounded-[50%]"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                            />
                                        </svg>
                                    </div>

                                    <button className="min-w-[53px]">
                                        Qty: {item.total}
                                    </button>

                                    <div onClick={() => handlePlus(item)}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 bg-primary text-white rounded-[50%]"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-y-[12px] ">
                    {" "}
                    <div className="flex pt-[20px] pb-[22px] px-[16px] flex-col border border-[#DEE2E7] rounded-[6px]">
                        <h3 className="text-[#505050] font-normal pb-[9px]">
                            Have a coupon?
                        </h3>

                        <div className="rounded-[6px] border border-[#DEE2E7] grid grid-cols-[2fr_1fr] ">
                            <h3 className="text-[#8B96A5] font-normal p-[10px]">
                                {applyCoupon}
                            </h3>
                            <h3
                                className="text-primary cursor-pointer font-medium text-center p-[10px] border-l border-[#DEE2E7]"
                                onClick={handleApplyCoupon}
                            >
                                Apply
                            </h3>
                        </div>
                    </div>
                    <div className="border border-[#DEE2E7] rounded-[6px] ">
                        <div className="grid grid-cols-2 grid-rows-3 pt-[20px] ml-[20px] mr-[16px] pb-[17px] gap-y-[5px] justify-between border-b border-[#E4E4E4]">
                            <span>Subtotal:</span>
                            <span className="text-right">${subTotal}</span>
                            <span>Discount:</span>
                            <span className="text-right">- ${discount}</span>
                            <span>Tax:</span>
                            <span className="text-right">+ {tax}</span>
                        </div>
                        <div className="flex justify-between ml-[20px] mr-[16px] mb-[22px]">
                            <span className="pt-[23px] text-[#1C1C1C] font-semibold">
                                Total:{" "}
                            </span>
                            <span className="pt-[23px] text-[#1C1C1C] font-semibold">
                                ${total}
                            </span>
                        </div>
                        <div className="flex flex-col gap-y-[18px] mx-auto pb-[21px]">
                            <button
                                onClick={handleCheckOut}
                                className="bg-primary mx-[auto] rounded-[6px] text-[#FFFFFF] font-medium text-[18px] px-[82.5px] py-[16px]"
                            >
                                CheckOut
                            </button>
                            <div className="flex gap-x-[8px] mx-auto">
                                <svg
                                    width="34"
                                    height="22"
                                    viewBox="0 0 34 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.5 4C0.5 2.067 2.067 0.5 4 0.5H30C31.933 0.5 33.5 2.067 33.5 4V18C33.5 19.933 31.933 21.5 30 21.5H4C2.067 21.5 0.5 19.933 0.5 18V4Z"
                                        fill="white"
                                        stroke="#EEEEEE"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M11.5797 7H10.4251L9.56419 8.99471L8.64027 7H7.50646V9.77159L6.30963 7H5.25984L4 9.93963H4.75587L5.02879 9.28863H6.49853L6.77144 9.93963H8.19932V7.63L9.22811 9.93963H9.83695L10.8659 7.63V9.93963H11.5797V7ZM27.2437 9.93963H26.236L24.9132 7.73487V9.93963H23.4856L23.2124 9.28863H21.7427L21.4697 9.93963H20.6507C20.3148 9.93963 19.8738 9.85561 19.6221 9.60355C19.391 9.35164 19.265 9.01572 19.265 8.49074C19.265 8.04979 19.328 7.65085 19.6428 7.33593C19.8527 7.10487 20.2308 7 20.7136 7H21.3854V7.63H20.7136C20.4618 7.63 20.3146 7.67201 20.1677 7.79804C20.0417 7.92407 19.9787 8.15497 19.9787 8.46989C19.9787 8.78481 20.0417 9.01587 20.1677 9.1629C20.2726 9.26778 20.4618 9.30979 20.6505 9.30979H20.9656L21.9734 7.00015H23.0233L24.1992 9.77174V7H25.2911L26.53 9.03672V7H27.2437V9.93963ZM26.236 13.4462C26.068 13.2991 25.8159 13.2152 25.417 13.2152H25.0392C24.9358 13.2152 24.8526 13.1946 24.7699 13.1742L24.7663 13.1733C24.6821 13.1312 24.6194 13.0682 24.6194 12.9631C24.6194 12.8581 24.6403 12.7951 24.7243 12.7321C24.7873 12.6902 24.8712 12.6902 24.9972 12.6902H26.2991V12.0602H24.8923C24.1363 12.0602 23.8842 12.5222 23.8842 12.9423C23.8842 13.8069 24.6019 13.8254 25.2277 13.8416C25.2704 13.8427 25.3127 13.8438 25.3543 13.8452C25.48 13.8452 25.5642 13.866 25.606 13.9082C25.6479 13.9501 25.6902 14.0339 25.6902 14.1181C25.6902 14.202 25.6481 14.265 25.606 14.3071C25.543 14.349 25.4592 14.3699 25.3331 14.3699H23.9683V14.9998H25.3331C26.0468 14.9998 26.4459 14.7061 26.4459 14.0762C26.4459 13.7823 26.3621 13.5931 26.236 13.4462ZM29.1967 14.0762C29.1967 14.7062 28.7977 14.9998 28.0837 14.9998H26.7192V14.3699H28.0837C28.2097 14.3699 28.3148 14.349 28.3569 14.3071C28.3988 14.265 28.4408 14.202 28.4408 14.1181C28.4408 14.0339 28.3989 13.9501 28.3569 13.9082C28.3148 13.866 28.2309 13.8452 28.1049 13.8452C28.0632 13.8438 28.0208 13.8427 27.9781 13.8416C27.3526 13.8254 26.6351 13.8069 26.6351 12.9423C26.6351 12.5222 26.908 12.0602 27.6429 12.0602H29.0496V12.6902H27.7478C27.6221 12.6902 27.5379 12.6902 27.4749 12.7321C27.4119 12.7951 27.37 12.8581 27.37 12.9631C27.37 13.0682 27.433 13.1312 27.5169 13.1733L27.5187 13.1738C27.6023 13.1945 27.6858 13.2152 27.7901 13.2152H28.1679C28.5668 13.2152 28.8189 13.2991 28.9869 13.4462C29.1127 13.5931 29.1967 13.7823 29.1967 14.0762ZM21.8898 14.3912H23.5483V15H21.1968V12.0605H23.5483V12.6694H21.8898V13.2155H23.5065V13.8032H21.8898V14.3912ZM20.4408 12.2076C20.2097 12.0815 19.9368 12.0604 19.5799 12.0604H17.9633V14.9998H18.677V13.9291H19.433C19.6848 13.9291 19.832 13.9502 19.937 14.0551C20.063 14.202 20.063 14.454 20.063 14.6431V14.9998H20.7557V14.4329C20.7557 14.16 20.7349 14.0339 20.6509 13.887C20.5878 13.8029 20.4621 13.698 20.2941 13.635C20.4828 13.5723 20.798 13.3202 20.798 12.8581C20.7979 12.5223 20.6719 12.3333 20.4408 12.2076ZM14.2046 12.0604H16.4514C16.9974 12.0604 17.6274 12.2284 17.6275 13.0263C17.6275 13.8452 17.0184 14.0132 16.4095 14.0132H15.5276V14.9998H14.1628L13.3019 14.0339L12.3989 14.9998H9.60619V12.0604H12.4408L13.3017 13.0263L14.2046 12.0604ZM19.8738 13.2784C19.7689 13.3202 19.6639 13.3202 19.5379 13.3202L18.677 13.3414V12.6692H19.5379C19.6639 12.6692 19.79 12.6692 19.8738 12.7322C19.958 12.7744 20.0207 12.8583 20.0207 12.9843C20.0207 13.1103 19.958 13.2153 19.8738 13.2784ZM15.5275 13.4252H16.4514C16.7033 13.4252 16.8713 13.2784 16.8713 13.0263C16.8713 12.7744 16.7034 12.6692 16.4514 12.6692H15.5275V13.4252ZM13.7427 13.5301L14.8345 12.3754V14.7481L13.7427 13.5301ZM10.2991 14.3912H12.0419L12.8397 13.5303L12.0629 12.6694H10.2991V13.2155H11.8528V13.8032H10.2991V14.3912ZM18.1943 7H18.908V9.93963H18.1943V7ZM17.4172 7.12603C17.1861 7 16.9343 7 16.5774 7H14.9605V9.93963H15.6533V8.86868H16.4092C16.6613 8.86868 16.8293 8.88969 16.9342 8.99471C17.045 9.12403 17.042 9.3346 17.0397 9.49769V9.49777C17.0394 9.52007 17.0391 9.54149 17.0391 9.56169V9.93963H17.7528V9.35164C17.7528 9.09974 17.7319 8.97371 17.627 8.82667C17.564 8.74265 17.438 8.63763 17.2911 8.57476C17.4799 8.49074 17.7951 8.25984 17.7951 7.79788C17.7952 7.46196 17.6481 7.27291 17.4172 7.12603ZM12.8187 9.33079H14.4565V9.93978H12.1049V7.00015H14.4565V7.60899H12.8187V8.13396H14.4355V8.7428H12.8187V9.33079ZM22.4775 7.50397L22.9606 8.65878H21.9947L22.4775 7.50397ZM16.8713 8.19698C16.7665 8.25999 16.6614 8.25999 16.5144 8.25999H15.6533V7.60914H16.5142C16.6403 7.60914 16.787 7.60914 16.8712 7.65115C16.955 7.71417 16.9972 7.79819 16.9972 7.92407C16.9972 8.04994 16.9552 8.15482 16.8713 8.19698ZM5.76366 7.50397L5.28069 8.65878H6.24662L5.76366 7.50397Z"
                                        fill="#0077A6"
                                    />
                                </svg>
                                <svg
                                    width="34"
                                    height="22"
                                    viewBox="0 0 34 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.5 4C0.5 2.067 2.067 0.5 4 0.5H30C31.933 0.5 33.5 2.067 33.5 4V18C33.5 19.933 31.933 21.5 30 21.5H4C2.067 21.5 0.5 19.933 0.5 18V4Z"
                                        fill="white"
                                        stroke="#EEEEEE"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M15.0897 10.8526C15.0897 9.01564 15.9384 7.38017 17.2598 6.32178C16.2854 5.54133 15.0545 5.0741 13.7149 5.0741C10.5587 5.0741 8 7.66122 8 10.8526C8 14.0439 10.5587 16.631 13.7149 16.631C15.0545 16.631 16.2854 16.1638 17.2598 15.3833C15.9384 14.3249 15.0897 12.6895 15.0897 10.8526Z"
                                        fill="#EB001B"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M15.0898 10.8525C15.0898 12.6895 15.9385 14.3249 17.26 15.3833C18.5813 14.3249 19.43 12.6895 19.43 10.8525C19.43 9.01563 18.5813 7.38017 17.26 6.32178C15.9385 7.38017 15.0898 9.01563 15.0898 10.8525Z"
                                        fill="#FF5E00"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M20.8046 5.0741C19.465 5.0741 18.2341 5.54133 17.2598 6.32178C18.5811 7.38025 19.4298 9.01564 19.4298 10.8526C19.4298 12.6895 18.5811 14.3249 17.2598 15.3833C18.2341 16.1638 19.465 16.631 20.8046 16.631C23.9608 16.631 26.5195 14.0439 26.5195 10.8526C26.5195 7.66122 23.9608 5.0741 20.8046 5.0741Z"
                                        fill="#F79E1C"
                                    />
                                </svg>
                                <svg
                                    width="34"
                                    height="22"
                                    viewBox="0 0 34 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.5 4C0.5 2.067 2.067 0.5 4 0.5H30C31.933 0.5 33.5 2.067 33.5 4V18C33.5 19.933 31.933 21.5 30 21.5H4C2.067 21.5 0.5 19.933 0.5 18V4Z"
                                        fill="white"
                                        stroke="#EEEEEE"
                                    />
                                    <path
                                        d="M21.099 5.05579C20.4616 4.31682 19.3092 4 17.835 4H13.5563C13.255 4.00001 12.9984 4.22284 12.9512 4.5255L11.1697 16.0167C11.1343 16.2433 11.3068 16.4485 11.5326 16.4485H14.1741L14.8375 12.1691L14.8169 12.3031C14.8641 12.0007 15.1185 11.7775 15.4197 11.7775H16.6749C19.1408 11.7775 21.0716 10.7589 21.6357 7.81228C21.6524 7.72513 21.6669 7.64031 21.6794 7.55744C21.6083 7.5191 21.6083 7.5191 21.6794 7.55744C21.8474 6.46833 21.6783 5.72698 21.099 5.05579Z"
                                        fill="#27346A"
                                    />
                                    <path
                                        d="M15.8482 7.1651C15.9204 7.13013 15.9994 7.11201 16.0794 7.11206H19.4337C19.8309 7.11206 20.2014 7.13835 20.54 7.19377C20.6347 7.20913 20.729 7.22747 20.8226 7.24876C20.9553 7.27854 21.0864 7.31499 21.2156 7.35797C21.382 7.4145 21.537 7.48034 21.6795 7.55744C21.8474 6.46791 21.6783 5.72698 21.099 5.05579C20.4612 4.31682 19.3092 4 17.835 4H13.556C13.2547 4 12.9984 4.22306 12.9512 4.5255L11.1697 16.0163C11.1343 16.2432 11.3068 16.4481 11.5322 16.4481H14.1741L15.5504 7.57177C15.5779 7.39466 15.6892 7.24261 15.8482 7.1651Z"
                                        fill="#27346A"
                                    />
                                    <path
                                        d="M21.6358 7.81221C21.0718 10.7584 19.1411 11.7775 16.6751 11.7775H15.4196C15.1183 11.7775 14.8639 12.0006 14.8171 12.3031L13.9918 17.6239C13.961 17.8222 14.1118 18.0019 14.309 18.0019H16.5357C16.7992 18.0019 17.0236 17.8069 17.0647 17.5422L17.0864 17.4268L17.5061 14.7218L17.5331 14.5723C17.5743 14.3076 17.7986 14.1127 18.0621 14.1126H18.3954C20.5524 14.1126 22.2414 13.2214 22.7349 10.6438C22.9409 9.56669 22.8343 8.66737 22.2894 8.03569C22.1241 7.84437 21.9188 7.68635 21.6796 7.55737C21.6667 7.64066 21.6526 7.72506 21.6358 7.81221Z"
                                        fill="#2790C3"
                                    />
                                    <path
                                        d="M21.0893 7.31802C21.0014 7.2919 20.9126 7.26878 20.8231 7.24869C20.7295 7.22774 20.6352 7.20953 20.5405 7.19406C20.2016 7.13828 19.8314 7.11194 19.4338 7.11194H16.0799C15.9998 7.11176 15.9208 7.13003 15.8487 7.1654C15.6895 7.24268 15.5781 7.39484 15.5509 7.57207L14.838 12.1691L14.8174 12.3031C14.8643 12.0006 15.1187 11.7775 15.4199 11.7775H16.6755C19.1414 11.7775 21.0722 10.7589 21.6362 7.8122C21.653 7.72506 21.6671 7.6406 21.68 7.55736C21.5372 7.48068 21.3826 7.41443 21.2161 7.35827C21.1741 7.3441 21.1318 7.33068 21.0894 7.31802"
                                        fill="#1F264F"
                                    />
                                </svg>
                                <svg
                                    width="34"
                                    height="22"
                                    viewBox="0 0 34 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.5 4C0.5 2.067 2.067 0.5 4 0.5H30C31.933 0.5 33.5 2.067 33.5 4V18C33.5 19.933 31.933 21.5 30 21.5H4C2.067 21.5 0.5 19.933 0.5 18V4Z"
                                        fill="white"
                                        stroke="#EEEEEE"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M21.361 7.33436L21.0832 8.98113C20.2502 8.51036 18.3544 8.39897 18.3542 9.26605C18.3542 9.61051 18.7831 9.84741 19.3001 10.1329C20.0842 10.566 21.0708 11.1108 21.0708 12.3124C21.0708 14.2324 19.0668 14.9378 17.7384 14.9378C16.4104 14.9378 15.5412 14.5048 15.5412 14.5048L15.8306 12.783C16.6276 13.4392 19.0426 13.6256 19.0426 12.585C19.0426 12.1478 18.5672 11.8899 18.0159 11.5908C17.2553 11.1783 16.3502 10.6873 16.3502 9.53867C16.3502 7.43303 18.6442 7 19.6102 7C20.5038 7 21.361 7.33436 21.361 7.33436ZM27.856 14.8055H26.0686L25.8406 13.6665H23.366L22.9602 14.8055H20.931L23.8342 7.70831C23.8342 7.70831 24.0102 7.13682 24.7328 7.13682H26.2976L27.856 14.8055ZM10.7576 7.13703L8.9018 12.4115L8.6822 11.2757L8.6824 11.2761L8.0274 7.82749C8.0274 7.82749 7.9482 7.13703 7.104 7.13703H4.036L4 7.26687C4 7.26687 4.9382 7.46708 6.0362 8.14338L7.7274 14.8057H9.7556L12.8526 7.13703H10.7576ZM14.3418 14.8055H12.3952L13.6118 7.13703H15.5586L14.3418 14.8055ZM23.9266 12.0929L24.9494 9.22318L25.5248 12.0929H23.9266Z"
                                        fill="#2566AF"
                                    />
                                    <path
                                        d="M8.6824 11.2759L8.0274 7.8273C8.0274 7.8273 7.9482 7.13684 7.104 7.13684H4.036L4 7.26669C4 7.26669 5.4746 7.58012 6.889 8.75448C8.2414 9.87694 8.6824 11.2759 8.6824 11.2759Z"
                                        fill="#E6A540"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
