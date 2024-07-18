import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { SKILLS } from "@/constants/skills";

export default function Skillset() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl">Skill Set</h2>
                <CollapsibleTrigger asChild>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="w-9 p-0 border-2 hover:bg-background rounded-xl"
                    >
                        <ChevronsUpDown className="h-4 w-4" />
                        <span className="sr-only">Toggle</span>
                    </Button>
                </CollapsibleTrigger>
            </div>
            <div className="rounded-xl border px-4 py-3 text-sm grid grid-cols-12 items-center gap-5 mb-2 bg-background">
                <h4 className="col-span-4 font-bold tracking-widest">
                    {SKILLS[0].category}
                </h4>
                <p className="col-span-8">{SKILLS[0].options}</p>
            </div>
            <CollapsibleContent className="space-y-2">
                {SKILLS.slice(1).map((skill: any) => (
                    <div className="rounded-xl border px-4 py-3 text-sm grid grid-cols-12 items-center gap-5 bg-background">
                        <h4 className="col-span-4 font-bold tracking-widest">
                            {skill.category}
                        </h4>
                        <p className="col-span-8">{skill.options}</p>
                    </div>
                ))}
            </CollapsibleContent>
        </Collapsible>
    );
}
