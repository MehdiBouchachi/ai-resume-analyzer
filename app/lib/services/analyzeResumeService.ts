import { prepareInstructions } from "~/constants";
import { convertPdfToImage } from "../pdf2img";
import { usePuterStore } from "../puter";
import { generateUUID } from "../utils";

interface AnalyzeResumeOptions {
  file: File;
  companyName: string;
  jobTitle: string;
  jobDescription: string;
  setStatusText: (text: string) => void;
  setError?: (msg: string) => void;
}

export async function analyzeResume({
  file,
  companyName,
  jobTitle,
  jobDescription,
  setStatusText,
  setError,
}: AnalyzeResumeOptions) {
  const { fs, kv, ai } = usePuterStore.getState();
  const uuid = generateUUID();
  const resumeData = {
    id: uuid,
    resumePath: "",
    imagePath: "",
    companyName,
    jobTitle,
    jobDescription,
    feedback: "",
  };

  try {
    setStatusText("Uploading resume file...");
    const uploadedFile = await fs.upload([file]);
    if (!uploadedFile)
      throw new Error("Upload failed: resume file not uploaded.");
    resumeData.resumePath = uploadedFile.path;
  } catch (err) {
    const msg =
      "[Resume Upload] " +
      (err instanceof Error ? err.message : "Unknown error");
    console.error(msg, err);
    setStatusText("Error during file upload.");
    setError?.(msg);
    return null;
  }

  try {
    setStatusText("Converting PDF to image...");
    const imageFile = await convertPdfToImage(file);
    if (!imageFile?.file)
      throw new Error("Conversion failed: PDF to image returned null.");
  } catch (err) {
    const msg =
      "[PDF Conversion] " +
      (err instanceof Error ? err.message : "Unknown error");
    console.error(msg, err);
    setStatusText("Error during PDF conversion.");
    setError?.(msg);
    return null;
  }

  try {
    setStatusText("Uploading image...");
    const imageFile = await convertPdfToImage(file);
    if (!imageFile?.file) {
      throw new Error("Conversion failed: PDF to image returned null.");
    }
    const uploadedImage = await fs.upload([imageFile.file]);
    if (!uploadedImage) throw new Error("Upload failed: image not uploaded.");
    resumeData.imagePath = uploadedImage.path;
  } catch (err) {
    const msg =
      "[Image Upload] " +
      (err instanceof Error ? err.message : "Unknown error");
    console.error(msg, err);
    setStatusText("Error during image upload.");
    setError?.(msg);
    return null;
  }

  try {
    setStatusText("Saving resume metadata...");
    await kv.set(`resume:${uuid}`, JSON.stringify(resumeData));
  } catch (err) {
    const msg = "[KV Save] Failed to store metadata.";
    console.error(msg, err);
    setStatusText("Error saving data.");
    setError?.(msg);
    return null;
  }

  try {
    setStatusText("Running AI analysis...");
    const instructions = prepareInstructions({ jobTitle, jobDescription });
    const feedback = await ai.feedback(resumeData.resumePath, instructions);
    if (!feedback) throw new Error("AI did not return feedback.");

    const feedbackText =
      typeof feedback.message.content === "string"
        ? feedback.message.content
        : feedback.message.content[0]?.text;

    resumeData.feedback = JSON.parse(feedbackText || "{}");
  } catch (err) {
    const msg = "[AI Feedback] Failed to process resume.";
    console.error(msg, err);
    setStatusText("Error analyzing resume.");
    setError?.(msg);
    return null;
  }

  try {
    setStatusText("Storing final result...");
    await kv.set(`resume:${uuid}`, JSON.stringify(resumeData));
  } catch (err) {
    const msg = "[Final Save] Could not save analysis result.";
    console.error(msg, err);
    setStatusText("Error saving analysis.");
    setError?.(msg);
    return null;
  }

  console.log("✅ Final Resume Analysis Data:", resumeData);
  return resumeData;
}
