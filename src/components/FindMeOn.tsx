import { FaGithub, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function FindMeOn() {
    return (
        <div className="flex items-center gap-2">
            <div>Find me on</div>
            <a href="https://github.com/antonin686">
                <FaGithub />
            </a>
            <a href="https://twitter.com/antoninislam">
                <FaTwitter />
            </a>
            <div>and</div>
            <a href="mailto:antonin.islam@gmail.com">
                <MdEmail />
            </a>
            <div>.</div>
        </div>
    );
}
