import { EXPERIENCES } from "@/constants/expriences";
import { FaCalendar } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { PiCertificateFill } from "react-icons/pi";

export default function Experience() {
    return (
        <div className="flex flex-col gap-5 items-center">
            <h1 className="text-2xl">Experience</h1>
            <ol className="relative border-s ms-3 md:mx-10 mx-0 flex flex-col gap-10">
                {EXPERIENCES.map((experience, idx) => (
                    <li className="ms-8" key={idx}>
                        <span className="absolute -start-[18px] border bg-black rounded-full size-9 p-3 flex justify-center items-center">
                            <p className="font-bold text-sm text-white">
                                {EXPERIENCES.length - idx}
                            </p>
                        </span>
                        <div className="flex flex-col gap-3">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={experience.logo}
                                        className="size-10 rounded-xl"
                                    />
                                    <div className="flex flex-col">
                                        <div className="text-lg font-bold">
                                            {experience.company}
                                        </div>
                                        <div className="text-sm">
                                            {experience.position}
                                        </div>
                                    </div>
                                </div>
                                {experience.link && (
                                    <div className="border-2 p-2 rounded-xl animate-pulse hover:scale-110 hover:animate-none">
                                        <a href={experience.link}>
                                            <PiCertificateFill />
                                        </a>
                                    </div>
                                )}
                            </div>
                            <div className="flex gap-10 text-sm">
                                <div className="flex items-center gap-2">
                                    <FaCalendar />
                                    {experience.duration}
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaLocationPin />
                                    {experience.location}
                                </div>
                            </div>
                            <ul className="flex flex-col gap-1 list-disc pl-4">
                                {experience.points.map((point, idx) => (
                                    <li className="text-xs" key={idx}>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
}
