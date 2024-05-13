import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <div className="dark h-screen bg-background text-foreground text-xl">
            <div className="container mx-auto md:w-1/2 w-full">
                <Header />
                <Outlet />
            </div>
        </div>
    );
}
