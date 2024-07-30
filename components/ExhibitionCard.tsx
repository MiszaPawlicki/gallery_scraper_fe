"use client";

import React from "react";
import { Card, CardHeader, CardBody, Button, Image } from "@nextui-org/react";
import { format, parseISO } from "date-fns";

interface ExhibitionCardProps {
  title?: string;
  location?: string;
  imageUrl?: string;
  start_date?: string;
  end_date?: string;
  price?: string;
  exhibitionUrl?: string;
  onButtonClick?: () => void;
}

const ExhibitionCard: React.FC<ExhibitionCardProps> = ({
  title = "Untitled Exhibition",
  location = "Unknown location",
  imageUrl = "https://via.placeholder.com/300",
  start_date = "Start date not specified",
  end_date = "End date not specified",
  price = "Free",
  exhibitionUrl = "google.com",
  onButtonClick,
}) => {
  const formattedStartDate = start_date
    ? format(parseISO(start_date), "PP")
    : "Start date not specified";
  const formattedEndDate = end_date
    ? format(parseISO(end_date), "PP")
    : "End date not specified";

  // Logic to display one date if start_date and end_date are the same
  const displayDate =
    start_date === end_date
      ? formattedStartDate
      : `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <Card className="border-none bg-background/60 dark:bg-default-100/50 max-w-5xl p-4">
      <CardBody>
        <div className="grid grid-cols-12 gap-4 items-center min-h-48">
          <div className="col-span-12 md:col-span-3">
            <Image
              alt="Paintings from the exhibition"
              className="object-cover"
              height={200}
              width={200}
              shadow="sm"
              src={imageUrl}
            />
          </div>
          <div className="col-span-12 md:col-span-5 mt-4 md:mt-0 ml-2">
            <CardHeader className="p-0">
              <div className="flex flex-col space-y-1">
                <p className="text-lg">{title}</p>
                <p className="text-md text-default-500">{location}</p>
                <p className="text-small text-default-500">{displayDate}</p>
                <p className="text-lg font-bold">{price}</p>
              </div>
            </CardHeader>
          </div>
          <div className="col-span-12 md:col-span-4 flex justify-end items-start mt-4 md:mt-0">
            <Button
              color="default"
              aria-label={`View ${title}`}
              onClick={onButtonClick}
            >
              View Exhibition
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ExhibitionCard;
