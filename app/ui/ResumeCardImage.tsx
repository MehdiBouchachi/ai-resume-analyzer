
export default function ResumeCardImage({ imagePath }: { imagePath: string }) {
  return (
    <div className="gradient-border animate-in fade-in duration-1000">
      <div className="w-full h-full">
        <img
          src={imagePath}
          alt="resume"
          className="w-full h-[350px] max-sm:h-[200px] object-cover object-top"
        />
      </div>
    </div>
  );
}
