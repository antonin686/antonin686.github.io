import Experience from "@/components/home/Experience";
import MoreAboutMe from "@/components/home/MoreAboutMe";
import MacBox from "@/components/layout/MacBox";
import Projects from "@/components/home/Projects";
import Education from "@/components/home/Education";
import Training from "@/components/home/Training";
import MostProudOf from "@/components/home/MostProudOf";
import Publications from "@/components/home/Publications";

export default function Home() {
    return (
        <>
            <h1 className="text-4xl font-extrabold text-center my-7">
                Hi, I'm Ariful Islam Fahim
            </h1>
            <section className="border-b pb-10">
                <div className="container">
                    <MacBox
                        title="What I do"
                        desc="Im currently Doing ......... ....."
                    />
                </div>
            </section>

            <section className="bg-secondary py-7 border-b">
                <div className="container">
                    <MoreAboutMe />
                </div>
            </section>

            <section className="bg-background py-7 border-b">
                <div className="container">
                    <Experience />
                </div>
            </section>

            <section className="bg-secondary py-7 border-b">
                <div className="container">
                    <Projects />
                </div>
            </section>

            <section className="bg-background py-7 border-b">
                <div className="container">
                    <Education />
                </div>
            </section>

            <section className="bg-secondary py-7 border-b">
                <div className="grid lg:grid-cols-2 grid-cols-1 container">
                    <Training />
                    <MostProudOf />
                </div>
            </section>

            <section className="bg-background py-7 border-b">
                <Publications />
            </section>

        </>
    );
}
