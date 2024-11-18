"use client";
import React, { useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";

const UpcomingSchedule = () => {
    const [selectedDate, setSelectedDate] = useState("13 Sep 2021");
    const [showPopup, setShowPopup] = useState(false);
    const [newSchedule, setNewSchedule] = useState({ title: "", date: "", priority: false });
    const [announcements, setAnnouncements] = useState([
        {
            date: "13 Sep 2021",
            priority: [
                { text: "Outing scheduled for HR department", time: "10:00 AM" }
            ],
            others: [
                { text: "Team-building workshop for Marketing", time: "2:00 PM" },
                { text: "General meeting for Finance team", time: "11:00 AM" }
            ]
        },
        {
            date: "12 Sep 2021",
            priority: [],
            others: [
                { text: "General meeting for Finance team", time: "11:00 AM" }
            ]
        },
    ]);

    const handleDateChange = (e) => setSelectedDate(e.target.value);

    const handleNewScheduleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setNewSchedule(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const addNewSchedule = () => {
        const { title, date, priority } = newSchedule;
        if (title && date) {
            setAnnouncements(prev => {
                const updatedAnnouncements = [...prev];
                const dateIndex = updatedAnnouncements.findIndex(ann => ann.date === date);

                if (dateIndex !== -1) {
                    updatedAnnouncements[dateIndex][priority ? "priority" : "others"].push({ text: title, time: "TBD" });
                } else {
                    updatedAnnouncements.push({
                        date: date,
                        priority: priority ? [{ text: title, time: "TBD" }] : [],
                        others: !priority ? [{ text: title, time: "TBD" }] : []
                    });
                }

                return updatedAnnouncements;
            });
            setShowPopup(false);
            setNewSchedule({ title: "", date: "", priority: false });
        }
    };

    const currentAnnouncements = announcements.find(announcement => announcement.date === selectedDate);

    return (
        <div className="p-4 mt-4 bg-white rounded-md border border-[#E0E0E0] w-[98%] -ml-2 lg:w-full h-[350px]">
            <div className="flex items-center justify-between mb-3">
                <h2 className="text-[18px] font-semibold whitespace-nowrap">Upcoming Schedule</h2>
                <select
                    onChange={handleDateChange}
                    value={selectedDate}
                    className="border border-gray-300 rounded-md px-2 py-1 text-sm"
                >
                    {announcements.map((announcement) => (
                        <option key={announcement.date} value={announcement.date}>
                            {announcement.date === "13 Sep 2021" ? "13 Sep 2021" : announcement.date}
                        </option>
                    ))}
                </select>
            </div>

            <div className="space-y-4 max-h-[250px] overflow-y-scroll scrollbar-hide">
                {/* Priority Section */}
                <div>
                    <h3 className="font-semibold text-[12px] text-[#686868]">Priority</h3>
                    {currentAnnouncements && currentAnnouncements.priority.length > 0 ? (
                        currentAnnouncements.priority.map((item, index) => (
                            <div key={index} className="flex justify-between items-center bg-[#F0F0F0] p-2 rounded-md mt-2">
                                <div>
                                    <p className="text-[16px] font-medium">{item.text}</p>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-gray-500">{item.time}</span>
                                        <FiMoreHorizontal size={24} className="text-gray-400 cursor-pointer lg:hidden" />
                                    </div>
                                </div>
                                <FiMoreHorizontal size={24} className="text-gray-400 cursor-pointer hidden lg:block" />
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 mt-2">No priority items for this date.</p>
                    )}
                </div>

                {/* Others Section */}
                <div>
                    <h3 className="font-semibold text-[12px] text-[#686868]">Others</h3>
                    {currentAnnouncements && currentAnnouncements.others.length > 0 ? (
                        currentAnnouncements.others.map((item, index) => (
                            <div key={index} className="flex justify-between items-center bg-[#F0F0F0] p-2 rounded-md mt-2">
                                <div>
                                    <p className="text-[16px] font-medium">{item.text}</p>
                                    <span className="text-sm text-gray-500">{item.time}</span>
                                </div>
                                <FiMoreHorizontal size={24} className="text-gray-400 cursor-pointer hidden lg:block" />
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 mt-2">No other items for this date.</p>
                    )}
                </div>
            </div>

            <div className="flex items-center justify-center  mt-3">
                <button
                    onClick={() => setShowPopup(true)}
                    className="text-[#FF5151] text-[14px] font-semibold"
                >
                    Create a New Schedule
                </button>
            </div>

            {/* Popup for Creating New Schedule */}
            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-md w-[300px]">
                        <h3 className="text-lg font-semibold mb-4">New Schedule</h3>
                        <input
                            type="text"
                            name="title"
                            value={newSchedule.title}
                            onChange={handleNewScheduleChange}
                            placeholder="Title"
                            className="border border-gray-300 rounded-md p-2 w-full mb-2"
                        />
                        <input
                            type="date"
                            name="date"
                            value={newSchedule.date}
                            onChange={handleNewScheduleChange}
                            className="border border-gray-300 rounded-md p-2 w-full mb-2"
                        />
                        <div className="flex items-center mb-4">
                            <input
                                type="checkbox"
                                name="priority"
                                checked={newSchedule.priority}
                                onChange={handleNewScheduleChange}
                                className="mr-2"
                            />
                            <label className="text-sm">Mark as Priority</label>
                        </div>
                        <button
                            onClick={addNewSchedule}
                            className="bg-[#FF5151] text-white px-4 py-2 rounded-md w-full"
                        >
                            Add Schedule
                        </button>
                        <button
                            onClick={() => setShowPopup(false)}
                            className="mt-2 text-[#FF5151] text-sm w-full"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UpcomingSchedule;
