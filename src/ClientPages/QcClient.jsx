"use client";
import { useEffect, useState } from "react";
import BatchHeader from "@/components/QcClientPage/BatchHeader";
import ImageViewer from "@/components/QcClientPage/ImageViewer";
import TabSection from "@/components/QcClientPage/TabSection";
import { useGetCompletedBatches } from "@/hooks/qc-client";

export default function QcClient() {
  const [userId, setUserId] = useState(null);
  const { batches, isLoading } = useGetCompletedBatches();
  const [selectedBatch, setSelectedBatch] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem("userid");
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  return (
    <div className="flex flex-col p-2">
      <BatchHeader image={selectedImage?.image} />
      <div className="flex flex-1 gap-2">
        <div className="flex flex-1 bg-white rounded w-full">
          <ImageViewer
            batches={batches}
            selectedBatch={selectedBatch}
            setSelectedBatch={setSelectedBatch}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
          <TabSection image={selectedImage?.image} />
        </div>
      </div>
    </div>
  );
}
