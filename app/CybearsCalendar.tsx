import { Calendar } from "@/components/ui/calendar"
import { datesAreOnSameDay, getFirstEvent } from "@/lib/dates"
import { CyberEvent } from "@/types/event"
import { useState } from "react"

interface CyberCalProps {
  events: CyberEvent[]
  onEventChange: (e: CyberEvent) => void
}


export default function CybearsCalendar({events, onEventChange}: CyberCalProps) {
  const [selected,setSelected] = useState<Date | undefined>(getFirstEvent(events).date);
  const [selectedEvent,setSelectedEvent] = useState(getFirstEvent(events) as CyberEvent | null);

  const eventDays = events.map(e=>e.date);

  const handleDaySelect = (day: Date,modifiers: {[name:string]:boolean}) => {
    setSelected(day);
    if(modifiers.event) {
      const event = events.find(e => datesAreOnSameDay(e.date,day)) || null
      setSelectedEvent(event)
      if(event) {
        onEventChange(event)
      }
    } else {
      setSelectedEvent(null)
    }
  }

  return (
      <Calendar
        selected={selected}
        defaultMonth={getFirstEvent(events).date}
        onDayClick={handleDaySelect}
        className="text-md"
        modifiers={{event: eventDays}}
        modifiersClassNames={{event:"border border-primary"}}
      />
  )
}
