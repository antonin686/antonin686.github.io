import { TRAININGS } from "@/constants/trainings";
import { FaCertificate } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";

export default function Training() {
    return (
        <div className="flex flex-col gap-5 items-center">
            <h1 className="text-2xl">Training</h1>
            <div className="flex flex-col gap-5">
                {TRAININGS.map((training, idx) => (
                    <div className="ms-8" key={idx}>
                        <div className="flex flex-col gap-3 min-w-80">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <FaCertificate className="size-10 rounded-xl text-cyan-500" />
                                    <div className="flex flex-col">
                                        <div className="text-lg font-bold">
                                            {training.title}
                                        </div>
                                    </div>
                                </div>
                                {training.link && (
                                    <div className="border-2 p-2 rounded-xl animate-pulse hover:scale-110 hover:animate-none">
                                        <a href={training.link}>
                                            <PiCertificateFill />
                                        </a>
                                    </div>
                                )}
                            </div>
                            <ul className="flex flex-col gap-1 list-disc pl-4">
                                {training.points.map((point, idx) => (
                                    <li className="text-sm" key={idx}>
                                        <div className="flex items-center gap-5">
                                            <a href={point.link} className="hover:underline">{point.title}</a>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
