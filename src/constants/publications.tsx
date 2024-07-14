import { IoDocumentText } from "react-icons/io5";

export const PUBLICATIONS = [
    {
        title: "Journal Articles",
        icon: <IoDocumentText className="size-10 rounded-xl text-cyan-500" />,
        points: [
            {
                title: (
                    <p>
                        M.A.Islam, “Distributed ledger technology based
                        integrated healthcare solution for bangladesh
                        (blockchain),” IEEE Access, vol. 11, 2022. DOI:{" "}
                        <a
                            href="https://www.doi.org/10.1109/ACCESS.2023.3279724"
                            className="text-cyan-500 hover:underline"
                        >
                            DOI Link
                        </a>
                        .
                    </p>
                ),
                image: "images/frame.jpeg",
            },
        ],
    },
    {
        title: "Conference Proceedings",
        icon: <IoDocumentText className="size-10 rounded-xl text-cyan-500" />,
        points: [
            {
                title: (
                    <p>
                        M.A.Islam, “Microservice paradigm: A proposal for orches
                        trated on-chain and off-chain interaction in dapp
                        development,” in 2024 IEEE International Conference on
                        Blockchain (Blockchain 2024), Copenhagen, Denmark, 2024.
                    </p>
                ),
                image: "images/frame.jpeg",
            },
        ],
    },
];
