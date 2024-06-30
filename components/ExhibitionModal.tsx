import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Image,
} from "@nextui-org/react";

interface ExhibitionModalProps {
  title?: string;
  gallery?: string;
  imageUrl?: string;
  date?: string;
  price?: string;
  description?: string;
  isOpen: boolean;
  onOpenChange: () => void;
  exhibitionUrl?: string;
}

const ExhibitionModal: React.FC<ExhibitionModalProps> = ({
  title,
  gallery,
  imageUrl,
  date,
  price,
  description,
  isOpen,
  onOpenChange,
  exhibitionUrl, // Added this line
}) => {
  const openExhibition = () => {
    if (exhibitionUrl) {
      window.open(exhibitionUrl, "_blank");
    } else {
      console.log("No exhibition url");
    }
  };

  return (
    <Modal className="h-[37.5rem]" isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {title || "Exhibition Details"}
            </ModalHeader>
            <ModalBody>
              {imageUrl && <Image src={imageUrl} alt={title} width="100%" />}
              <p>
                <strong>Gallery:</strong> {gallery}
              </p>
              <p>
                <strong>Date:</strong> {date}
              </p>
              <p>
                <strong>Price:</strong> {price}
              </p>
              <p>
                <strong>Description:</strong> {description}
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button
                color="primary"
                onPress={() => {
                  openExhibition();
                  onClose();
                }}
              >
                Open Exhibition
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ExhibitionModal;
