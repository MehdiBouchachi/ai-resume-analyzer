import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import DropFile from "~/ui/DropFile";
import Input from "~/ui/Input";
import UploaderSelectedFile from "~/ui/UploaderSelectedFile";

interface FileUploaderProps {
  onFileSelected?: (file: File | null) => void;
}

export default function FileUploader({ onFileSelected }: FileUploaderProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const uploadedFile = acceptedFiles[0] || null;
      setSelectedFile(uploadedFile);
      onFileSelected?.(uploadedFile);
    },
    [onFileSelected]
  );

  const maxSize = 20 * 1024 * 1024; // 20 MB
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: { "application/pdf": [".pdf"] },
    maxSize,
  });

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedFile(null);
    onFileSelected?.(null);
  };

  return (
    <div className="w-full gradient-border">
      <div {...getRootProps()}>
        <Input {...getInputProps()} id="uploader" />
        <div className="space-y-4 cursor-pointer">
          {selectedFile ? (
            <UploaderSelectedFile
              selectedFile={selectedFile}
              handleRemove={handleRemove}
            />
          ) : (
            <DropFile maxSize={maxSize} />
          )}
        </div>
      </div>
    </div>
  );
}
