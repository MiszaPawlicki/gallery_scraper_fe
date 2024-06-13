import { DatePicker, Input } from "@nextui-org/react";
import React from "react";

const ExhibitionFilters = () => {
  return (
    <div className="space-y-4 h-[39.5rem]">
      <div>
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[17.75rem] h-10",
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
          className="max-w-[17.75rem]"
        />
      </div>
    </div>
  );
};

export default ExhibitionFilters;
