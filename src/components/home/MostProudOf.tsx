import { MOST_PRODUCT_OFS } from "@/constants/most-proud-ofs";
import { FaTrophy } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";

export default function MostProudOf() {
    return (
        <div className="flex flex-col gap-5 items-center">
            <h1 className="text-2xl">Most Proud Of</h1>
            <div className="flex flex-col gap-5">
                {MOST_PRODUCT_OFS.map((training, idx) => (
                    <div className="ms-8" key={idx}>
                        <div className="flex flex-col gap-3 min-w-80">
                            <div className="flex justify-between items-center gap-5">
                                <div className="flex items-center gap-3">
                                    <FaTrophy className="size-10 rounded-xl text-cyan-500" />
                                    <div className="flex flex-col">
                                        <div className="text-lg font-bold">
                                            {training.title}
                                        </div>
                                        <div className="text-xs ">
                                            {training.subtitle}
                                        </div>
                                        <div className="text-base font-bold">
                                            {training.award}
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
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
