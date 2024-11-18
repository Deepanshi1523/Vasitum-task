"use client";
import React from "react";
import Image from "next/image";

const CompanyInfo = ({ title, image, number, men, women, subtitle }) => {
    return (
        <div className="p-2 flex justify-between rounded-md w-[96%] lg:w-full bg-white border border-[#E0E0E0] lg:mx-2">
            <div className="w-[40%]">
                <h2 className="text-[18px] font-semibold whitespace-nowrap">{title}</h2>
                <p className="text-[48px] font-bold">{number}</p>
                <div className="flex-col space-y-2 text-[#686868]">
                    <h1 className="text-[16px]">{men} Men</h1>
                    <h1 className="text-[16px]">{women} Women</h1>
                </div>
            </div>
            <div className="flex-col items-center mt-6 w-[50%]">
                <Image src={image} alt={title} width={120} height={120} className="ml-6" />
                <p className="text-[12px] text-center mt-4 text-[#303030] bg-[#FFEFE7] py-1 rounded-md">{subtitle}</p>
            </div>
        </div>
    );
};

export default CompanyInfo;
