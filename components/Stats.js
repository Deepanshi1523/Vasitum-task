"use client";
import React from "react";

const Stats = ({ bgColor, title, number, subtitle, subtitleColor }) => {
    return (
        <div
            className="rounded-md w-[96%] lg:w-[40%] shadow-md flex flex-col lg:mx-2 p-2"
            style={{ backgroundColor: bgColor }}
        >
            <h2 className="text-[18px] font-semibold">{title}</h2>
            <p className="text-[36px] font-bold my-2">{number}</p>
            <span className="text-[16px]" style={{ color: subtitleColor }}>
                {subtitle}
            </span>
        </div>
    );
};

export default Stats;
