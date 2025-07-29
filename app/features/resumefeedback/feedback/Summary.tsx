import Category from "~/ui/Category";
import ScoreGauge from "~/ui/ScoreGauge";

export default function Summary({ feedback }: { feedback: Feedback }) {
  const {
    overallScore,
    toneAndStyle: { score: toneAndStyleScore },
    content: { score: contentScore },
    structure: { score: structureScore },
    skills: { score: skillsScore },
  } = feedback;
  return (
    <div className="bg-white rounded-2xl shadow-md w-full">
      <div className="flex flex-row items-center p-4 gap-8">
        <ScoreGauge score={overallScore} />
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">Your Resume score</h2>{" "}
          <p className="text-sm text-gray-500">
            This score is calculated based on the variables listed below.
          </p>{" "}
        </div>
      </div>
      <Category title="Tone & style" score={toneAndStyleScore} />
      <Category title="Content" score={contentScore} />
      <Category title="Structure" score={structureScore} />
      <Category title="Skills" score={skillsScore} />
    </div>
  );
}
