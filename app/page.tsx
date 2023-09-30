import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import CybearsCalendar from "./CybearsCalendar"
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'
import { toEvent, CyberEvent } from "@/types/event";
import CalendarView from "./CalendarView";

const EVENT_PATH = path.join(process.cwd(),'events');

function getEvents(): CyberEvent[] {
  const paths = fs.readdirSync(EVENT_PATH)
  const events = paths.map(p => toEvent(matter.read(path.join(EVENT_PATH,p))))
  const nonulls = []
  for(const event of events) {
    if(event) {
      nonulls.push(event)
    }
  }
  return nonulls;
}

export default function IndexPage() {
  return (
    <CalendarView events={getEvents()}/>
  )
}
