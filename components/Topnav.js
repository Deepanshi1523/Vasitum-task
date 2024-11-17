"use client";
import { useState } from "react";
import Image from "next/image";
import { FiBell, FiMessageSquare, FiSearch, FiChevronDown } from "react-icons/fi";
import user from "../public/user.png";

const Topnav = () => {

    return (
        <div className="w-[90%] lg:w-[96%] flex justify-between py-1 lg:py-2 z-50 lg:border-b-[0.2rem] lg:border-[#F1F1F1] mx-2 lg:mx-8">
            <div className="flex items-center w-[30%]">
                <FiSearch className="text-[#B3B3B3] mr-2 lg:hidden" size={24}/>
                <div className="items-center bg-[#F0F0F0] px-3 py-2 rounded-md hidden lg:flex">
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-transparent focus:outline-none text-[B3B3B3] placeholder-[#B2B2B2]"
                    />
                    <FiSearch className="text-[#B3B3B3] mr-2" />
                </div>
            </div>

            <div className="flex items-center space-x-6 lg:space-x-8">
                <FiBell className="text-[#B2B2B2] cursor-pointer" size={24} />
                <FiMessageSquare className="text-[#B2B2B2] cursor-pointer" size={24} />

                <div className="flex items-center space-x-2 cursor-pointer">
                    <Image
                        src={user}
                        alt="User"
                        width={28}
                        height={28}
                        className="rounded-full"
                    />
                    <span className="text-[#161E54] hidden lg:block">Admirrah John</span>
                    <FiChevronDown className="text-[#B2B2B2]" />
                </div>
            </div>
        </div>
    );
};

export default Topnav;
