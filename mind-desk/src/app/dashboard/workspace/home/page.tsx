import RecentProjectViewBox from "@/components/ui/recent-projects-viewbox";

export default function Home_Page() {
  return (
    <div className="flex flex-col w-[82%] pt-20 px-10  items-center bg-white gap-5">
      <h1 className="text-4xl font-semibold">Wellcome Home</h1>
      <p className="text-[12px] text-[#646464]">Recently visited</p>
      <RecentProjectViewBox/>
    </div>
  )
}