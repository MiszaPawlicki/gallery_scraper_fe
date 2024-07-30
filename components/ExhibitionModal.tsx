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
  location?: string;
  imageUrl?: string;
  start_date?: string;
  end_date?: string;
  price?: string;
  description?: string;
  isOpen: boolean;
  exhibitionUrl?: string;
  onOpenChange: () => void;
}

const ExhibitionModal: React.FC<ExhibitionModalProps> = ({
  title,
  location,
  imageUrl,
  start_date,
  end_date,
  price,
  description,
  isOpen,
  exhibitionUrl,
  onOpenChange,
}) => {
  const openExhibition = () => {
    if (exhibitionUrl) {
      window.open(exhibitionUrl, "_blank");
    } else {
      console.log("No exhibition URL");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="5xl"
      scrollBehavior="inside"
      classNames={{
        body: "max-h-[80vh] overflow-auto",
        backdrop: "fixed inset-0 bg-black bg-opacity-50",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {title || "Exhibition Details"}
            </ModalHeader>
            <ModalBody>
              <div className="flex flex-row items-start justify-start">
                {imageUrl && (
                  <div className="w-1/3 pr-4">
                    <Image
                      src={imageUrl}
                      alt={title}
                      className="max-w-full h-auto"
                    />
                  </div>
                )}
                <div className="w-2/3">
                  <p>
                    <strong>location:</strong> {location}
                  </p>
                  <p>
                    <strong>Date:</strong> {start_date} - {end_date}
                  </p>
                  <p>
                    <strong>Price:</strong> {price}
                  </p>
                  <p>
                    <strong>Description:</strong> {description}
                  </p>
                </div>
              </div>
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
