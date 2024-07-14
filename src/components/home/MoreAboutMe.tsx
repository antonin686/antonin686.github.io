import { SKILLS } from "@/constants/skills";
import { SOCIAL_LINKS } from "@/constants/social-links";


export default function MoreAboutMe() {
    return (
        <div className="grid grid-cols-2 gap-5">
            <div>
                <h2 className="text-2xl mb-4">More About Me</h2>
                <p className="text-base font-light">
                    I started programming in high school and looking forward to
                    a career based around programming.
                </p>
                <hr className="border border-white my-7" />
                <h2 className="text-2xl mb-4">Top Expertise</h2>
                <p className="text-base font-light mb-4">
                    Backend Developer with primary focus on Laravel & Express
                    JS:{" "}
                    <a download href="#" className="text-cyan-600 font-bold hover:underline">
                        Download Resume
                    </a>.
                </p>
                <div className="flex flex-wrap gap-2 text-sm font-bold">
                    {SKILLS.map((skill, index) => (
                        <div
                            className="bg-black px-3 py-1 rounded-full border"
                            key={index}
                        >
                            {" "}
                            {skill}{" "}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-5 justify-center items-center">
                <h3 className="text-2xl">Find me on</h3>
                <div className="flex gap-3">
                    {Object.keys(SOCIAL_LINKS).map((key, index) => (
                        <div key={index} className="bg-white p-1 rounded-xl">
                            <a
                                href={SOCIAL_LINKS[key].url}
                                target="_blank"
                                rel="noreferrer"
                                className="text-background"
                            >
                                {SOCIAL_LINKS[key].icon}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
