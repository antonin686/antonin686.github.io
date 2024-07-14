import { Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <div className="dark h-screen bg-background text-foreground text-xl">
            <div className="w-full">
                <Outlet />
            </div>
        </div>
    );
}
