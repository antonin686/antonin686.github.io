const techs = [
    {
        category: "Languages",
        options: "JavaScript, Python, Solidity",
    },
    {
        category: "Databases",
        options: "MySQL, MongoDB",
    },
    {
        category: "Web 2.0 Techs",
        options: "HTML5, CSS3, React, Redux",
    },
    {
        category: "Web 3.0 Techs",
        options: "Hyperledger Fabric, Internet Computer, Ethereum",
    },
    {
        category: "Others",
        options: "Git, Bash",
    },
];

export default function Technologies() {
    return (
        <div>
            <div className="text-3xl text-primary mb-5">
                Tools & Technologies
            </div>
            <div className="flex flex-col">
                <div className="bg-card p-3 border-b border-gray-400 rounded-t-xl">
                    <div className="grid grid-cols-12">
                        <div className="col-span-5 font-bold">Categories</div>
                        <div className="col-span-7 font-bold">Options</div>
                    </div>
                </div>
                {techs.map((tech: any, idx: number) => (
                    <div
                        key={idx}
                        className={`bg-card p-3 ${
                            idx == techs.length - 1
                                ? "rounded-b-xl"
                                : "border-b border-gray-400"
                        }`}
                    >
                        <div className="grid grid-cols-12">
                            <div className="col-span-5">{tech.category}</div>
                            <div className="col-span-7">{tech.options}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
