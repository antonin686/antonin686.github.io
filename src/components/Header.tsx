import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="flex items-center gap-5">
        <div>
            <img src="images/avatar.png" className="w-20" />
        </div>
        <div className="flex flex-col gap-1">
            <div className="text-5xl">Antonin Islam</div>
            <Navbar />
        </div>
    </div>
  )
}
