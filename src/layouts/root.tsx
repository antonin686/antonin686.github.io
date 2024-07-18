import Footer from "@/components/layout/Footer";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <div>
            <Outlet />
            <Footer />
        </div>
    );
}
