import React from "react";
import { shortenText } from "../layout/navbar";
import projects from "@/data/projects.json"
import Link from "next/link";


type ViewBox = {
    children?: React.ReactNode;
    OnClick?: () => void;
};

export default function RecentProjectViewBox({ children, OnClick }: ViewBox) {
    return (
        <div className="overflow-x-auto py-5 w-[80%] flex gap-5">
            {projects.map((project, index) => (
                <Link href="#"
                    key={index}
                    className=" w-36 shrink-0 rounded-4xl border-[1px] border-[#ecebeb] overflow-hidden "
                >
                    <div className="bg-[#f9f8f7] h-12"></div>

                    <div className="flex flex-col pl-3 pb-5 gap-3 -mt-2">
                        <img src="/file.svg" alt="" className="h-4 w-4" />
                        <h1 className="text-[14px]">{shortenText(project.projectName, 12)}</h1>
                        <div className="flex gap-2 items-center">
                            <img src="/profile-icon.png" alt="" className="w-4 h-4 p-0 m-0" />
                            <h1 className="text-[12px] text-[#646464]">{project.dateAdded}</h1>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}