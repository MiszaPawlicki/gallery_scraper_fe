import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Button,
} from "@nextui-org/react";

// TODO - Style properly
// TODO - feed props in rather than have hard coded values
// TODO - Button Aria label dynamically created

interface Props {
  title: string;
  imageUrl: string;
  price: string;
  onButtonClick?: () => void;
}

const GalleryCard = () => {
  return (
    <Card className="border-none bg-background/60 dark:bg-default-100/50 max-w-5xl max-h-96">
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center">
          <div className="relative col-span-6 md:col-span-4 w-36 h-36">
            <Image
              alt="Paintings from the exhibition"
              className="object-cover"
              height={200} // Adjust the height to make the image smaller
              width={200} // Adjust the width to make the image smaller
              shadow="md"
              src="https://d33hx0a45ryfj1.cloudfront.net/transform/cd286227-af8a-4a3a-8354-c7e1139a09c0/a-ceramic-pottery-vase-with-a-woman-s-head-inside-a-woman-s-face-that-is-split-in-half-and-wearing-a-crown?io=transform:fill,width:688,height:688"
            />
          </div>
          <div className="align-top flex justify-between items-start">
            <CardHeader>
              <div className="flex flex-col">
                <p className=" text-lg">Exhibition Title</p>
                <p className="text-md text-default-500">Gallery Name</p>
                <p className=" text-small text-default-500">
                  10th of May - 3rd of June
                </p>
              </div>
            </CardHeader>
          </div>
          <div>
            <p>£15</p>
          </div>
          <div className="justify-end">
            <Button color="default" aria-label="View Exhibition title">
              View Exhibition
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
export default GalleryCard;
