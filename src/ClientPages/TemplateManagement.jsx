"use client";

import { useState } from "react";
import Table from "@/components/Table";
import MetricCard from "@/components/MetricCard";
import {
  Plus,
  // Download,
  // Upload,
  Eye,
  Pencil,
  Trash2,
  Search,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  useGetAllTemplates,
  useDeleteTemplate,
  useToggleClientStatus,
  useUpdateOrderno,
} from "@/hooks/formBuilder";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ViewTemplate from "@/components/TemplateManagement/ViewTemplate";

export default function TemplateManagement() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [templateToDelete, setTemplateToDelete] = useState(null);
  const [selectedTemplateId, setSelectedTemplateId] = useState(null);
  const { templates, isFetching, isFetchError } = useGetAllTemplates();
  const { deleteTemplate, isDeleting } = useDeleteTemplate();
  const { toggleClientStatus, isToggling } = useToggleClientStatus();
  const [orderInputs, setOrderInputs] = useState({});
  const [successfullyUpdatedId, setSuccessfullyUpdatedId] = useState(null);
  const { updateOrderno, isUpdatingOrderno } = useUpdateOrderno();

  const mappedTemplates =
    templates?.map((template, index) => ({
      id: template.id,
      sl: index + 1,
      name: template.name,
      date: new Date(template.createdAt).toLocaleString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
      status: template.isActive ? "Active" : "Inactive",
      isActive: template.isActive,
      client: template.client,
      order: template.orderno,
    })) || [];

  const filteredTemplates = mappedTemplates.filter(
    (template) =>
      template.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!selectedDate || template.date.includes(selectedDate)) &&
      (!selectedStatus || template.status === selectedStatus)
  );

  // Calculate counts and percentages
  const totalTemplates = mappedTemplates.length;
  const activeTemplatesCount = mappedTemplates.filter((t) => t.isActive).length;
  const inactiveTemplatesCount = mappedTemplates.filter((t) => !t.isActive).length;

  const activePercentage =
    totalTemplates > 0
      ? Number(((activeTemplatesCount / totalTemplates) * 100).toFixed(2))
      : 0;
  const inactivePercentage =
    totalTemplates > 0
      ? Number(((inactiveTemplatesCount / totalTemplates) * 100).toFixed(2))
      : 0;

  const columns = [
    {
      header: "SL No",
      accessor: "sl",
      cell: (row) => <div>{row.sl}</div>,
    },
    {
      header: "Template Name",
      accessor: "name",
      cell: (row) => <div>{row.name}</div>,
    },
    {
      header: "Date",
      accessor: "date",
      cell: (row) => <div>{row.date}</div>,
    },
    {
      header: "Status",
      accessor: "status",
      cell: (row) => (
        <div
          className={`px-2 py-1 text-xs font-medium rounded-xl text-center ${
            row.isActive
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {row.status}
        </div>
      ),
    },
    {
      header: "Client",
      accessor: "client",
      cell: (row) => (
        <div>
          <Switch
            checked={row.client}
            onCheckedChange={(value) => handleClientToggle(row.id, value)}
          />
        </div>
      ),
    },
    {
      header: "Order",
      accessor: "orderInput",
      cell: (row) => (
        <div className="text-center">
          <Input
            type="number"
            min={1}
            max={mappedTemplates.length}
            value={orderInputs[row.id] ?? row.order}
            onChange={(e) => {
              const value = e.target.value;
              setOrderInputs((prev) => ({
                ...prev,
                [row.id]: value,
              }));
            }}
            className="w-16"
          />
        </div>
      ),
    },
    {
      header: "Apply Order",
      accessor: "applyOrder",
      cell: (row) => (
        <div>
          <Button
            size="sm"
            onClick={() =>
              handleApplyOrder(
                row.id,
                parseInt(orderInputs[row.id] ?? row.order)
              )
            }
            className={`transition-all duration-300 bg-indigo-100 px-4 py-1 rounded-2xl text-sm cursor-pointer text-indigo-800 hover:bg-indigo-200 ${
              successfullyUpdatedId === row.id
                ? "bg-indigo-600 rounded-full"
                : ""
            }`}
          >
            {successfullyUpdatedId === row.id ? (
              <Check className="h-4 w-4 text-white animate-ping-once" />
            ) : (
              "Apply"
            )}
          </Button>
        </div>
      ),
    },
  ];

  const actionButtons = [
    {
      icon: Eye,
      onClick: (row) => setSelectedTemplateId(row.id),
      variant: "secondary",
      tooltip: "View details",
    },
    {
      icon: Pencil,
      onClick: (row) => router.push(`/edit-template?id=${row.id}`),
      tooltip: "Edit user",
      disabled: (item) => item.id === 1,
    },
    {
      icon: Trash2,
      onClick: (row) => {
        setTemplateToDelete(row);
        setIsDeleteModalOpen(true);
      },
      variant: "danger",
      tooltip: "Delete user",
    },
  ];

  const handleDeleteConfirm = () => {
    if (templateToDelete) {
      deleteTemplate(templateToDelete.id);
      setIsDeleteModalOpen(false);
      setTemplateToDelete(null);
    }
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
    setTemplateToDelete(null);
  };

  const handleClientToggle = (templateId, newValue) => {
    toggleClientStatus({ id: templateId, newValue });
  };

  const handleApplyOrder = (templateId, newOrderno) => {
    updateOrderno({ id: templateId, orderno: newOrderno });
    setSuccessfullyUpdatedId(templateId);
    setTimeout(() => setSuccessfullyUpdatedId(null), 1500);
  };

  return (
    <div className="">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Template Statistics
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <MetricCard
          title="Total Templates"
          value={totalTemplates.toString()}
          change={100} // Total is 100%
          changeType="increase"
          className="w-full"
        />
        <MetricCard
          title="Active Templates"
          value={activeTemplatesCount.toString()}
          change={activePercentage} // Calculated percentage
          changeType={activePercentage > 0 ? "increase" : "decrease"}
          className="w-full"
        />
        <MetricCard
          title="Inactive Templates"
          value={inactiveTemplatesCount.toString()}
          change={inactivePercentage} // Calculated percentage
          changeType={inactivePercentage > 0 ? "increase" : "decrease"}
          className="w-full"
        />
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
        {/* Left Side: Filters */}
        <div className="flex flex-col md:flex-row md:items-center gap-3 w-full">
          <input
            type="text"
            placeholder="Template name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-[220px] px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full md:w-[180px] px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="w-full md:w-[160px] px-4 py-2 text-sm border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <button className="flex items-center gap-x-2 px-4 py-2 text-white rounded-md bg-gray-800 hover:bg-gray-900 cursor-pointer text-sm">
            <Search size={18} />
            <span>Search</span>
          </button>
        </div>

        {/* Right Side: Actions */}
        <div className="flex gap-2">
          {/* <button className="flex items-center cursor-pointer gap-2 px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md whitespace-nowrap">
            <Download size={16} /> Export
          </button>
          <button className="flex items-center cursor-pointer gap-2 px-4 py-2 text-sm bg-green-100 text-green-800 rounded-md hover:bg-green-200 whitespace-nowrap">
            <Upload size={16} /> Import
          </button> */}
          <Link href="/form-builder">
            <button className="flex items-center cursor-pointer gap-2 px-4 py-2 text-sm bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200 whitespace-nowrap">
              <Plus size={16} /> Create Template
            </button>
          </Link>
        </div>
      </div>

      <Table
        columns={columns}
        data={filteredTemplates}
        isLoading={isFetching}
        actionButtons={actionButtons}
        enableSorting={false}
        enableFiltering={false}
        enablePagination={true}
        enableRowSelection={false}
        actionMenu={false}
        itemsPerPage={5}
      />
      <Dialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogDescription>
              Do you want to delete the template "{templateToDelete?.name}"?
              This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={handleDeleteCancel}
              disabled={isDeleting}
            >
              No
            </Button>
            <Button
              variant="destructive"
              onClick={handleDeleteConfirm}
              disabled={isDeleting}
            >
              Yes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      {selectedTemplateId && (
        <ViewTemplate
          templateId={selectedTemplateId}
          isOpen={!!selectedTemplateId}
          onClose={() => setSelectedTemplateId(null)}
        />
      )}
    </div>
  );
}