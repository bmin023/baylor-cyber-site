"use client"

import { formatDate, getFirstEvent } from "@/lib/dates";
import { CyberEvent } from "@/types/event";
import { useEffect, useState } from "react";
import CybearsCalendar from "./CybearsCalendar";

interface CalViewProps {
  events: CyberEvent[]
}

export default function CalendarView({events}:CalViewProps) {
  const [event,setEvent] = useState<CyberEvent>(getFirstEvent(events));
  useEffect(() => console.log(event), [event])
  const content = (): string => {
    return event ? event.content : "Select a date to see any club events"
  }
  return (
    <section className="grid grid-cols-7 w-full grid-flow-row auto-rows-min">
      <div className="border-b p-4 mx-2 flex flex-col gap-2 xl:h-96 lg:h-64 lg:col-span-3 col-span-7">
        <h1 className="lg:text-6xl text-5xl font-extrabold">
          Baylor Cyber
        </h1>
        <p className="max-w-[700px] text-xl text-muted-foreground">
          Devoted to creating a fun environment for learning cybersecurity and exercising those skills in order to create
          the next generation of the cyber workforce
        </p>
      </div>
      <div className="mx-2 p-4 lg:border-l lg:border-r-transparent sm:border-r xs:border-t border-border my-1 lg:row-span-2 sm:col-span-4 col-span-7 ">
      <hgroup className="mb-2">
        <h1 className="text-4xl lg:text-5xl font-bold text-primary">{event.event}</h1>
        <p className="font-bold text-lg text-muted-foreground">{event.time && `${event.time} `}{formatDate(event.date)} { event.location && `@ ${event.location}`}</p>
      </hgroup>
      <div dangerouslySetInnerHTML={{__html:content()}} className="prose dark:prose-invert prose-sm md:prose-base"></div>
      </div>
      <div className="sm:col-span-3 col-span-7 p-2">
        <p className="text-center text-muted-foreground">Select a date to see information about our events</p>
        <div className="flex justify-center w-full p-2">
          <CybearsCalendar events={events} onEventChange={setEvent}/>
        </div>
      </div>
    </section>
  )
}
