import { ScrollShadow } from "@nextui-org/react";
import React from "react";
import ExhibitionCard from "./ExhibitionCard";

const ExhibitionCardList = () => {
  return (
    <ScrollShadow hideScrollBar className="h-[39.5rem]">
      <ExhibitionCard />
      <ExhibitionCard />
      <ExhibitionCard />
      <ExhibitionCard />
    </ScrollShadow>
  );
};

export default ExhibitionCardList;
