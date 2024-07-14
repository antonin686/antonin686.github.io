import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { PROJECTS } from "@/constants/projects";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Link } from "react-router-dom";

export default function Projects() {
    return (
        <div className="flex flex-col gap-5 items-center">
            <h1 className="text-2xl">Some of my projects</h1>
            <Carousel
                className="w-full max-w-2xl"
                opts={{
                    align: "start",
                }}
            >
                <CarouselContent>
                    {PROJECTS.map((project, idx) => (
                        <CarouselItem className="lg:basis-1/2" key={idx}>
                            <Card className="bg-background rounded-xl">
                                <img
                                    className="w-full h-44 rounded-t-xl"
                                    src={project.cover_img}
                                />
                                <CardContent className="flex flex-col gap-1 pt-6">
                                    <h2>{project.title}</h2>
                                    <p className="text-sm">
                                        {project.description}
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link
                                        to="#"
                                        className="text-sm text-cyan-500 font-bold hover:underline"
                                    >
                                        Read more
                                    </Link>
                                </CardFooter>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}
