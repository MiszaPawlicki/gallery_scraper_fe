import { ScrollShadow } from "@nextui-org/react";
import React from "react";
import ExhibitionCard from "./ExhibitionCard";

const ExhibitionCardList = () => {
  return (
    <ScrollShadow hideScrollBar className="h-[98%] pl-6 pt-4">
      <ExhibitionCard />
      <ExhibitionCard />
      <ExhibitionCard />
      <ExhibitionCard />
    </ScrollShadow>
  );
};

export default ExhibitionCardList;
