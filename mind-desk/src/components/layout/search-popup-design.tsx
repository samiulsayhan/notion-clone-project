"use client";

import Button from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react"



export default function SearchPopupDesign() {

    const [openPopUp, setOpenPopUp] = useState(false)

    return (
        <div className=" w-full">

            <button onClick={() => setOpenPopUp(true)} className="flex flex-row gap-2 items-center cursor-pointer">
                <img src="/search-icon.png" alt="" className="w-4 h-4" />
                <li>Search</li>
            </button>
            {
                openPopUp &&
                <div onClick={() => setOpenPopUp(false)} className="w-full">
                    <div className="bg-white border-[1px] border-[#ecebeb] w-[80%] h-[90vh] items-center absolute top-15 shadow-2xl left-[10%] p-10 rounded-2xl">
                        <h1>pop up</h1>
                        <button className="absolute top-3 right-3 hover:bg-black hover:text-white px-2 pb-[2px] rounded-4xl" onClick={() => setOpenPopUp(false)}>x</button>
                    </div>
                </div>

            }
        </div>
    )
}