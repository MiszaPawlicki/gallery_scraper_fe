"use client";
import React, { useState } from "react";
import ExhibitionCardList from "@/components/ExhibitionCardList";
import ExhibitionFilters from "@/components/ExhibitionFilters";
import { DateValue } from "@react-types/calendar";

const Page = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<DateValue | null>(null);

  return (
    <main>
      <div className="flex h-[40rem]">
        <div className="w-1/4 pl-10">
          <ExhibitionFilters
            onSearchChange={setSearchQuery}
            onDateChange={setSelectedDate}
          />
        </div>
        <div className="w-3/4">
          <ExhibitionCardList
            searchQuery={searchQuery}
            selectedDate={selectedDate}
          />
        </div>
      </div>
    </main>
  );
};

export default Page;
