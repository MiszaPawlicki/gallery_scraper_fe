import React, { useEffect, useState } from "react";
import { ScrollShadow, Spinner, useDisclosure } from "@nextui-org/react";
import ExhibitionCard from "./ExhibitionCard";
import ExhibitionModal from "./ExhibitionModal";

interface ExhibitionCardListProps {
  searchQuery: string;
  selectedDate: Date | null;
}

interface Exhibition {
  title: string;
  location: string;
  imageUrl: string;
  price: string;
  start_date: string;
  end_date: string;
  description: string;
  exhibitionUrl: string;
}

const ExhibitionCardList: React.FC<ExhibitionCardListProps> = ({
  searchQuery,
  selectedDate,
}) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedExhibition, setSelectedExhibition] = useState<
    Partial<Exhibition>
  >({});

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleCardButtonClick = (exhibition: Partial<Exhibition>) => {
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
        setFilteredData(sortedResult);
      } catch (err) {
        setError("Failed to fetch exhibitions.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let filtered = data;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter((exhibition: Exhibition) =>
        exhibition.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by selected date
    if (selectedDate) {
      const selectedDateObj = new Date(selectedDate);
      filtered = filtered.filter((exhibition: Exhibition) => {
        const startDate = new Date(exhibition.start_date);
        const endDate = new Date(exhibition.end_date);

        return selectedDateObj >= startDate && selectedDateObj <= endDate;
      });
    }

    setFilteredData(filtered);
  }, [searchQuery, selectedDate, data]);

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
        {filteredData.map((exhibition, index) => (
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
