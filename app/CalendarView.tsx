"use client"

import { formatDate, getFirstEvent } from "@/lib/dates";
import { CyberEvent } from "@/types/event";
import { useEffect, useState } from "react";
import CybearsCalendar from "./CybearsCalendar";

interface CalViewProps {
  events: CyberEvent[]
}

const defaultEvent: CyberEvent = {
  event: "No Upcoming Events",
  date: new Date(),
  content: "Don't forget you can alway reach out to us!"
}

export default function CalendarView({events}:CalViewProps) {
  const [event,setEvent] = useState<CyberEvent>(getFirstEvent(events) || defaultEvent);
  useEffect(() => console.log(event), [event])
  const content = (): string => {
    return event ? event.content : "Select a date to see any club events"
  }
  return (
    <section className="grid w-full grid-flow-row auto-rows-min grid-cols-7">
      <div className="col-span-7 mx-2 flex flex-col gap-2 border-b p-4 lg:col-span-3 lg:h-64 xl:h-96">
        <h1 className="text-5xl font-extrabold lg:text-6xl">
          Baylor Cyber
        </h1>
        <p className="max-w-[700px] text-xl text-muted-foreground">
          Devoted to creating a fun environment for learning cybersecurity and exercising those skills in order to create
          the next generation of the cyber workforce
        </p>
      </div>
      <div className="xs:border-t col-span-7 mx-2 my-1 border-border p-4 sm:col-span-4 sm:border-r lg:row-span-2 lg:border-l lg:border-r-transparent ">
      <hgroup className="mb-2">
        <h1 className="text-4xl font-bold text-primary lg:text-5xl">{event.event}</h1>
        <p className="text-lg font-bold text-muted-foreground">{event.time && `${event.time} `}{formatDate(event.date)} { event.location && `@ ${event.location}`}</p>
      </hgroup>
      <div dangerouslySetInnerHTML={{__html:content()}} className="prose prose-sm dark:prose-invert md:prose-base"></div>
      </div>
      <div className="col-span-7 p-2 sm:col-span-3">
        <p className="text-center text-muted-foreground">Select a date to see information about our events</p>
        <div className="flex w-full justify-center p-2">
          <CybearsCalendar events={events} onEventChange={setEvent}/>
        </div>
      </div>
    </section>
  )
}
