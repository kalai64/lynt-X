"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import MetricCard from "@/components/MetricCard";
import MiniBarChart from "@/components/Dashboard/mini-bar-chart";
import PerformanceChart from "@/components/Dashboard/performance-chart";
import ExpandTable from "@/components/ExpandTable";
import { useBatches, useGetMetricsData, useUserData } from "@/hooks/dashboard";
import { useOrganizationUsers } from "@/hooks/organization";
import LoadingSpinner from "@/components/LoadingSpinner";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerTitle,
  DrawerClose,
} from "@/components/ui/drawer";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Progress from "@/components/Dashboard/Progress";
import { X } from "lucide-react";
import * as pdfjsLib from "pdfjs-dist";
pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.js";

export default function Dashboard() {
  const [convertedImage, setConvertedImage] = useState(null);
  const [isConverting, setIsConverting] = useState(false);
  const { data: dbUser, isLoading: userLoading } = useUserData();
  const organizationId = dbUser?.organizationId;
  const router = useRouter();
  const tableRef = useRef(null);

  const { users, isLoading: usersLoading } = useOrganizationUsers(organizationId);
  const [selectedDate] = useState("Feb 9, 2020");
  const { data: batches, isLoading: batchesLoading } = useBatches();
  const { metrics, isMetricsDataLoading } = useGetMetricsData();
  const isLoading =
    userLoading || batchesLoading || usersLoading || isMetricsDataLoading;

  // console.log("usersinfo", users);

  const chartData = [
    { date: "Feb 6", views: 12, completion: 10 },
    { date: "Feb 7", views: 5, completion: 8 },
    { date: "Feb 8", views: 25, completion: 20 },
    { date: "Feb 9", views: 48, completion: 54 },
    { date: "Feb 10", views: 30, completion: 25 },
    { date: "Feb 11", views: 10, completion: 15 },
    { date: "Feb 12", views: 28, completion: 30 },
  ];

  const batchColumns = [
    { header: "Batch Name", accessor: "batchname" },
    { header: "Date", accessor: "createdat" },
    { header: "Total Images", accessor: "imagescount" },
  ];

  const convertPdfToImage = async (pdfUrl) => {
    try {
      setIsConverting(true);
      setConvertedImage(null);

      const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
      const page = await pdf.getPage(1);

      const viewport = page.getViewport({ scale: 1.0 });

      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      await page.render({
        canvasContext: context,
        viewport: viewport,
      }).promise;

      const imageData = canvas.toDataURL("image/png");
      setConvertedImage(imageData);
    } catch (error) {
      console.error("Error converting PDF to image:", error);
      setConvertedImage(null);
    } finally {
      setIsConverting(false);
    }
  };

  // Function to scroll to the table
  const scrollToTable = () => {
    tableRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Calculate percentages for Pending and Finished Batches
  const totalBatches = metrics?.totalbatch ?? 0;
  const pendingPercentage =
    totalBatches > 0
      ? Number(((metrics?.pendingbatchescount / totalBatches) * 100).toFixed(2))
      : 0;
  const finishedPercentage =
    totalBatches > 0
      ? Number(((metrics?.finishedbatchcount / totalBatches) * 100).toFixed(2))
      : 0;

  // if (isLoading) {
  //   return <LoadingSpinner />;
  // }

  return (
    <div className="w-full relative min-h-screen p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
        <MetricCard
          title="Batches"
          value={totalBatches}
          subtext="View"
          change={100}
          changeType="increase"
          onViewClick={scrollToTable}
        />
        <MetricCard
          title="Pending Batches"
          value={metrics?.pendingbatchescount ?? 0}
          subtext="View"
          change={pendingPercentage}
          changeType={pendingPercentage >= 50 ? "increase" : "decrease"}
          onViewClick={() => router.push("/work-monitor")}
        />
        <MetricCard
          title="Finished Batches"
          value={metrics?.finishedbatchcount ?? 0}
          subtext="View"
          change={finishedPercentage}
          changeType={finishedPercentage >= 50 ? "increase" : "decrease"}
          chart={<MiniBarChart />}
          onViewClick={() => router.push("/work-monitor")}
        />
        <MetricCard
          title="Templates"
          value={metrics?.totaltemplate ?? 0}
          subtext="View"
          
          onViewClick={() => router.push("/template-management")}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-4">
        <div className="col-span-3 lg:col-span-2">
          <PerformanceChart
            title="Batch Performance"
            data={chartData}
            selectedDate={selectedDate}
          />
        </div>
        <div>
          <Progress />
        </div>
      </div>
      <div
        ref={tableRef}
        className="grid grid-cols-1 lg:grid-cols-1 gap-5 mb-4"
      >
        <div className="bg-[#f9f8f6] rounded-xl col-span-2 p-5 transition-shadow duration-300 w-full">
          <h2 className="text-xl font-bold text-black mb-3">Batch List</h2>
          <div className="overflow-x-auto bg-white rounded-xl">
            <ExpandTable
              columns={batchColumns}
              data={batches}
              enableSorting={true}
              enableFiltering={false}
              enablePagination={true}
              rowsPerPage={5}
              renderRow={(item) => (
                <>
                  <td className="py-2 px-4 max-w-xs truncate">
                    {item.batchname}
                  </td>
                  <td className="py-2 px-4">
                    {new Date(item.createdat).toLocaleDateString()}
                  </td>
                  <td className="py-2 px-4">
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-5 h-5 text-blue-500"
                        fill="currentcolor"
                      >
                        <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-208 0c-35.3 0-64 28.7-64 64l0 144-48 0c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z" />
                      </svg>
                      {item.imagescount ?? "-"}
                    </div>
                  </td>
                </>
              )}
              renderExpandedRow={(item) => (
                <div className="py-4 bg-white border border-gray-300 rounded-b-lg">
                  {item.imagecollection && item.imagecollection.length > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="min-w-full w-auto text-sm">
                        <thead>
                          <tr className="text-left border-b border-gray-200">
                            <th className="pb-2 px-4 max-w-xs">Filename</th>
                            <th className="pb-2 px-4">Created At</th>
                            <th className="pb-2 px-4">Image</th>
                            <th className="pb-2 px-4">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {item.imagecollection.map((image, idx) => (
                            <tr key={idx} className="">
                              <td className="py-2 px-4 max-w-xs truncate">
                                {image.filename}
                              </td>
                              <td className="py-2 px-4 flex items-center gap-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 448 512"
                                  className="w-4 h-4 text-blue-500"
                                  fill="currentcolor"
                                >
                                  <path d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z" />
                                </svg>
                                {new Date(image.createdat).toLocaleDateString()}
                              </td>
                              <td className="py-2 px-4">
                                <Drawer direction="right">
                                  <DrawerTrigger asChild>
                                    <button
                                      className="flex items-center cursor-pointer gap-2 bg-blue-500 text-white px-3 py-1 rounded-xl hover:bg-blue-600 transition-colors"
                                      onClick={() => convertPdfToImage(image.image)}
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512"
                                        className="w-4 h-4"
                                        fill="currentcolor"
                                      >
                                        <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                                      </svg>
                                      <span>View Image</span>
                                    </button>
                                  </DrawerTrigger>
                                  <DrawerContent className="custom-drawer-content bg-white rounded-l-xl shadow-xl p-6 overflow-y-auto">
                                    <VisuallyHidden>
                                      <DrawerTitle>Image Preview</DrawerTitle>
                                    </VisuallyHidden>
                                    <DrawerClose className="absolute top-4 right-4">
                                      <X className="w-6 h-6 text-gray-600 hover:text-gray-800" />
                                    </DrawerClose>
                                    {isConverting ? (
                                      <div className="flex justify-center items-center h-full">
                                        <LoadingSpinner />
                                      </div>
                                    ) : convertedImage ? (
                                      <img
                                        src={convertedImage}
                                        alt={image.filename}
                                      />
                                    ) : (
                                      <p className="text-gray-600">no image available.</p>
                                    )}
                                  </DrawerContent>
                                </Drawer>
                              </td>
                              <td className="py-2 px-4 capitalize">
                                <span
                                  className={`rounded-md px-2 py-0.5 leading-[1.2] text-[0.7rem] ${
                                    image.status === "notprocessed"
                                      ? "bg-blue-100 text-blue-600"
                                      : "bg-green-100 text-green-600"
                                  }`}
                                >
                                  {image.status === "notprocessed"
                                    ? "Not Processed"
                                    : "OCR Processed"}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500">No Data's Found</p>
                  )}
                </div>
              )}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}