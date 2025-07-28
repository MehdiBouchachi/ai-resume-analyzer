import React, { useState, type FormEvent } from "react";
import FormRow from "../../ui/FormRow";
import Button from "~/ui/Button";
import Label from "~/ui/Label";
import Input from "~/ui/Input";
import Form from "~/ui/Form";
import Textarea from "~/ui/Textarea";
import FileUploader from "./FileUploader";
import { useAnalyzeResume } from "./useAnalyzeResume";

type AnalyzeResumeFormProps = {
  setIsProcessing: React.Dispatch<React.SetStateAction<boolean>>;
  setStatusText: React.Dispatch<React.SetStateAction<string>>;
};

export default function AnalyzeResumeForm({
  setIsProcessing,
  setStatusText,
}: AnalyzeResumeFormProps) {
  const analyze = useAnalyzeResume({ setIsProcessing, setStatusText });
  const [file, setFile] = useState<File | null>(null);
  function handleFileSelect(file: File | null) {
    setFile(file);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form) return;
    const formData = new FormData(form);
    const companyName = formData.get("companyName");
    const jobTitle = formData.get("jobTitle");
    const jobDescription = formData.get("jobDescription");

    if (
      !file ||
      typeof companyName !== "string" ||
      typeof jobTitle !== "string" ||
      typeof jobDescription !== "string"
    )
      return;
    analyze({ file, companyName, jobTitle, jobDescription });
  }

  return (
    <Form id="upload-form" onSubmit={handleSubmit}>
      <FormRow>
        <Label htmlFor="company-name">Company Name</Label>
        <Input
          type="text"
          id="company-name"
          name="companyName"
          placeholder="Company Name"
          required
        />
      </FormRow>
      <FormRow>
        <Label htmlFor="job-title">Job Title</Label>
        <Input
          type="text"
          id="job-title"
          name="jobTitle"
          placeholder="Job Title"
          required
        />
      </FormRow>
      <FormRow>
        <Label htmlFor="job-description">Job Description</Label>
        <Textarea
          id="job-description"
          name="jobDescription"
          placeholder="Job Description"
          required
        />
      </FormRow>
      <FormRow>
        <Label htmlFor="uploader">Upload Resume</Label>
        <FileUploader onFileSelected={handleFileSelect} />
      </FormRow>
      <Button>Analyze Resume</Button>
    </Form>
  );
}
