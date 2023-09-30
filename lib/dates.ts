import { CyberEvent } from "@/types/event";

export const datesAreOnSameDay = (first: Date, second: Date) =>
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate();

export const getFirstEvent = (events: CyberEvent[]) => {
  return events.filter(e => e.date > new Date()).sort((a,b) => a.date.getTime() - b.date.getTime())[0]
}

export const formatDate = (date: Date) => {
  return `${date.toDateString()}`
}
