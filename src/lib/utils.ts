import { PrismaClient } from "@prisma/client";
import clsx, { ClassValue } from "clsx";
import { notFound } from "next/navigation";
import { twMerge } from "tailwind-merge";

const prisma = new PrismaClient();
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const capitalize = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getEvents = async (city: string, page = 1) => {
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
    take: 6,
    skip: (page - 1) * 6,
  });
  let totalCount;

  if (city === "all") {
    totalCount = await prisma.eventoEvent.count();
  } else {
    totalCount = await prisma.eventoEvent.count({
      where: {
        city: capitalize(city),
      },
    });
  }

  return { events, totalCount };
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

  if (!event) {
    return notFound();
  }
  return event;
};
