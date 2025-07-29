import React from "react";
import ScoreBadge from "./ScoreBadge";

export default function Category({
  title,
  score,
}: {
  title: string;
  score: number;
}) {
  const textColor =
    score > 69
      ? "text-green-600"
      : score > 49
        ? "text-yellow-600"
        : "text-red-600";
  return (
    <div className="resume-summary">
      <div className="category">
        <div className="flex flex-row gap-2 items-center justify-center">
          <p className="text-2xl">{title}</p>
          <ScoreBadge score={score} />
        </div>

        <p className="text-2xl">
          <span className={textColor}>{score}</span>%
        </p>
      </div>
    </div>
  );
}
