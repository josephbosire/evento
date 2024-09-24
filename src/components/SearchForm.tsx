"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchForm = () => {
  const [searchText, setSearchText] = useState("");

  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchText) {
      router.push(`/events/${searchText}`);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="w-full lg:w-[580px]">
      <input
        value={searchText}
        className="w-full h-16 rounded-lg bg-white/[7%] outline-none ring-accent/50 transition focus:ring-2 focus:bg-white/10"
        spellCheck={false}
        placeholder="Search events in any city..."
        onChange={(e) => setSearchText(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
