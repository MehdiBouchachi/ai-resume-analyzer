import { Accordion } from "~/ui/Accordion";
import { DetailsCategory } from "~/ui/DetailsCategory";

function Details({ feedback }: { feedback: Feedback }) {
  const {
    toneAndStyle: { score: toneAndStyleScore, tips: toneAndStyleTips },
    content: { score: contentScore, tips: contentTips },
    structure: { score: structureScore, tips: structureTips },
    skills: { score: skillsScore, tips: skillsTips },
  } = feedback;
  return (
    <Accordion.Root defaultOpen="tone-style">
      <Accordion.Item id="tone-style">
        <Accordion.Header itemId="tone-style">
          <DetailsCategory.Header
            title="Tone & Style"
            score={toneAndStyleScore}
          />
        </Accordion.Header>
        <Accordion.Content itemId="tone-style">
          <DetailsCategory.Content tips={toneAndStyleTips} />
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item id="content">
        <Accordion.Header itemId="content">
          <DetailsCategory.Header title="Content" score={contentScore} />
        </Accordion.Header>
        <Accordion.Content itemId="content">
          <DetailsCategory.Content tips={contentTips} />
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item id="structure">
        <Accordion.Header itemId="structure">
          <DetailsCategory.Header title="Structure" score={structureScore} />
        </Accordion.Header>
        <Accordion.Content itemId="structure">
          <DetailsCategory.Content tips={structureTips} />
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item id="skills">
        <Accordion.Header itemId="skills">
          <DetailsCategory.Header title="Skills" score={skillsScore} />
        </Accordion.Header>
        <Accordion.Content itemId="skills">
          <DetailsCategory.Content tips={skillsTips} />
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}

export default Details;
