import { Noto_Sans } from "next/font/google"

const noto_sansFont= Noto_Sans({
    subsets: ["latin"],
    weight: "500"
});


export default function DashboardProjects() {
    return (
        <div>
            <div className={`m-6 flex flex-col items-center ${noto_sansFont.className}`}>
                <h1 className="text-4xl">This is Projects Dashboard</h1>
                <h1 className="text-4xl">Good morning</h1>

            </div>

        </div>
    )
}