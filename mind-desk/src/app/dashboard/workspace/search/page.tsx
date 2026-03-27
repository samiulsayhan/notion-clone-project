"use client";

import Button from "@/components/ui/button";
import { useState } from "react"



export default function Search({ handleSearchPopUp }: { handleSearchPopUp: () => void }) {

    const [openPopUp, setOpenPopUp] = useState(false)

    return (
        <div  className="w-[82%] bg-amber-800 h-[80%] flex flex-col justify-center items-center mt-20">
            <h1 className="text-4xl font-semibold">This is Search page</h1>
            <Button onClick={() => setOpenPopUp(true)}>Click Here</Button>
            {
                openPopUp &&
                <div className="bg-[#f1f0ef] w-[30%] items-center absolute top-50 p-10 rounded-2xl">
                    <h1>pop up</h1>
                    <button className="absolute top-3 right-3 hover:bg-black hover:text-white px-2 pb-[2px] rounded-4xl" onClick={() => setOpenPopUp(false)}>x</button>
                </div>
            }
        </div>
    )
}