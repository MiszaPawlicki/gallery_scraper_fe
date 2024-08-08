"use client";
import React, { useState } from "react";
import { DatePicker, Input, Slider } from "@nextui-org/react";
import { DateValue } from "@react-types/calendar";

interface ExhibitionFiltersProps {
  onSearchChange: (value: string) => void;
  onDateChange: (value: DateValue | null) => void;
}

const ExhibitionFilters: React.FC<ExhibitionFiltersProps> = ({
  onSearchChange,
  onDateChange,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<DateValue | null>(null);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onSearchChange(e.target.value);
  };

  const handleDateChange = (date: DateValue | null) => {
    setSelectedDate(date);
    onDateChange(date);
  };

  return (
    <div className="space-y-4 h-[39.5rem] pt-4">
      <div>
        <Input
          value={searchTerm}
          onChange={handleSearchChange}
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
        />
      </div>
      <div>
        <DatePicker
          label="When will you attend the exhibition?"
          className="max-w-[20rem]"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </div>
      <div>
        <Slider
          label="Price (£)"
          step={1}
          maxValue={30}
          minValue={0}
          defaultValue={30}
          className="max-w-[20rem]"
        />
      </div>
    </div>
  );
};

export default ExhibitionFilters;
