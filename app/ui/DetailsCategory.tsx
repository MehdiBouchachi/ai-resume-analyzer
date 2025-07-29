import { cn } from "~/lib/utils";
import ScoreBadge from "~/ui/ScoreBadge";

type Tip = {
  type: "good" | "improve";
  tip: string;
  explanation: string;
};

export const DetailsCategory = {
  Header: ({ title, score }: { title: string; score: number }) => (
    <div className="flex flex-row gap-4 items-center py-2">
      <p className="text-2xl font-semibold">{title}</p>
      <ScoreBadge score={score} showLabel={false} />
    </div>
  ),

  Content: ({ tips }: { tips: Tip[] }) => {
    const SummaryList = () => (
      <div className="bg-gray-50 w-full rounded-lg px-5 py-4 grid grid-cols-2 gap-4">
        {tips.map((tip, index) => (
          <div
            className="flex flex-row gap-2 items-center"
            key={`summary-${index}`}
          >
            <img
              src={
                tip.type === "good" ? "/icons/check.svg" : "/icons/warning.svg"
              }
              alt={tip.type}
              className="size-5"
            />
            <p className="text-xl text-gray-500">{tip.tip}</p>
          </div>
        ))}
      </div>
    );

    const ExplanationCards = () => (
      <div className="flex flex-col gap-4 w-full">
        {tips.map((tip, index) => {
          const isGood = tip.type === "good";
          return (
            <div
              key={`explanation-${index}`}
              className={cn(
                "flex flex-col gap-2 rounded-2xl p-4",
                isGood
                  ? "bg-green-50 border border-green-200 text-green-700"
                  : "bg-yellow-50 border border-yellow-200 text-yellow-700"
              )}
            >
              <div className="flex flex-row gap-2 items-center">
                <img
                  src={isGood ? "/icons/check.svg" : "/icons/warning.svg"}
                  alt={tip.type}
                  className="size-5"
                />
                <p className="text-xl font-semibold">{tip.tip}</p>
              </div>
              <p>{tip.explanation}</p>
            </div>
          );
        })}
      </div>
    );

    return (
      <div className="flex flex-col gap-4 items-center w-full">
        <SummaryList />
        <ExplanationCards />
      </div>
    );
  },
};
