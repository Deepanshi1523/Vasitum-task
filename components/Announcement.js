"use client";
import React, { useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { TiPin } from "react-icons/ti";

const Announcement = () => {
    const [selectedDate, setSelectedDate] = useState("13 Sep 2021");
    const [showAll, setShowAll] = useState(false);

    const announcements = [
        {
            date: "13 Sep 2021",
            items: [
                { text: "Outing scheduled for HR department", time: "10:00 AM" },
                { text: "Team-building workshop for Marketing", time: "2:00 PM" }
            ]
        },
        {
            date: "12 Sep 2021",
            items: [
                { text: "Outing scheduled for HR department", time: "10:00 AM" },
                { text: "Team-building workshop for Marketing", time: "2:00 PM" }
            ]
        },
    ];

    const handleDateChange = (e) => setSelectedDate(e.target.value);

    const currentAnnouncements = announcements.find(announcement => announcement.date === selectedDate);

    return (
        <div className="p-4 lg:mx-2 mt-4 bg-white rounded-md border border-[#E0E0E0] w-[98%] lg:w-[98%] -ml-2 lg:-ml-0">
            <div className="flex items-center justify-between mb-3">
                <h2 className="text-[18px] font-semibold">Announcements</h2>
                <div className="flex items-center space-x-2">
                    <select
                        onChange={handleDateChange}
                        value={selectedDate}
                        className="border border-gray-300 rounded-md lg:px-2 lg: py-1 text-sm"
                    >
                        {announcements.map((announcement) => (
                            <option key={announcement.date} value={announcement.date}>
                                {announcement.date === "13 Sep 2021" ? "13 Sep 2021" : announcement.date}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="space-y-4">
                {currentAnnouncements && (showAll ? currentAnnouncements.items : currentAnnouncements.items.slice(0, 2)).map((item, index) => (
                    <div key={index} className="pb-2">
                        <div className="flex justify-between items-center bg-[#F0F0F0] p-2 rounded-md">
                            <div>
                                <p className="text-[16px] font-medium ">{item.text}</p>
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-500">{item.time}</span>
                                    <div className="items-center space-x-6 mr-4 flex lg:hidden">
                                        <TiPin size={20} className="text-gray-400 cursor-pointer" />
                                        <FiMoreHorizontal size={20} className="text-gray-400 cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                            <div className="items-center space-x-6 mr-4 hidden lg:flex">
                                <TiPin size={28} className="text-gray-400 cursor-pointer" />
                                <FiMoreHorizontal size={28} className="text-gray-400 cursor-pointer" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-center border-t">
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="mt- text-[#FF5151] text-[14px] font-semibold mt-2"
                >
                    {showAll ? "Hide" : "See All"} Announcements
                </button>
            </div>
        </div>
    );
};

export default Announcement;
