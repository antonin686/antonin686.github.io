interface Props {
    project: any;
}

export default function MoreAboutProject({ project }: Props) {
    return (
        <>
            {project ? (
                <div className="flex flex-col gap-5">
                    <div className="flex justify-center items-center gap-20">
                        <div className="max-w-96">
                            <h3 className="text-2xl mb-3">
                                Business Challenges
                            </h3>
                            <ul className="list-disc flex flex-col gap-3">
                                {project.business_challenges.map(
                                    (challenge: any, index: number) => (
                                        <li key={index}>{challenge}</li>
                                    )
                                )}
                            </ul>
                        </div>
                        <div className=" max-w-96">
                            <h3 className="text-2xl mb-3">Solutions</h3>
                            <ul className="list-disc flex flex-col gap-3">
                                {project.solutions.map(
                                    (solution: any, index: number) => (
                                        <li key={index}>{solution}</li>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 justify-center items-center">
                        <h3 className="text-2xl">Find it on</h3>
                        <div className="flex gap-3">
                            {Object.keys(project.find_it_on).map(
                                (key, index) => (
                                    <div
                                        key={index}
                                        className="bg-white p-1 rounded-xl"
                                    >
                                        <a
                                            href={project.find_it_on[key].url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-background"
                                        >
                                            {project.find_it_on[key].icon}
                                        </a>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                "Loading..."
            )}
        </>
    );
}
