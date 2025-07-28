import React from "react";
import { formatSize } from "~/lib/utils";

export default function UploaderSelectedFile({
  selectedFile,
  handleRemove,
}: {
  selectedFile: File;
  handleRemove: any;
}) {
  return (
    <div
      className="uploader-selected-file"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-center space-x-3">
        <img src="/images/pdf.png" alt="upload" className="size-10" />
        <div>
          <p className="text-sm text-gray-700 max-w-x font-medium truncate">
            {selectedFile?.name}
          </p>
          <p className="text-sm text-gray-500">
            {formatSize(selectedFile?.size)}
          </p>
        </div>
      </div>
      <button className="p-2 cursor-pointer" onClick={handleRemove}>
        <img src="/icons/cross.svg" alt="remove" className="w-4 h-4" />
      </button>
    </div>
  );
}
