import { EDUCATIONS } from "@/constants/educations";
import { FaCalendar } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { PiCertificateFill } from "react-icons/pi";

export default function Education() {
    return (
        <div className="flex flex-col gap-5 items-center">
            <h1 className="text-2xl">Education</h1>
            <ol className="relative border-s ms-3 md:mx-10 mx-0 flex flex-col gap-10">
                {EDUCATIONS.map((education, idx) => (
                    <li className="ms-8" key={idx}>
                        <span className="absolute -start-[18px] border bg-black rounded-full size-9 p-3 flex justify-center items-center">
                            <p className="font-bold text-sm text-white">
                                {EDUCATIONS.length - idx}
                            </p>
                        </span>
                        <div className="flex flex-col gap-3">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={education.logo}
                                        className="size-10 rounded-xl"
                                    />
                                    <div className="flex flex-col">
                                        <div className="text-lg font-bold">
                                            {education.title}
                                        </div>
                                        <div className="text-xs text-wrap max-w-56">
                                            {education.subtitle}
                                        </div>
                                        <div className="text-sm">
                                            {education.institute}
                                        </div>
                                    </div>
                                </div>
                                {education.link && (
                                    <div className="border-2 p-2 rounded-xl animate-pulse hover:scale-110 hover:animate-none">
                                        <a href={education.link}>
                                            <PiCertificateFill />
                                        </a>
                                    </div>
                                )}
                            </div>
                            <div className="flex gap-10 text-sm">
                                <div className="flex items-center gap-2">
                                    <FaCalendar />
                                    {education.duration}
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaLocationPin />
                                    {education.location}
                                </div>
                            </div>
                            <ul className="flex flex-col gap-1 list-disc pl-4">
                                {education.points.map((point, idx) => (
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
