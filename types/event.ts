import { GrayMatterFile } from "gray-matter"
import { remark } from 'remark'
import html from 'remark-html'

export function toEvent(matterEvent: GrayMatterFile<string>): CyberEvent | null {
  const d = matterEvent.data;
  console.log(d)
  if(d.date && d.event) {
    const content = remark().use(html).processSync(matterEvent.content).toString();
    return {
      date: new Date(d.date as string),
      event: d.event as string,
      location: d.location as string | undefined,
      content
    }
  }
  return null;
}

export type CyberEvent = {
  date: Date,
  event: string,
  location?: string,
  content: string
}
