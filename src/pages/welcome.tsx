import FindMeOn from "@/components/FindMeOn";
import KnowMore from "@/components/KnowMore";
import Projects from "@/components/Projects";
import ShortBio from "@/components/ShortBio";
import Technologies from "@/components/Technologies";

export default function Welcome() {
    return (
        <div className="flex flex-col gap-7 mt-5">
            <div className="flex flex-col gap-2">
                <ShortBio />
                <FindMeOn />
            </div>
            <Technologies />
            <Projects />
            <KnowMore />

            <hr className="border-gray-400" />
            <div className="flex justify-center text-muted-foreground">Last Updated - May 2024</div>
        </div>
    );
}
