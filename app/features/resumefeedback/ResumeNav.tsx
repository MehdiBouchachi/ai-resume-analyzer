import { Link } from "react-router";

export default function ResumeNav() {
  return (
    <nav className="resume-nav">
      <Link to={"/"} className="back-button">
        <img src="/icons/back.svg" alt="logo" className="w-2.5 h-2.5" />
        <span className="text-gray-800 text-sm font-semibold">
          Back to Home
        </span>
      </Link>
    </nav>
  );
}
