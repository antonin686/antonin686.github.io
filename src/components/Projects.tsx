import { Card, CardHeader } from "@/components/ui/card";

const projects = [
    {
        title: "🌆 Hotelereum",
        description: "a hotel booking platform incorporating NFT technology",
        techs: "JavaScript, Python, Solidity",
    },
    {
        title: "🛟 RS SJOLIV",
        description:
            "Admin Panel for a humanitarian organization dedicated to saving lives at sea.",
        techs: "JavaScript, Python, Solidity",
    },
    {
        title: "⏰ Task Station",
        description:
            "a dynamic productivity tool focused on elevating task and project management for individuals and teams.",
        techs: "JavaScript, Python, Solidity",
    },
];

export default function Projects() {
    return (
        <div>
            <div className="text-3xl text-primary">Projects</div>
            <div className="flex flex-col gap-3 mt-5">
                {projects.map((project: any, idx: number) => (
                    <Card key={idx}>
                        <CardHeader>
                            <div>
                                <span className="text-primary">
                                    {project.title}
                                </span>{" "}
                                - <span>{project.description}</span>
                            </div>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    );
}
