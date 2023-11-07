import { Calendar } from "@/components/ui/calendar"
import { datesAreOnSameDay, getFirstEvent } from "@/lib/dates"
import { CyberEvent } from "@/types/event"
import { useState } from "react"

interface CyberCalProps {
  events: CyberEvent[]
  onEventChange: (e: CyberEvent) => void
}

const defaultEvent: CyberEvent = {
  event: "No Upcoming Events",
  date: new Date(),
  content: "Don't forget you can alway reach out to us!"
}

export default function CybearsCalendar({events, onEventChange}: CyberCalProps) {
  const [selected,setSelected] = useState<Date | undefined>((getFirstEvent(events) || defaultEvent).date);

  const eventDays = events.map(e=>e.date);

  const handleDaySelect = (day: Date,modifiers: {[name:string]:boolean}) => {
    setSelected(day);
    if(modifiers.event) {
      const event = events.find(e => datesAreOnSameDay(e.date,day)) || null
      if(event) {
        onEventChange(event)
      }
    } else {
    }
  }

  return (
      <Calendar
        selected={selected}
        defaultMonth={(getFirstEvent(events) || defaultEvent).date}
        onDayClick={handleDaySelect}
        className="text-md"
        modifiers={{event: eventDays}}
        modifiersClassNames={{event:"border border-primary"}}
      />
  )
}
