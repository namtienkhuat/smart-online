import Image from "next/image";
import { useState } from "react";
import Login from "./Login-Form";

const type = [
    { id: 1, type: "Automobiles" },
    { id: 2, type: "Clothes and wear" },
    { id: 3, type: "Home interiors" },
    { id: 4, type: "Computer and tech" },
    { id: 5, type: "Tools, equipments" },
    { id: 6, type: "Sports and outdoor" },
    { id: 7, type: "Animal and pets" },
    { id: 8, type: "Machinery tools" },
    { id: 9, type: "More category" },
];
export default function SectionMain({
    handleFocus,
    focus,
    handleDisplayLogin,
    change,
    handleStatus,
    email,
    handleEmail,
    pass,
    handlePass,
    error,
    profile,
}: any) {
    return (
        <div>
            {" "}
            <div className="grid grid-cols-[22%_auto_18%] gap-x-[15px] py-[20px]">
                <div className="flex flex-col pt-[11px] px-[10px] pb-[10px] gap-y-[21px]">
                    {/* <span className="font-[500] text-[#1C1C1C] cursor-pointer text-gray-600">Automobiles</span> */}

                    {type.length > 0 &&
                        type.map((item: any) => (
                            <button
                                key={item.id}
                                className={
                                    focus != item.type
                                        ? "font-[400] text-gray-600 flex self-start flex-col"
                                        : "font-[500] text-[#1C1C1C] flex self-start flex-col"
                                }
                                onClick={() => handleFocus(item)}
                            >
                                {item.type}
                            </button>
                        ))}
                </div>
                <div className="bg-[url('/banner.jpg')]">
                    <div className="pt-[53px] pl-[45px]">
                        {" "}
                        <h3 className="font-[400] text-[28px] text-white">
                            Latest trending
                        </h3>
                        <h3 className="pb-[17px] font-bold text-[32px] text-white">
                            Electronic items
                        </h3>
                        <button className=" px-[16px] py-[10.5px] rounded-[6px] bg-white text-[#1C1C1C] font-[500]">
                            Learn more
                        </button>
                    </div>
                </div>
                <div className="grid gap-y-[10px] grid-rows-[150px_1fr_1fr]">
                    <div className="pb-[12px]">
                        <div className="flex justify-center gap-x-[9px] pb-[13px] pt-[17px]">
                            <Image
                                src="/avatar.svg"
                                alt=""
                                width={44}
                                height={44}
                            />
                            <div>
                                <h3>
                                    Hi,{" "}
                                    {profile.name == undefined
                                        ? "user"
                                        : profile.name}
                                </h3>
                                <h3></h3>lets get started
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-[7px]">
                            <button className="py-[7px] px-[62px] font-[500] text-[13px] bg-[#0D6EFD] text-white rounded-[6px]">
                                Join now
                            </button>
                            <button
                                className="py-[7px] px-[62px] font-[500] text-[13px] text-primary bg-white rounded-[6px]"
                                onClick={handleDisplayLogin}
                            >
                                {profile.name == undefined
                                    ? "Log in"
                                    : "Log out"}
                            </button>
                        </div>
                    </div>
                    <h3 className="pt-[16px] pr-[40px] pb-[22px] pl-[16px] bg-[#F38332] text-white rounded-[6px]">
                        Get US $10 off with a new supplier
                    </h3>
                    <h3 className="pt-[16px] pr-[40px] pb-[22px] pl-[16px] bg-[#55BDC3] text-white rounded-[6px]">
                        Send quotes with supplier preferences
                    </h3>
                </div>
            </div>
            {change == true ? (
                <Login
                    handleStatus={handleStatus}
                    email={email}
                    handleEmail={handleEmail}
                    pass={pass}
                    handlePass={handlePass}
                    error={error}
                ></Login>
            ) : undefined}
        </div>
    );
}
