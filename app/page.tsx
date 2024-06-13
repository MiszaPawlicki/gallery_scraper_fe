import ExhibitionCardList from "@/components/ExhibitionCardList";
import ExhibitionFilters from "@/components/ExhibitionFilters";
import React from "react";

const page = () => {
  return (
    <div>
      {/* 
      list of gallery cards with shadow
      on click a dynamically rendred page opens
      */}

      <div className="flex h-[39.5rem]">
        <div className="w-1/4  pl-10 ">
          <ExhibitionFilters />
        </div>
        <div className="w-3/4">
          <div className="pl-20">
            <ExhibitionCardList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
