"use client";
import { ScrollShadow, Spinner } from "@nextui-org/react";
import React from "react";
import ExhibitionCard from "./ExhibitionCard";
import { useEffect, useState } from "react";

const ExhibitionCardList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        //setError(err.message);
        console.log("error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Spinner size="lg" className=" pl-96 pt-80" />;
  if (error) return <p>Error: {error}</p>;

  return (
    <ScrollShadow hideScrollBar className="h-[98%] pl-6 pt-4">
      {data.map((exhibition) => (
        <ExhibitionCard
          imageUrl={exhibition["image"]}
          title={exhibition["title"]}
          gallery={exhibition["gallery"]}
          price={
            exhibition["min_price"] === exhibition["max_price"]
              ? `${exhibition["min_price"]}`
              : `${exhibition["min_price"]} - ${exhibition["max_price"]}`
          }
        />
      ))}
      {/* <ExhibitionCard />
      <ExhibitionCard />
      <ExhibitionCard />
      <ExhibitionCard /> */}
    </ScrollShadow>
  );
};

export default ExhibitionCardList;
