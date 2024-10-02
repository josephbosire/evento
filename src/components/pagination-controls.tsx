import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
const btnStyles =
  "flex items-center gap-x-2 hover:opacity-100 transition text-sm text-white px-5 py-3 bg-white/5 rounded-medium opacity-75";

type PaginationControlsProps = {
  previousPath: string;
  nextPath: string;
};
const PaginationControls = ({
  previousPath,
  nextPath,
}: PaginationControlsProps) => {
  return (
    <section className="flex justify-between w-full">
      <Link href={previousPath} className={btnStyles}>
        <ArrowLeftIcon />
        Previous
      </Link>
      <Link href={nextPath} className={btnStyles}>
        Next
        <ArrowRightIcon />
      </Link>
    </section>
  );
};

export default PaginationControls;
