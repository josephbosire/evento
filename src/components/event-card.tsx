import { EventoEvent } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

type EventCardProps = {
  event: EventoEvent;
};
const EventCard = ({ event }: EventCardProps) => {
  return (
    <Link
      href={`/event/${event.slug}`}
      className="flex-1 basis-80 h-[380px] w-[500px]"
    >
      <section className="flex flex-col w-full h-full  bg-white/[3%] rounded-xl overflow-hidden relative state-effects">
        <Image
          src={event.imageUrl}
          alt={event.name}
          height={280}
          width={500}
          className="h-[60%] object-cover"
        />
        <div className="flex flex-col flex-1 justify-center items-center">
          <h2 className="text-2xl font-semibold">{event.name}</h2>
          <p className="italix text-white/75">By {event.organizerName}</p>
          <p className="text-sm text-white/50 mt-4">{event.location}</p>
        </div>
        <section className="flex justify-center items-center flex-col absolute left-[12px] top-=[12px] h-[45px] w-[45px] bg-black/30 rounded-md">
          <p className="text-xl font-bold -mb-[5px]">
            {new Date(event.date).toLocaleString("en-US", { day: "2-digit" })}
          </p>
          <p className="text-xs uppercase text-accent">
            {new Date(event.date).toLocaleString("en-US", { month: "short" })}
          </p>
        </section>
      </section>
    </Link>
  );
};
export default EventCard;
