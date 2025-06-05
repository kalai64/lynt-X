"use client";
import React, { useState, useMemo } from "react";
import {
  ArrowUpDown,
  ChevronDown,
  ChevronUp,
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function AdvancedExpandTable({
  columns,
  data,
  renderRow,
  renderExpandedRow,
  rowsPerPage = 4,
  enableSorting = false,
  enableFiltering = false,
  enablePagination = true,
}) {
  const [expandedRows, setExpandedRows] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [searchTerm, setSearchTerm] = useState("");
  const [columnFilters, setColumnFilters] = useState({});
  const [showFilters, setShowFilters] = useState(false);

  // Sorting
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

  // Filtering
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

  // Pagination
  const paginatedData = useMemo(() => {
    if (!enablePagination) return filteredData;
    return filteredData.slice(
      (currentPage - 1) * rowsPerPage,
      currentPage * rowsPerPage
    );
  }, [filteredData, currentPage, rowsPerPage, enablePagination]);

  const totalPages = enablePagination
    ? Math.ceil(filteredData.length / rowsPerPage)
    : 1;

  const toggleRow = (index) => {
    setExpandedRows((prev) => ({ ...prev, [index]: !prev[index] }));
  };

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
    setExpandedRows({});
  };

  const clearFilters = () => {
    setColumnFilters({});
    setSearchTerm("");
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
    <div className=" overflow-hidden shadow-sm">
      {/* Table Controls */}
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

      {/* Column Filters */}
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

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-white rounded-t-lg">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider w-12"></th>
              {columns.map((column) => (
                <th
                  key={column.accessor}
                  className={`px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider ${
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
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {paginatedData.length > 0 ? (
              paginatedData.map((item, index) => {
                const globalIndex = (currentPage - 1) * rowsPerPage + index;
                return (
                  <React.Fragment key={globalIndex}>
                    <tr className={`hover:bg-gray-0 ${expandedRows[globalIndex] ? "bg-gray-00" : ""}`}>
                      <td className="px-4 py-2 whitespace-nowrap">
                        <button
                          onClick={() => toggleRow(globalIndex)}
                          className="text-gray-500 hover:text-gray-700 cursor-pointer"
                        >
                          {expandedRows[globalIndex] ? (
                            <ChevronUp className="h-5 w-5" />
                          ) : (
                            <ChevronDown className="h-5 w-5" />
                          )}
                        </button>
                      </td>
                      {renderRowFunction(item)}
                    </tr>
                    {expandedRows[globalIndex] && (
                      <tr>
                        <td colSpan={columns.length + 1} className="px-4 py-4 bg-white">
                          <div className="animate-fadeIn">{renderExpandedRow(item)}</div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })
            ) : (
              <tr>
                <td colSpan={columns.length + 1} className="px-4 py-4 text-center text-gray-500">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {enablePagination && totalPages > 1 && (
        <div className="px-4 py-2 bg-white border-t flex items-center justify-between">
          <div className="text-sm text-gray-700">
            Showing <span className="font-medium">{(currentPage - 1) * rowsPerPage + 1}</span> to{" "}
            <span className="font-medium">
              {Math.min(currentPage * rowsPerPage, filteredData.length)}
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
                      currentPage === pageNum ? "bg-black text-white" : "hover:bg-gray-100"
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
      )}
    </div>
  );
}