"use client";

import { useState } from "react";
import Image from "next/image";
import { FiMenu, FiHome, FiUsers, FiCalendar, FiUser, FiLayers, FiSettings, FiHelpCircle } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../public/logo.png"

const Sidenav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeOption, setActiveOption] = useState("Dashboard");

    const toggleSidenav = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (optionName) => {
        setActiveOption(optionName);
        if (window.innerWidth < 1024) {
            setIsOpen(false);
        }
    };

    const options = [
        { name: "Dashboard", icon: <FiHome /> },
        { name: "Recruitment", icon: <FiUsers /> },
        { name: "Schedule", icon: <FiCalendar /> },
        { name: "Employee", icon: <FiUser /> },
        { name: "Department", icon: <FiLayers /> }
    ];

    const otherOptions = [
        { name: "Support", icon: <FiHelpCircle /> },
        { name: "Settings", icon: <FiSettings /> }
    ];

    return (
        <div className="relative">
            <button onClick={toggleSidenav} className="p-[9px] text-[#B2B2B2] lg:hidden">
                {isOpen ? <AiOutlineClose size={24} /> : <FiMenu size={28} />}
            </button>

            <div className={`absolute lg:static top-0 left-0 w-48 h-screen bg-[#E0E0E0] flex flex-col pt-4 transition-transform duration-300 z-10 ${isOpen ? "flex" : "hidden"
                } lg:flex`}>
                <Image
                    src={logo}
                    alt={"Logo"}
                    width={180}
                    height={180}
                    className="text-center ml-1 flex items-center justify-center"
                />
                <h1 className="text-[#686868] text-[12px] mt-4 ml-4">MAIN MENU</h1>
                <ul className="space-y-1">
                    {options.map((option) => (
                        <li
                            key={option.name}
                            onClick={() => handleOptionClick(option.name)}
                            className={`flex items-center px-4 py-2 cursor-pointer hover:bg-gray-400 sidenav-option ${activeOption === option.name ? "text-red-500 font-semibold" : "text-black"
                                }`}
                        >
                            <span className="mr-2">{option.icon}</span>
                            {option.name}
                        </li>
                    ))}
                </ul>
                <h1 className="text-[#686868] text-[12px] mt-4 ml-4">OTHER</h1>
                <ul className="space-y-1">
                    {otherOptions.map((option) => (
                        <li
                            key={option.name}
                            onClick={() => handleOptionClick(option.name)}
                            className={`flex items-center px-4 py-2 cursor-pointer hover:bg-gray-400 sidenav-option ${activeOption === option.name ? "text-red-500 font-semibold" : "text-black"
                                }`}
                        >
                            <span className="mr-2">{option.icon}</span>
                            {option.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidenav;
