"use client";
import { ScrollShadow, Spinner, useDisclosure } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import ExhibitionCard from "./ExhibitionCard";
import ExhibitionModal from "./ExhibitionModal";

const ExhibitionCardList: React.FC = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedExhibition, setSelectedExhibition] = useState<{
    title?: string;
    location?: string;
    imageUrl?: string;
    start_date?: string;
    end_date?: string;
    price?: string;
    description?: string;
    exhibitionUrl?: string;
  }>({});

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleCardButtonClick = (exhibition: typeof selectedExhibition) => {
    setSelectedExhibition(exhibition);
    onOpen();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("api/exhibitions");
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();

        // Sort exhibitions by start_date
        const sortedResult = result.sort(
          (
            a: { start_date: string | number | Date },
            b: { start_date: string | number | Date }
          ) =>
            new Date(b.start_date).getTime() - new Date(a.start_date).getTime()
        );

        setData(sortedResult);
      } catch (err) {
        setError("Failed to fetch exhibitions.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center h-full">
        <Spinner size="lg" />
      </div>
    );
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <ScrollShadow hideScrollBar className="h-[100%] pl-6 pt-4">
        {data.map((exhibition, index) => (
          <ExhibitionCard
            key={index}
            imageUrl={exhibition["image"]}
            title={exhibition["title"]}
            location={exhibition["location"]}
            price={exhibition["price"]}
            start_date={exhibition["start_date"]}
            end_date={exhibition["end_date"]}
            exhibitionUrl={exhibition["url"]}
            onButtonClick={() =>
              handleCardButtonClick({
                title: exhibition["title"],
                location: exhibition["location"],
                imageUrl: exhibition["image"],
                start_date: exhibition["start_date"],
                end_date: exhibition["end_date"],
                price: exhibition["price"],
                description: exhibition["description"],
                exhibitionUrl: exhibition["url"],
              })
            }
          />
        ))}
      </ScrollShadow>

      <ExhibitionModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        title={selectedExhibition["title"]}
        location={selectedExhibition["location"]}
        imageUrl={selectedExhibition["imageUrl"]}
        start_date={selectedExhibition["start_date"]}
        end_date={selectedExhibition["end_date"]}
        price={selectedExhibition["price"]}
        description={selectedExhibition["description"]}
        exhibitionUrl={selectedExhibition["exhibitionUrl"]}
      />
    </>
  );
};

export default ExhibitionCardList;
