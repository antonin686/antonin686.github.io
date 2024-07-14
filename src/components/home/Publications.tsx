import { PUBLICATIONS } from "@/constants/publications";

export default function Publications() {
    return (
        <div className="flex flex-col gap-5 items-center">
            <h1 className="text-2xl">Publications</h1>

            {PUBLICATIONS.map((publication, idx) => (
                <div  key={idx}>
                    <div className="flex flex-col gap-3">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                {publication.icon}
                                <div className="flex flex-col">
                                    <div className="text-lg font-bold">
                                        {publication.title}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul className="flex flex-col gap-1 list-disc pl-4">
                            {publication.points.map((point, idx) => (
                                <li className="text-sm ml-3" key={idx}>
                                    <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-5">
                                        <div className="max-w-72 h-full">
                                            {point.title}
                                        </div>
                                        <div>
                                            {point.image && (
                                                <img
                                                    src={point.image}
                                                    className="size-36 img-frame"
                                                />
                                            )}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}
