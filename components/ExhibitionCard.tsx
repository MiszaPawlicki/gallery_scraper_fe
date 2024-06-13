"use client";

import React from "react";
import { Card, CardHeader, CardBody, Button, Image } from "@nextui-org/react";

interface Props {
  title?: string;
  gallery?: string;
  imageUrl?: string;
  date?: string;
  price?: string;
  onButtonClick?: () => void;
}

const ExhibitionCard: React.FC<Props> = ({
  title = "Untitled Exhibition",
  gallery = "Unknown Gallery",
  imageUrl = "https://via.placeholder.com/300",
  date = "Date not specified",
  price = "Free",
  onButtonClick = () => {},
}) => {
  return (
    <Card className="border-none bg-background/60 dark:bg-default-100/50 max-w-2xl max-h-96 p-4">
      <CardBody>
        <div className="grid grid-cols-12 gap-4 items-center">
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
                <p className="text-md text-default-500">{gallery}</p>
                <p className="text-small text-default-500">{date}</p>
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
