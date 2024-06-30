import ExhibitionCardList from "@/components/ExhibitionCardList";
import ExhibitionFilters from "@/components/ExhibitionFilters";
import React from "react";

const page = () => {
  return (
    <main>
      <div className="flex h-[39.5rem]">
        <div className="w-1/4 pl-10">
          <ExhibitionFilters />
        </div>

        <div className="w-3/4">
          <ExhibitionCardList />
        </div>
      </div>
    </main>
  );
};

export default page;
