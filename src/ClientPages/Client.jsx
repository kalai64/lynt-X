"use client";
import { useEffect, useState } from "react";
import BatchHeader from "@/components/ClientPage/BatchHeader";
import ImageViewer from "@/components/ClientPage/ImageViewer";
import TabSection from "@/components/ClientPage/TabSection";
import { useGetAssignedImages } from "@/hooks/client";

export default function Client() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem("userid:"); 
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  const { images } = useGetAssignedImages(userId);
  useEffect(() => {
    if (images) {
      // console.log("Full API Response:", images);
    }
  }, [images]);
  const imageUrl = images?.data?.length > 0 ? images.data[0].image : null;
 const assignedlast = images?.data?.length > 0 ? images.data[0].assignedLast : null ;
 const completed = images?.data?.length > 0 ? images.data[0].completed : []

  return (
    <div className="flex flex-col">

      <BatchHeader image={imageUrl} />
      <div className="flex flex-1 gap-4">
        <div className="flex flex-1 w-full">
          <ImageViewer   image={imageUrl}/>
          <TabSection image={imageUrl} completed = {completed} assignedlast = {assignedlast}/>
        </div>
      </div>
    </div>
  );
}
