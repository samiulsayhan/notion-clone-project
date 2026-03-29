

import Link from "next/link";
import Button from "../ui/button";
import projects from "@/data/projects.json"
import SearchPopupDesign from "./search-popup-design";


export function shortenText(text: string, maxLength: number = 12): string {
    return text.length > maxLength
        ? text.slice(0, maxLength) + "..."
        : text;
}
export default function Navbar() {
    return (
        <section className="bg-[#f9f8f7] h-[100vh] flex flex-col justify-between items-start pl-5 pr-3 py-2 gap-4 w-[18%] border-r-[1px] border-b-[1px] border-[#ecebeb]">
            <div className=" w-full h-[30vh] ">
                {/* profile section */}
                <div className="flex flex-row gap-2 justify-between items-center w-full mb-2">
                    {/* first part of profile section */}

                    <div className="flex flex-row gap-2 justify-start items-center">
                        <img src="/profile-icon.png" alt="" className="w-4 h-4 p-0 m-0" />
                        <h1 className="text-[14px] font-medium text-[#393838]">MindDesk ...</h1>
                    </div>
                    {/* second part of profile section */}
                    <div className="flex flex-row justify-between gap-2 items-center ">

                        <Link href="#">
                            <img src="/edit-icon.png" alt="" className="w-4 h-4 p-0 " />
                        </Link>
                        <Link href="#">
                            <img src="/down-arrow.svg" alt="" className="w-4 h-4 p-0 " />
                        </Link>
                    </div>

                </div>
                {/* workspace pages section */}
                <div className=" justify-start flex  ">
                    <ul className="flex flex-col gap-2 text-[14px] text-[#646464] font-medium">
                        <SearchPopupDesign/>
                        <Link href="/dashboard/workspace/home" className="flex flex-row gap-2 items-center">
                            <img src="/home-icon.png" alt="" className="w-4 h-4" />
                            <li>Home</li>
                        </Link>
                        <Link href="/dashboard/workspace/meetings" className="flex flex-row gap-2 items-center">
                            <img src="/mike-icon.png" alt="" className="w-4 h-4" />
                            <li>Meetings</li>
                        </Link>
                        <Link href="/dashboard/workspace/ai-chat" className="flex flex-row gap-2 items-center">
                            <img src="/ai-icon.png" alt="" className="w-4 h-4" />
                            <li>Ai Chat</li>
                        </Link>
                        <Link href="/dashboard/workspace/inbox" className="flex flex-row gap-2 items-center">
                            <img src="/inbox-icon.png" alt="" className="w-4 h-4" />
                            <li>Inbox</li>
                        </Link>
                        <Link href="/dashboard/workspace/library" className="flex flex-row gap-2 items-center">
                            <img src="/library-icon.png" alt="" className="w-4 h-4" />
                            <li>Library</li>
                        </Link>

                    </ul>
                </div>
            </div>

            {/* scroling section with settings and recents */}
            <div className=" w-full overflow-auto py-4 space-y-6 border-b-1 border-t-1 border-[#ecebeb]">
                {/* recent section */}
                <div className=" space-y-2">
                    <h1 className="text-[12px] text-[#646464] font-medium ">Recent</h1>
                    <ul className="flex flex-col gap-2 text-[14px] text-[#646464] font-medium">
                        {projects.map((project, index) => (

                                <Link key={index} href="/dashboard/workspace/home" className="flex flex-row gap-2.5 items-center  ">
                                <img src="/file.svg" alt="" className="w-4 h-4" />
                                <p>{shortenText(project.projectName , 18)}</p>
                            </Link>

                        ))}
                    </ul>
                </div>

                {/* private files */}

                <div className=" space-y-2">
                    <h1 className="text-[12px] text-[#646464] font-medium ">Recent</h1>
                    <ul className="flex flex-col gap-2 text-[14px] text-[#646464] font-medium">
                        {projects.map((project, index) => (

                                <Link key={index} href="/dashboard/workspace/home" className="flex flex-row gap-2.5 items-center  ">
                                <img src="/file.svg" alt="" className="w-4 h-4" />
                                <p>{shortenText(project.projectName , 18)}</p>
                            </Link>

                        ))}
                    </ul>
                </div>

                {/* settings section */}
                <div className=" ">
                    <ul className="flex flex-col gap-2 text-[14px] text-[#646464] font-medium">

                        <Link href="/dashboard/workspace/search" className="flex flex-row gap-2 items-center ">
                            <img src="/settings.png" alt="" className="w-4 h-4 " />
                            <li>Settings</li>
                        </Link>
                        <Link href="/dashboard/workspace/home" className="flex flex-row gap-2 items-center">
                            <img src="/recycle-bin.png" alt="" className="w-4 h-4" />
                            <li>Trash</li>
                        </Link>

                    </ul>
                </div>
            </div>
            {/* end section */}
            <div className="flex flex-row w-full justify-start items-center ">
                <img src="/globe.svg" alt="" className="h-6 w-6" />
            </div>

        </section>
    )
}