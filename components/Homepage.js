"use client";
import React, { Suspense, useEffect, useState } from "react";
import Sidenav from "./Sidenav";
import Topnav from "./Topnav";
import Stats from "./Stats";
import CompanyInfo from "./companyInfo";
import Announcement from "./Announcement";
import image1 from "../public/companyInfo1.png";
import image2 from "../public/companyInfo2.png";

export default function Homepage() {

    return (
        <>
            <div className="flex justify-between">
                <Sidenav className="" />
                <div className="flex-col w-[100%] ">
                    <Topnav className="" />
                    <h1 className="mx-2 lg:mx-8 text-[24px] mt-2 font-semibold">Dashboard</h1>
                    <div className="flex mx-2 lg:mx-6 mt-2 ">
                        <div className="w-[60%]">
                            <div className="flex">
                                <Stats
                                    bgColor="#FFEFE7"
                                    title="Available Position"
                                    number="24"
                                    subtitle="4 Urgently needed"
                                    subtitleColor="#FF5151"
                                />
                                <Stats
                                    bgColor="#E8F0FB"
                                    title="Job Open"
                                    number="10"
                                    subtitle="4 Active hiring"
                                    subtitleColor="#3786F1"
                                />
                                <Stats
                                    bgColor="#FDEBF9"
                                    title="New Employees"
                                    number="24"
                                    subtitle="4 Department"
                                    subtitleColor="#EE61CF"
                                />
                            </div>
                            <div className="flex mt-4">
                                <CompanyInfo
                                    title="Total Employees"
                                    image={image1}
                                    number="216"
                                    men="120"
                                    women="96"
                                    subtitle="+2% Past month"
                                />
                                <CompanyInfo
                                    title="Talent Request"
                                    image={image2}
                                    number="16"
                                    men="6"
                                    women="10"
                                    subtitle="+5% Past month"
                                />
                            </div>
                            <Announcement/>
                        </div>
                        <div className="w-[30%]"></div>
                    </div>
                </div>
            </div>
        </>
    );
}
