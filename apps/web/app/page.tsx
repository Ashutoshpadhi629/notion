import { NotionAPI } from "notion-client";
import { NotionRenderer } from "react-notion-x";

export default async function ViewChallenges() {
  const notion = new NotionAPI();
  const recordMap = await notion.getPage("067dd719a912471ea9a3ac10710e7fdf");

  return (
    <div>
      <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />
    </div>
  );
}
