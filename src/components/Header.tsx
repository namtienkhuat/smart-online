"use client";
import Image from "next/image";
export default function Header({
    search,
    handleChange,
    addProduct,
    handleDisplayCart,
    displayCart,
    handleAddOrder,
    displayOrder,
    handleDisplayOrder,
    listOrder,
    profile,
    display,
    handleDisplayProfile,
}: any) {
    return (
        <div className="flex justify-between items-center">
            {" "}
            <Image src="/logo.svg" alt="" width={231} height={45} />
            <div className="flex border-[1px] border-[#0D6EFD] border-solid rounded-[6px] items-center overflow-hidden h-[40px]">
                <input
                    type="text"
                    value={search}
                    onChange={handleChange}
                    placeholder="Search"
                    className="pt-[11px] pr-[5px] pb-[10px] pl-[10px]"
                />
                <div className="flex items-center h-full border-l-[1px] border-[#0D6EFD] border-solid ">
                    <span className="pl-[9px]">All category</span>
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
                    <span className="text-white bg-primary px-[23px] font-medium h-full flex items-center">
                        Search
                    </span>
                </div>
            </div>
            <div className="flex gap-x-[18px] ">
                <div
                    className="text-[#8B96A5] flex flex-col gap-y-[7px] items-center justify-between cursor-pointer relative"
                    onClick={handleDisplayProfile}
                >
                    <svg
                        width="20"
                        height="19"
                        viewBox="0 0 20 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10 10C12.7625 10 15 7.7625 15 5C15 2.2375 12.7625 0 10 0C7.2375 0 5 2.2375 5 5C5 7.7625 7.2375 10 10 10ZM10 11.5C6.6625 11.5 0 13.175 0 16.5V17.75C0 18.4375 0.5625 19 1.25 19H18.75C19.4375 19 20 18.4375 20 17.75V16.5C20 13.175 13.3375 11.5 10 11.5Z"
                            fill="#8B96A5"
                        />
                    </svg>

                    <span className="text-[12px] font-normal">Profile</span>
                    {display % 2 == 1 ? (
                        <div className="absolute z-10 bg-white top-[50px] min-w-[400px] right-0 rounded-[6px] border-solid border-primary border-[1px]">
                            <div className="grid grid-cols-[auto_auto] p-[10px] items-center">
                                <Image
                                    src={profile.image}
                                    alt=""
                                    width={100}
                                    height={100}
                                />
                                <div className="flex flex-col gap-y-[10px]">
                                    <h3>Name: {profile.fullName}</h3>
                                    <h3>Email: {profile.email}</h3>
                                    <h3>Date: {profile.date}</h3>
                                    <h3>Code: {profile.code}</h3>
                                </div>
                            </div>
                        </div>
                    ) : undefined}
                </div>

                <div className="text-[#8B96A5] flex flex-col gap-y-[7px] items-center justify-between cursor-pointer">
                    {" "}
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M18 0H2C0.9 0 0.01 0.9 0.01 2L0 20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM5 7H15C15.55 7 16 7.45 16 8C16 8.55 15.55 9 15 9H5C4.45 9 4 8.55 4 8C4 7.45 4.45 7 5 7ZM11 12H5C4.45 12 4 11.55 4 11C4 10.45 4.45 10 5 10H11C11.55 10 12 10.45 12 11C12 11.55 11.55 12 11 12ZM15 6H5C4.45 6 4 5.55 4 5C4 4.45 4.45 4 5 4H15C15.55 4 16 4.45 16 5C16 5.55 15.55 6 15 6Z"
                            fill="#8B96A5"
                        />
                    </svg>
                    <span className="text-[12px] font-normal">Message</span>
                </div>

                <div
                    className="text-[#8B96A5] flex flex-col gap-y-[7px] items-center justify-between cursor-pointer relative"
                    onClick={handleDisplayOrder}
                >
                    <div className="relative">
                        {" "}
                        <svg
                            width="20"
                            height="18"
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M11.35 17.1302C10.59 17.8202 9.42003 17.8202 8.66003 17.1202L8.55003 17.0202C3.30003 12.2702 -0.129969 9.16017 3.10168e-05 5.28017C0.060031 3.58017 0.930031 1.95017 2.34003 0.990166C4.98003 -0.809834 8.24003 0.0301659 10 2.09017C11.76 0.0301659 15.02 -0.819834 17.66 0.990166C19.07 1.95017 19.94 3.58017 20 5.28017C20.14 9.16017 16.7 12.2702 11.45 17.0402L11.35 17.1302Z"
                                fill="#8B96A5"
                            />
                        </svg>
                        {listOrder.length > 0 ? (
                            <h3 className="absolute top-[-10px] right-[-10px] rounded-[6px] bg-primary w-[20px] text-[10px] text-white font-bold text-center py-[2px]">
                                {listOrder.length}
                            </h3>
                        ) : undefined}
                    </div>
                    <span className="text-[12px] font-normal">Orders</span>
                    {displayOrder && listOrder.length > 0 ? (
                        <div className="absolute z-10 bg-white top-[50px] min-w-[300px] right-0 rounded-[6px]">
                            {listOrder.map((item: any) => (
                                <div
                                    key={item.id}
                                    className=" hover:bg-primary hover:text-white px-[5px]"
                                >
                                    <div className="grid grid-cols-[1fr_auto]">
                                        {/* <h3>Products: {item.product.length}</h3> */}
                                        <h3>Price: {item.totalPrice}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : undefined}
                </div>

                <div
                    className="text-[#8B96A5] flex flex-col gap-y-[7px] items-center justify-between cursor-pointer relative"
                    onClick={handleDisplayCart}
                >
                    <div className="relative">
                        {" "}
                        <svg
                            width="21"
                            height="21"
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M6.29989 16.7997C5.14491 16.7997 4.21043 17.7447 4.21043 18.8997C4.21043 20.0546 5.14491 20.9996 6.29989 20.9996C7.45487 20.9996 8.39985 20.0546 8.39985 18.8997C8.39985 17.7447 7.45487 16.7997 6.29989 16.7997ZM0 1.04998C0 1.62747 0.472492 2.09996 1.04998 2.09996H2.09996L5.8799 10.0693L4.46242 12.6313C3.69593 14.0383 4.70392 15.7497 6.29989 15.7497H17.8497C18.4272 15.7497 18.8997 15.2772 18.8997 14.6997C18.8997 14.1223 18.4272 13.6498 17.8497 13.6498H6.29989L7.45487 11.5498H15.2772C16.0647 11.5498 16.7577 11.1193 17.1147 10.4683L20.8736 3.65394C21.2621 2.96095 20.7581 2.09996 19.9601 2.09996H4.42042L3.71693 0.598489C3.54894 0.230996 3.17094 0 2.77195 0H1.04998C0.472492 0 0 0.472492 0 1.04998ZM16.7997 16.7997C15.6447 16.7997 14.7102 17.7447 14.7102 18.8997C14.7102 20.0546 15.6447 20.9996 16.7997 20.9996C17.9547 20.9996 18.8997 20.0546 18.8997 18.8997C18.8997 17.7447 17.9547 16.7997 16.7997 16.7997Z"
                                fill="#8B96A5"
                            />
                        </svg>
                        {addProduct.length > 0 ? (
                            <h3 className="absolute top-[-10px] right-[-10px] rounded-[6px] bg-primary w-[20px] text-[10px] text-white font-bold text-center py-[2px]">
                                {addProduct.length}
                            </h3>
                        ) : undefined}
                    </div>
                    <span className="text-[12px] font-normal">My cart</span>

                    {displayCart % 2 == 1 && addProduct.length > 0 ? (
                        <div className="absolute z-10 bg-white top-[50px] min-w-[300px] right-0 rounded-[6px]">
                            {addProduct.map((item: any) => (
                                <div
                                    key={item.id}
                                    className="grid grid-cols-[60%_40%] items-center hover:bg-primary hover:text-white px-[5px]"
                                >
                                    <div className="flex py-[10px] pr-[10px] items-center">
                                        <Image
                                            src={item.image}
                                            alt=""
                                            width={30}
                                            height={22}
                                        />
                                        <h3 className="pl-[5px]">
                                            {item.name}
                                        </h3>
                                    </div>
                                    <div className="grid grid-cols-[auto_1fr_auto]">
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
                                                d="M5 12h14"
                                            />
                                        </svg>
                                        <h3>Total: {item.total}</h3>
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
                                                d="M12 4.5v15m7.5-7.5h-15"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            ))}
                            <button
                                className="rounded-[6px] p-[5px] bg-primary w-full text-white font-medium my-[10px] min-w-[150px] mx-auto"
                                onClick={() => handleAddOrder(addProduct)}
                            >
                                Payment
                            </button>
                        </div>
                    ) : undefined}
                </div>
            </div>
        </div>
    );
}
