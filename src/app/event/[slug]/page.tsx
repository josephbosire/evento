import H1 from "@/components/H1";
import { getEvent } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const slug = params.slug;
  const event = await getEvent(slug);
  return {
    title: event.name,
  };
};

const EventPage = async ({ params }: Props) => {
  const slug = params.slug;
  const event = await getEvent(slug);
  return (
    <main>
      <section className="relative overflow-hidden flex justify-center items-center py-14 md:py-20">
        <Image
          className="object-cover z-0 blur-3xl"
          src={event.imageUrl}
          alt="Event Background Image"
          quality={50}
          fill
          priority
          sizes="(max-width: 1280px) 100vw, 1280px"
        />
        <div className="z-1 gap-6 lg:gap-16 relative flex flex-col lg:flex-row">
          <Image
            className="rounded-xl border-2 border-white/50 object-cover"
            src={event.imageUrl}
            alt={event.name}
            height={300}
            width={201}
          />
          <div className="flex flex-col">
            <p className="text-white/75">
              {new Date(event.date).toLocaleString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>
            <H1 className="mb-2 mmt-1 whitespace-nowrap lg:text-5xl">
              {event.name}
            </H1>
            <p className="text-white/75 whitespace-nowrap text-xl">
              Organized by <span className="italic">{event.organizerName}</span>
            </p>
            <button className="bg-white/20 text-lg capitalize mt-5 lg:mt-auto w-[95vw] sm:w-full py-2 rounded-md border-white/10 border-2 state-effects">
              Get Tickets
            </button>
          </div>
        </div>
      </section>
      <div className="text-center min-h-[75vh] py-16 px-5">
        <Section>
          <SectionHeading>About this event</SectionHeading>
          <SectionContent>{event.description}</SectionContent>
        </Section>
        <Section>
          <SectionHeading>Location</SectionHeading>
          <SectionContent>{event.location}</SectionContent>
        </Section>
      </div>
    </main>
  );
};

const Section = ({ children }: { children: React.ReactNode }) => {
  return <section className="mb-12">{children}</section>;
};

const SectionHeading = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="text-2xl mb-8">{children}</h2>;
};

const SectionContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="max-w-4xl mx-auto text-lg leading-8 text-white/75">
      {children}
    </p>
  );
};

export default EventPage;
