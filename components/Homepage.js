"use client";
import React, { Suspense, useEffect, useState } from "react";
import Sidenav from "./Sidenav";
import Topnav from "./Topnav";
import Stats from "./Stats";

export default function Homepage() {

    return (
        <>
            <div className="flex justify-between">
                <Sidenav className="" />
                <div className="flex-col w-[100%] ">
                    <Topnav className="" />
                    <h1 className="mx-2 lg:mx-8 text-[24px] mt-4 font-semibold">Dashboard</h1>
                    <div className="flex mx-2 lg:mx-6 mt-4">
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
                        </div>
                        <div className="w-[30%]"></div>
                    </div>
                </div>
            </div>
        </>
    );
}
