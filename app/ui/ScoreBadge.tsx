import { cn } from "~/lib/utils";

type ScoreBadgeProps = {
  score: number;
  showLabel?: boolean; // Optional: toggle label or raw score
};

function ScoreBadge({ score, showLabel = true }: ScoreBadgeProps) {
  const getBadgeStyle = () => {
    if (score > 69) {
      return {
        bgClass: "bg-badge-green",
        textClass: "text-green-700",
        icon: "/icons/check.svg",
        label: "Strong",
      };
    } else if (score > 49) {
      return {
        bgClass: "bg-badge-yellow",
        textClass: "text-yellow-700",
        icon: "/icons/warning.svg",
        label: "Good Start",
      };
    } else {
      return {
        bgClass: "bg-badge-red",
        textClass: "text-red-700",
        icon: "/icons/warning.svg",
        label: "Needs Work",
      };
    }
  };

  const { bgClass, textClass, icon, label } = getBadgeStyle();

  return (
    <div className={cn("score-badge", bgClass)}>
      {!showLabel && <img src={icon} alt="score-icon" className="size-4" />}
      <p className={cn("text-sm font-medium", textClass)}>
        {showLabel ? label : `${score}/%`}
      </p>
    </div>
  );
}

export default ScoreBadge;
