"use client";
import React from "react";

const Activity = () => {
    return (
        <div className="w-full text-white">
            <h2 className="text-[18px] bg-[#1B204A] rounded-t-md font-semibold p-4 text-[18px]">Recent Activity</h2>
            <div className="space-y-4 bg-[#161E54] rounded-b-md px-4 pt-4">
                <div className="flex flex-col space-y-2">
                    <p className=" text-[10px]">10.40 AM, Fri 10 Sept 2021</p>
                    <h3 className="text-[16px] font-semibold text-[18px]">You Posted a New Job</h3>
                    <p className="text-[14px] font-medium text-gray-300 text-[14px]">Kindly check the requirements and terms of work and make sure everything is right.</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-[14px]">Today you makes 12 Activity</p>
                    <button className="bg-[#FF5151] text-[14px] mb-4 px-2 py-2 rounded-sm font-semibold">
                        See All Activity
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Activity;
