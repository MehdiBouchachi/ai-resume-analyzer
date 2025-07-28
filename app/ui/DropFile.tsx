import React from "react";
import { formatSize } from "~/lib/utils";

export default function DropFile({ maxSize }: { maxSize: number }) {
  return (
    <div>
      <div className="mx-auto flex items-center justify-center w-16 h-16 mb-2">
        <img src="/icons/info.svg" alt="upload" className="size-20" />
      </div>
      <p className="text-lg text-gray-500">
        <span className="font-semibold">Click to upload</span> or drag and drop
        a file here
      </p>
      <p className="text-lg text-gray-500">PDF (max {formatSize(maxSize)})</p>
    </div>
  );
}
