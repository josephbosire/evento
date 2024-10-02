import EventCard from "./event-card";
import { getEvents } from "@/lib/utils";

type EventsListProps = {
  city: string;
  page: number;
};

const EventsList = async ({ city, page }: EventsListProps) => {
  const events = await getEvents(city, page);
  return (
    <section className=" max-w-[1100px] px-[20px] flex flex-wrap gap-10 justify-center">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
};

export default EventsList;
