import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const navs = [
    {
        id: "/",
        title: "Home",
        path: "/",
    },
    {
        id: "about",
        title: "About",
        path: "/about",
    },
    {
        id: "resume",
        title: "Resume",
        path: "/resume",
    },
];

export default function Navbar() {
    const [current, setCurrent] = useState("");
    const location = useLocation();
    useEffect(() => {
        setCurrent(location.pathname || "/");
    }, [location]);

    return (
        <div className="flex gap-5">
            {navs.map((nav) => (
                <div
                    key={nav.id}
                    className={`text-xl text-primary p-1 ${
                        current === nav.id ? "border-primary border-b" : ""
                    }`}
                >
                    {nav.title}
                </div>
            ))}
        </div>
    );
}
