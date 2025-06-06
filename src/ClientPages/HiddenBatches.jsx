"use client";
import { useState } from "react";
import Table from "@/components/Table";
import { Download, Eye, Upload } from "lucide-react";
import { useGetAllHiddenBatches, useUnHideBatches } from "@/hooks/taskmonitor";
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

export default function HiddenBatches() {
  const { hiddenBatches = [], isLoading } = useGetAllHiddenBatches();
  const { unhideBatches, isUnHiding } = useUnHideBatches();
  const [open, setOpen] = useState(false);
  const [selectedBatchName, setSelectedBatchName] = useState(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const filteredData = hiddenBatches
    .filter((batch) => {
      const matchesSearch =
        !searchQuery ||
        batch.batchname.toLowerCase().includes(searchQuery.toLowerCase());

      const batchDate = batch.createdat ? new Date(batch.createdat) : null;
      const from = fromDate ? new Date(fromDate) : null;
      const to = toDate ? new Date(toDate) : null;

      const matchesFrom = from ? batchDate >= from : true;
      const matchesTo = to ? batchDate <= to : true;

      return matchesSearch && matchesFrom && matchesTo;
    })
    .map((batch, index) => ({
      id: batch.uniqueid || index + 1,
      batchId: batch.uniqueid,
      batchName: batch.batchname,
      date: batch.createdat,
      totalImages: batch.totalImages,
    }));

  const handleUnhide = (batchName) => {
    setSelectedBatchName(batchName);
    setOpen(true);
  };

  const confirmUnhideBatch = () => {
    if (selectedBatchName) {
      unhideBatches([selectedBatchName]);
    }
    setOpen(false);
  };

  const columns = [
    { header: "Batch Id", accessor: "batchId" },
    { header: "Batch Name", accessor: "batchName" },
    {
      header: "Date",
      accessor: "date",
      cell: (item) => new Date(item.date).toLocaleString(),
    },
    { header: "Total Images", accessor: "totalImages" },
    {
      header: "Action",
      accessor: "action",
      cell: (item) => (
        <button
          onClick={() => handleUnhide(item.batchName)}
          disabled={isUnHiding}
          className="bg-gray-800 hover:bg-gray-900 cursor-pointer rounded-md px-3 py-1 text-xs text-white flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Eye className="h-3 w-3" />
          Unhide
        </button>
      ),
    },
  ];

  return (
    <div className="p-6">
      <div className="mb-4 flex flex-wrap items-center gap-4">
        <h2 className="text-xl font-semibold">Hidden Batches</h2>
      </div>

      <div className="flex items-center justify-between mb-4 gap-2">
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

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Table
          columns={columns}
          data={filteredData}
          enableSorting={true}
          enableFiltering={false}
          enablePagination={true}
          enableRowSelection={false}
        />
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Unhide</DialogTitle>
            <DialogDescription>
              Are you sure you want to unhide the batch "{selectedBatchName}"?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button
              className="bg-red-600 hover:bg-red-700"
              onClick={confirmUnhideBatch}
            >
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
