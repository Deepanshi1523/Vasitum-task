"use client";
import React, { Suspense, useEffect, useState } from "react";
import Sidenav from "./Sidenav";
import Topnav from "./Topnav";

export default function Homepage() {

    return (
        <>
            <div className="flex justify-between">
                <Sidenav className="w-[30%]"/>
                <div className="flex-1 w-[65%]">
                    <Topnav className=""/>
                </div>
            </div>
        </>
    );
}
