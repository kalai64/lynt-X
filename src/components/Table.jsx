"use client";
import React, { useState, useMemo } from "react";
import {
  ArrowUpDown,
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
} from "lucide-react";
import LoadingSpinner from "./LoadingSpinner";

export default function AdvancedActionTable({
  columns,
  data,
  renderRow,
  actionButtons = [],
  itemsPerPage = 5,
  isLoading = false,
  enableSorting = false,
  enableFiltering = false,
  enablePagination = true,
  enableRowSelection = false,
  actionMenu = false,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [searchTerm, setSearchTerm] = useState("");
  const [columnFilters, setColumnFilters] = useState({});
  const [showFilters, setShowFilters] = useState(false);
  const [rowSelection, setRowSelection] = useState({});

  const sortedData = useMemo(() => {
    if (!enableSorting) return [...data];
    let sortableData = [...data];
    if (sortConfig.key) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [data, sortConfig, enableSorting]);

  const filteredData = useMemo(() => {
    if (!enableFiltering) return sortedData;
    return sortedData.filter((item) => {
      const matchesSearch = searchTerm
        ? Object.values(item).some((value) =>
            value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
          )
        : true;

      const matchesFilters = Object.entries(columnFilters).every(
        ([key, value]) =>
          !value || item[key]?.toString().toLowerCase().includes(value.toLowerCase())
      );

      return matchesSearch && matchesFilters;
    });
  }, [sortedData, searchTerm, columnFilters, enableFiltering]);

  const paginatedData = useMemo(() => {
    return filteredData.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }, [filteredData, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const requestSort = (key) => {
    if (!enableSorting) return;
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const handleFilterChange = (columnKey, value) => {
    setColumnFilters((prev) => ({ ...prev, [columnKey]: value }));
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const clearFilters = () => {
    setColumnFilters({});
    setSearchTerm("");
  };

  const toggleRowSelection = (id) => {
    setRowSelection((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleSelectAll = () => {
    if (Object.keys(rowSelection).length === paginatedData.length) {
      setRowSelection({});
    } else {
      const newSelection = {};
      paginatedData.forEach((item) => {
        newSelection[item.id] = true;
      });
      setRowSelection(newSelection);
    }
  };

  const defaultRenderRow = (item) => (
    <>
      {columns.map((column, index) => (
        <td key={index} className="px-6 py-4 whitespace-nowrap">
          {column.cell ? column.cell(item) : item[column.accessor] ?? "N/A"}
        </td>
      ))}
    </>
  );

  const renderRowFunction = typeof renderRow === "function" ? renderRow : defaultRenderRow;

  return (
    <div className="border rounded-lg overflow-hidden shadow-sm">
      {enableFiltering && (
        <div className="p-3 bg-gray-50 border-b flex flex-wrap items-center justify-between gap-3">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-3 py-2 text-sm rounded-md border border-gray-300 hover:bg-gray-100"
            >
              <Filter className="h-4 w-4" />
              Filters
            </button>
            {(Object.values(columnFilters).some(Boolean) || searchTerm) && (
              <button
                onClick={clearFilters}
                className="px-3 py-2 text-sm text-red-600 rounded-md hover:bg-red-50"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      )}

      {enableFiltering && showFilters && (
        <div className="p-3 border-b bg-white grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {columns.map((column) => (
            <div key={column.accessor} className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                {column.header}
              </label>
              <input
                type="text"
                placeholder={`Filter ${column.header}`}
                value={columnFilters[column.accessor] || ""}
                onChange={(e) => handleFilterChange(column.accessor, e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {enableRowSelection && (
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-12">
                  <input
                    type="checkbox"
                    checked={
                      Object.keys(rowSelection).length === paginatedData.length &&
                      paginatedData.length > 0
                    }
                    onChange={toggleSelectAll}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </th>
              )}
              {columns.map((column) => (
                <th
                  key={column.accessor}
                  className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
                    enableSorting ? "cursor-pointer" : ""
                  }`}
                  onClick={() => enableSorting && requestSort(column.accessor)}
                >
                  <div className="flex items-center justify-between">
                    {column.header}
                    {enableSorting && (
                      <ArrowUpDown className="h-4 w-4 ml-2 opacity-50" />
                    )}
                  </div>
                </th>
              ))}
              {actionButtons.length > 0 && (
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {isLoading ? (
              <tr>
                <td
                  colSpan={
                    columns.length + (enableRowSelection ? 1 : 0) + (actionButtons.length > 0 ? 1 : 0)
                  }
                  className="px-6 py-8 text-center"
                >
                  <LoadingSpinner />
                </td>
              </tr>
            ) : paginatedData.length > 0 ? (
              paginatedData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  {enableRowSelection && (
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        type="checkbox"
                        checked={!!rowSelection[item.id]}
                        onChange={() => toggleRowSelection(item.id)}
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                    </td>
                  )}
                  {renderRowFunction(item)}
                  {actionButtons.length > 0 && (
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      {actionMenu ? (
                        <div className="relative group">
                          <button className="p-1 rounded-md hover:bg-gray-100">
                            <MoreVertical className="h-5 w-5 text-gray-500" />
                          </button>
                          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg hidden group-hover:block z-10">
                            {actionButtons.map((action, actionIndex) => (
                              <button
                                key={actionIndex}
                                onClick={() => action.onClick(item)}
                                disabled={action.disabled?.(item) || false}
                                className={`block w-full text-left px-4 py-2 text-sm ${
                                  action.variant === "danger"
                                    ? "text-red-600 hover:bg-red-50"
                                    : action.variant === "secondary"
                                    ? "text-blue-700 hover:bg-blue-50"
                                    : "text-yellow-600 hover:bg-yellow-50"
                                } ${action.disabled?.(item) ? "opacity-50 cursor-not-allowed" : ""} ${
                                  action.className || ""
                                }`}
                                title={action.tooltip || ""}
                              >
                                {action.icon && (
                                  <action.icon
                                    className={`inline-block h-4 w-4 mr-2 ${
                                      action.iconProps?.className || ""
                                    }`}
                                  />
                                )}
                                {action.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="flex justify-end gap-2">
                          {actionButtons.map((action, actionIndex) => (
                            <button
                              key={actionIndex}
                              onClick={() => action.onClick(item)}
                              disabled={action.disabled?.(item) || false}
                              className={`inline-flex items-center cursor-pointer px-1 ${
                                action.variant === "danger"
                                  ? "text-red-600"
                                  : action.variant === "secondary"
                                  ? "text-blue-600"
                                  : "text-yellow-600"
                              } ${action.disabled?.(item) ? "opacity-50 cursor-not-allowed" : ""} ${
                                action.className || ""
                              }`}
                              title={action.tooltip || ""}
                            >
                              {action.icon && (
                                <action.icon
                                  className={`h-4 w-4 mr-1 ${action.iconProps?.className || ""}`}
                                />
                              )}
                              {action.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={
                    columns.length + (enableRowSelection ? 1 : 0) + (actionButtons.length > 0 ? 1 : 0)
                  }
                  className="px-6 py-4 text-center text-gray-500"
                >
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="px-6 py-3 bg-white border-t flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-700">
          Showing <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> to{" "}
          <span className="font-medium">
            {Math.min(currentPage * itemsPerPage, filteredData.length)}
          </span>{" "}
          of <span className="font-medium">{filteredData.length}</span> results
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-md border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-1">
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }
              return (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`w-10 h-10 rounded-md text-sm ${
                    currentPage === pageNum ? "bg-blue-500 text-white" : "hover:bg-gray-100"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-md border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}