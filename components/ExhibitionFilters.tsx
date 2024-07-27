"use client";
import { DatePicker, Input, Button } from "@nextui-org/react";
import React, { useState } from "react";
import { DateValue } from "@react-types/calendar"; // Import the DateValue type

interface ExhibitionFiltersProps {
  onFilterChange: (filters: {
    search: string;
    date: Date | null;
    showCurrent: boolean;
  }) => void;
}

const ExhibitionFilters: React.FC<ExhibitionFiltersProps> = ({
  onFilterChange,
}) => {
  const [search, setSearch] = useState("");
  const [date, setDate] = useState<DateValue | null>(null);
  const [showCurrent, setShowCurrent] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    onFilterChange({
      search: e.target.value,
      date: date ? new Date(date.toString()) : null,
      showCurrent,
    });
  };

  const handleDateChange = (date: DateValue | null) => {
    setDate(date);
    onFilterChange({
      search,
      date: date ? new Date(date.toString()) : null,
      showCurrent,
    });
  };

  const handleShowCurrentClick = () => {
    setShowCurrent(!showCurrent);
    onFilterChange({
      search,
      date: date ? new Date(date.toString()) : null,
      showCurrent: !showCurrent,
    });
  };

  return (
    <div className="space-y-4 h-[39.5rem] pt-4">
      <div>
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[20rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={
            <img
              src={"icons/icons8-search-250.png"}
              alt="Search exhibitions"
              className="w-8 h-8"
            />
          }
          type="search"
          value={search}
          onChange={handleSearchChange}
        />
      </div>
      <div>
        <DatePicker
          label="When will you attend the exhibition?"
          className="max-w-[20rem]"
          value={date}
          onChange={handleDateChange}
        />
      </div>
      <div>
        <Button
          className="max-w-[20rem]"
          onClick={handleShowCurrentClick}
          color={showCurrent ? "primary" : "default"}
        >
          {showCurrent
            ? "Showing Current Exhibitions"
            : "Show Current Exhibitions"}
        </Button>
      </div>
    </div>
  );
};

export default ExhibitionFilters;
