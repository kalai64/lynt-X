"use client";
import { useState } from "react";
import Table from "@/components/Table";
import { Upload, Download, CheckSquare } from "lucide-react";
import { useGetAllUnhiddenBatches, useHideBatches } from "@/hooks/taskmonitor";
import LoadingSpinner from "@/components/LoadingSpinner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function TaskMonitor() {
  const { unhiddenBatches = [], isLoading } = useGetAllUnhiddenBatches();
  const { hideBatches, isHiding } = useHideBatches();
  const [open, setOpen] = useState(false);
  const [selectedBatchName, setSelectedBatchName] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const filteredData = unhiddenBatches
    .filter((batch) => {
      const matchesSearch =
        searchQuery === "" ||
        batch.batchname.toLowerCase().includes(searchQuery.toLowerCase());
      const batchDate = new Date(batch.createdat);
      const isAfterFromDate = !fromDate || batchDate >= new Date(fromDate);
      const isBeforeToDate = !toDate || batchDate <= new Date(toDate);
      return matchesSearch && isAfterFromDate && isBeforeToDate;
    })
    .map((batch, index) => ({
      id: batch.uniqueid || index + 1,
      batchId: batch.uniqueid,
      batchName: batch.batchname,
      date: batch.createdat,
      priority: batch.priority,
      engine2Priority: batch.engineToPriority,
      apply: true,
      hide: batch.hide ?? false,
      totalImages: batch.totalImages,
      assignedPending: null,
    }));

  const handleHideBatch = (batchName) => {
    setSelectedBatchName(batchName);
    setOpen(true);
  };

  const confirmHideBatch = () => {
    if (selectedBatchName) {
      hideBatches([selectedBatchName]);
    }
    setOpen(false);
  };

  const columns = [
    { header: "Batch Id", accessor: "batchId" },
    { header: "Batch Name", accessor: "batchName" },
    {
      header: "Date",
      accessor: "date",
      cell: (item) => new Date(item.date).toISOString().split("T")[0],
    },
    { header: "Priority", accessor: "priority" },
    { header: "Engine2Priority", accessor: "engine2Priority" },
    {
      header: "Hide",
      accessor: "hide",
      cell: (item) => (
        <button
          className="text-gray-600 cursor-pointer"
          onClick={() => handleHideBatch(item.batchName)}
          disabled={isHiding}
          title={isHiding ? "Hiding in progress..." : "Hide batch"}
        >
          <CheckSquare className="h-5 w-5" />
        </button>
      ),
    },
    { header: "Total Images", accessor: "totalImages" },
  ];

  return (
    <div className="min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Task Monitor</h1>
      <div className="flex flex-wrap items-center justify-between mb-4 gap-2">
        <div className="flex items-center gap-1 flex-wrap">
          <input
            type="text"
            placeholder="Search Here..."
            className="border rounded-md px-3 py-2 text-sm w-64"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <input
            type="date"
            className="border rounded-md px-3 py-2 text-sm w-35"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
          <button
            className="flex items-center gap-2 cursor-pointer px-4 py-2 text-sm bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 whitespace-nowrap"
            onClick={() => {
              setSearchQuery("");
              setFromDate("");
              setToDate("");
            }}
          >
            Clear
          </button>
        </div>
        
      </div>
      <Table
        columns={columns}
        data={filteredData}
        actionButtons={[]}
        enableSorting={true}
        enableFiltering={false}
        enablePagination={true}
        enableRowSelection={false}
        actionMenu={false}
      />
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Hide</DialogTitle>
            <DialogDescription>
              Are you sure you want to hide the batch "{selectedBatchName}"
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button
              className="bg-red-600 hover:bg-red-700"
              onClick={confirmHideBatch}
            >
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
