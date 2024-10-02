import { PrismaClient } from "@prisma/client";
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const prisma = new PrismaClient();
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const capitalize = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getEvents = async (city: string) => {
  //const response = await fetch(
  //`https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`,
  //);
  //const events: EventoEvent[] = await response.json();
  const events = await prisma.eventoEvent.findMany({
    where: {
      city: city === "all" ? undefined : capitalize(city),
    },
    orderBy: {
      date: "asc",
    },
  });
  return events;
};

export const getEvent = async (slug: string) => {
  //const response = await fetch(
  //  `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`,
  //);
  //const event = (await response.json()) as EventoEvent;
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug: slug,
    },
  });
  return event;
};
