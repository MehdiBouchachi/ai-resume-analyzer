import React from "react";
import { Link } from "react-router";

export default function UploadButton() {
  return (
    <div className="flex flex-col items-center justify-center mt-10 gap-4">
      <Link
        to={"/upload"}
        className="primary-button w-fit text-xl font-semibold"
      >
        Upload Resume
      </Link>
    </div>
  );
}
