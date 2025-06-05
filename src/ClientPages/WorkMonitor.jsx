"use client";
import React, { useState } from "react";
import ExpandTable from "@/components/ExpandTable";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useBatches } from "@/hooks/dashboard";
import { useGetWorkMonitor, useReassignUser } from "@/hooks/workmonitor";
import { useGetAllTemplates } from "@/hooks/formBuilder";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useGetOrganizationUsers } from "@/hooks/users";
import toast from "react-hot-toast";
import { Drawer, DrawerContent, DrawerTrigger, DrawerTitle, DrawerClose } from "@/components/ui/drawer";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { X } from "lucide-react";
import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.js';

export default function WorkMonitor() {
  const [batch, setBatch] = useState("all");
  const [user, setUser] = useState("all");
  const [reassignUser, setReassignUser] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const [isReassign, setIsReassign] = useState(false);
  const [convertedImage, setConvertedImage] = useState(null);
  const [isConverting, setIsConverting] = useState(false);

  const { data: batches, isLoading: batchesLoading } = useBatches();
  const { workMonitorData: allWorkMonitorData = [], isLoading: allWorkMonitorLoading } = useGetWorkMonitor("all");
  const { workMonitorData: batchWorkMonitorData = [], isLoading: batchWorkMonitorLoading } = useGetWorkMonitor(batch !== "all" ? batch : null);
  const { templates = [], isFetching: templatesLoading } = useGetAllTemplates();
  const { organizationUsers = [], isLoading: orgUsersLoading, isError: orgUsersError } = useGetOrganizationUsers();
  const { reassignUser: reassignUserMutation, isReassigning } = useReassignUser();
  const isLoading = batchesLoading || batchWorkMonitorLoading || templatesLoading || orgUsersLoading || allWorkMonitorLoading;

  const workMonitorData = batch === "all" ? allWorkMonitorData : batchWorkMonitorData;
  const filteredOrgUsers = organizationUsers.filter((user) => user.role !== "superadmin");
  const selectedUserIds = selectedRows.map((row) => row.userid);
  const reassignableUsers = filteredOrgUsers.filter((user) => !selectedUserIds.includes(String(user.id)));

  const toTitleCase = (str) => {
  if (!str) return str;
  return str.split(' ').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ).join(' ');
};


  const userIdToUsernameMap = organizationUsers.reduce((map, orgUser) => {
    const username = orgUser.fullname ?? `User ${orgUser.id}`;
    map[String(orgUser.id)] = toTitleCase(username);
    return map;
  }, {});

  const dynamicColumns = templates.flatMap((template) => [
    {
      header: `${template.name} Assigned`,
      accessor: `assignedtemplateId_${template.id}`,
      cell: (row) => row[`assignedtemplateId_${template.id}`] ?? 0,
    },
    {
      header: `${template.name} Completed`,
      accessor: `completedtemplateId_${template.id}`,
      cell: (row) => row[`completedtemplateId_${template.id}`] ?? 0,
    },
  ]);

  const mainColumns = [
    { header: "User Name", accessor: "userid", cell: (row) => userIdToUsernameMap[row.userid] || row.userid },
    ...dynamicColumns,
  ];

  const handleRowSelect = (row) => {
    setSelectedRows((prev) => {
      const isSelected = prev.some((selected) => selected.image === row.image);
      if (isSelected) {
        return prev.filter((selected) => selected.image !== row.image);
      } else {
        return [...prev, row];
      }
    });
  };

  const handleReassign = () => {
    setIsReassign(true);
    if (!reassignUser) {
      toast.error("Please select a user to reassign.");
      setIsReassign(false);
      return;
    }

    if (selectedRows.length === 0) {
      toast.error("Please select at least one row to reassign.");
      setIsReassign(false);
      return;
    }

    selectedRows.forEach((row) => {
      const imagePathParts = row.image.split("/");
      const batchname = imagePathParts.length >= 3 ? imagePathParts[2] : "N/A";

      const payload = {
        previoususer: row.userid,
        assignuser: reassignUser,
        image: row.image,
        batchname: batchname,
      };

      console.log("Reassign payload:", payload);

      reassignUserMutation(payload, {
        onSuccess: () => {
          setSelectedRows([]);
          setReassignUser("");
          setIsReassign(false);
        },
        onError: (error) => {
          setIsReassign(false);
        },
      });
    });
  };

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

  const renderExpandedRow = (item) => {
    if (typeof window !== "undefined") {
      console.log("Expanded Row Item:", item);
      console.log("Item's imagecollections:", item.imagecollections);
    }

    return (
      <div className="py-4 bg-white border border-gray-300 rounded-b-lg">
        {item.imagecollections && item.imagecollections.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full w-auto text-sm">
              <thead>
                <tr className="text-left border-b border-gray-200">
                  <th className="pb-2 px-4">Select</th>
                  <th className="pb-2 px-4 max-w-xs">Filename</th>
                  <th className="pb-2 px-4">Image</th>
                  <th className="pb-2 px-4">File Type</th>
                  {templates.map((template) => (
                    <React.Fragment key={template.id}>
                      <th className="pb-2 px-4">{`${template.name} Assigned`}</th>
                      <th className="pb-2 px-4">{`${template.name} Completed`}</th>
                    </React.Fragment>
                  ))}
                </tr>
              </thead>
              <tbody>
                {item.imagecollections.map((image, idx) => (
                  <tr key={idx} className="">
                    <td className="py-2 px-4">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        checked={selectedRows.some((selected) => selected.image === image.image)}
                        onChange={() => handleRowSelect(image)}
                      />
                    </td>
                    <td className="py-2 px-4 max-w-xs truncate">{image.filename}</td>
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
                              fill="currentColor"
                            >
                              <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                            </svg>
                            <span>Image</span>
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
                            <p className="text-gray-600">No image available.</p>
                          )}
                        </DrawerContent>
                      </Drawer>
                    </td>
                    <td className="py-2 px-4">pdf</td>
                    {templates.map((template) => (
                      <React.Fragment key={template.id}>
                        <td className="py-2 px-4">
                          {image.assignedtemplate?.includes(template.id) ? 1 : 0}
                        </td>
                        <td className="py-2 px-4">
                          {image.completedtemplate?.includes(template.id) ? 1 : 0}
                        </td>
                      </React.Fragment>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-sm text-gray-500">No Data Found</p>
        )}
      </div>
    );
  };

  const filteredData =
    user === "all"
      ? workMonitorData
      : workMonitorData
          .map((item) => {
            const filteredCollections = item.imagecollections?.filter((file) => file.userid === user);
            return filteredCollections && filteredCollections.length > 0
              ? { ...item, imagecollections: filteredCollections }
              : null;
          })
          .filter((item) => item !== null);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Work Monitor</h1>

      <div className="flex items-center gap-6 mb-4">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Batch</label>
          <Select value={batch} onValueChange={setBatch}>
            <SelectTrigger className="w-full max-w-[400px] min-w-[250px]">
              <SelectValue placeholder="Select Batch" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Batches</SelectItem>
              {batches?.map((batch) => (
                <SelectItem key={batch.id} value={batch.batchname}>
                  {batch.batchname}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">User</label>
          <Select value={user} onValueChange={setUser}>
            <SelectTrigger className="w-full max-w-[400px] min-w-[250px]">
              <SelectValue placeholder="Select User" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Users</SelectItem>
              {workMonitorData?.map((item) => (
                <SelectItem key={item.userid} value={item.userid}>
                  {userIdToUsernameMap[item.userid] || item.userid}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Reassign To</label>
          <Select value={reassignUser} onValueChange={setReassignUser}>
            <SelectTrigger className="w-full max-w-[400px] min-w-[250px]">
              <SelectValue placeholder="Select User" />
            </SelectTrigger>
            <SelectContent>
              {selectedRows.length > 0 ? (
                  reassignableUsers.map((user) => (
                    <SelectItem key={user.id} value={String(user.id)}>
                      {userIdToUsernameMap[String(user.id)]}
                    </SelectItem>
                  ))
                ) : (
                  <div className="text-gray-400 px-3 py-2 text-sm">
                    Select atleast one image
                  </div>
                )}
            </SelectContent>
          </Select>
        </div>

        {selectedRows.length > 0 && reassignUser && (<div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1 opacity-0">Placeholder</label>
          <Button
            type="button"
            variant="default"
            className="bg-gray-800 hover:bg-gray-900 cursor-pointer"
            onClick={handleReassign}
            disabled={isReassign}
          >
            {isReassign ? "Reassigning..." : "Reassign To"}
          </Button>
        </div>)}
      </div>

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <ExpandTable
          columns={mainColumns}
          data={filteredData}
          renderExpandedRow={renderExpandedRow}
          enableFiltering={false}
          enableSorting={false}
          enablePagination={false}
        />
      )}
    </div>
  );
}