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
    gallery?: string;
    imageUrl?: string;
    date?: string;
    price?: string;
    description?: string;
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
        setData(result);
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
      <ScrollShadow hideScrollBar className="h-[98%] pl-6 pt-4">
        {data.map((exhibition, index) => (
          <ExhibitionCard
            key={index}
            imageUrl={exhibition["image"]}
            title={exhibition["title"]}
            gallery={exhibition["gallery"]}
            price={exhibition["price"]}
            date={exhibition["date"]}
            exhibitionUrl={exhibition["url"]}
            onButtonClick={() =>
              handleCardButtonClick({
                title: exhibition["title"],
                gallery: exhibition["gallery"],
                imageUrl: exhibition["image"],
                date: exhibition["date"],
                price: exhibition["price"],
                description: exhibition["description"],
              })
            }
          />
        ))}
      </ScrollShadow>

      <ExhibitionModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        title={selectedExhibition["title"]}
        gallery={selectedExhibition["gallery"]}
        imageUrl={selectedExhibition["imageUrl"]}
        date={selectedExhibition["date"]}
        price={selectedExhibition["price"]}
        description={selectedExhibition["description"]}
      />
    </>
  );
};

export default ExhibitionCardList;
