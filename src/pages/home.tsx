import Experience from "@/components/home/Experience";
import MoreAboutMe from "@/components/home/MoreAboutMe";
import MacBox from "@/components/layout/MacBox";
import Projects from "@/components/home/Projects";
import Education from "@/components/home/Education";
import Training from "@/components/home/Training";
import MostProudOf from "@/components/home/MostProudOf";
import Publications from "@/components/home/Publications";
import Footer from "@/components/layout/Footer";

export default function Home() {
    return (
        <>
            <h1 className="text-4xl font-extrabold text-center my-7">
                Hi, I'm Ariful Islam Fahim
            </h1>
            <section className="container border-b pb-10">
                <MacBox
                    title="What I do"
                    desc="Im currently Doing ......... ....."
                />
            </section>

            <section className="bg-secondary py-7 container border-b">
                <MoreAboutMe />
            </section>

            <section className="bg-background py-7 container border-b">
                <Experience />
            </section>

            <section className="bg-secondary py-7 container border-b">
                <Projects />
            </section>

            <section className="bg-background py-7 container border-b">
                <Education />
            </section>

            <section className="bg-secondary py-7 container border-b">
                <div className="grid lg:grid-cols-2 grid-cols-1">
                    <Training />
                    <MostProudOf />
                </div>
            </section>

            <section className="bg-background py-7 container border-b">
                <Publications />
            </section>

            <Footer />
        </>
    );
}
