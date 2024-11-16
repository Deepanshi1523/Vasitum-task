"use client";
import { useState } from "react";
import Image from "next/image";
import { FiBell, FiMessageSquare, FiSearch, FiChevronDown } from "react-icons/fi";
import user from "../public/user.png";

const Topnav = () => {

    return (
        <div className="fixed top-0 w-[90%] flex justify-between p-8 z-50">
            <div className="flex items-center space-x-4">
                <div className="flex items-center bg-[#E0E0E0] px-3 py-2 rounded-md">
                    <input 
                        type="text" 
                        placeholder="Search" 
                        className="bg-transparent focus:outline-none text-[B3B3B3] placeholder-[#B2B2B2]"
                    />
                    <FiSearch className="text-[#B3B3B3] mr-2" />
                </div>
            </div>

            <div className="flex items-center space-x-6">
                <FiBell className="text-[#B2B2B2] cursor-pointer" size={24} />
                <FiMessageSquare className="text-[#B2B2B2] cursor-pointer" size={24}/>
                
                <div className="flex items-center space-x-2 cursor-pointer">
                    <Image 
                        src={user}
                        alt="User" 
                        width={32} 
                        height={32} 
                        className="rounded-full"
                    />
                    <span className="text-[#161E54]">Admirrah John</span>
                    <FiChevronDown className="text-[#B2B2B2]" />
                </div>
            </div>
        </div>
    );
};

export default Topnav;
