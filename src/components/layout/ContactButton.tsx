const email = {
    to: "email@gmail.com",
    subject: "Hello",
    body: "Hello from website",
};

export default function ContactButton() {
    return (
        <a
            href={`mailto:${email.to}?subject=${email.subject}&body=${email.body}`}
            target="_blank"
            rel="noopener noreferrer"
        >Contact</a>
    );
}
