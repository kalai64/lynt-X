"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Search, X, Mail, Clock } from "lucide-react";
import { useUserLog } from "@/hooks/user-log";
import LoadingSpinner from "@/components/LoadingSpinner";

const getColorFromString = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const colors = [
    "#FF6B6B",
    "#4ECDC4",
    "#45B7D1",
    "#96CEB4",
    "#FFEEAD",
    "#D4A5A5",
    "#9B59B6",
    "#3498DB",
    "#E74C3C",
    "#2ECC71",
  ];
  return colors[Math.abs(hash) % colors.length];
};

const getTimeAgo = (actionDate) => {
  const now = new Date();
  const date = new Date(actionDate);
  const diffMs = now - date;
  const diffMins = Math.round(diffMs / 60000);

  if (diffMins < 60)
    return `${diffMins} minute${diffMins !== 1 ? "s" : ""} ago`;
  const diffHours = Math.round(diffMins / 60);
  if (diffHours < 24)
    return `${diffHours} hour${diffHours !== 1 ? "s" : ""} ago`;
  const diffDays = Math.round(diffHours / 24);
  return `${diffDays} day${diffDays !== 1 ? "s" : ""} ago`;
};

const formatActionDate = (actionDate) => {
  const now = new Date();
  const date = new Date(actionDate);
  const today = now.toISOString().split("T")[0];
  const yesterday = new Date(now.setDate(now.getDate() - 1))
    .toISOString()
    .split("T")[0];

  const actionDateStr = date.toISOString().split("T")[0];

  if (actionDateStr === today) {
    return "Today";
  } else if (actionDateStr === yesterday) {
    return "Yesterday";
  } else {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      timeZone: "Asia/Kolkata",
    }).format(date);
  }
};

const formatActivityTimestamp = (actionDate) => {
  return new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  }).format(new Date(actionDate));
};

const transformUserLogData = (rawData) => {
  const userMap = rawData.reduce((acc, log) => {
    const fullname = log.fullname || "Unknown";
    if (!acc[fullname]) {
      acc[fullname] = {
        username: fullname,
        role: log.role,
        email:log.user.email,
        createdAt: log.actiondate.split("T")[0],
        activities: [],
        initial: fullname.slice(0, 2).toUpperCase(),
        timeAgo: getTimeAgo(log.actiondate),
      };
    }
    acc[fullname].activities.push({
      action: log.action,
      actionDate: log.actiondate,
      formattedDate: formatActionDate(log.actiondate),
      timestamp: formatActivityTimestamp(log.actiondate),
    });
    const currentTimeAgo = getTimeAgo(log.actiondate);
    if (currentTimeAgo < acc[fullname].timeAgo) {
      acc[fullname].timeAgo = currentTimeAgo;
    }
    return acc;
  }, {});

  return Object.values(userMap);
};

const UserCard = ({ user, onClick }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const size = 64;
    canvas.width = size;
    canvas.height = size;

    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    ctx.fillStyle = getColorFromString(user.username);
    ctx.fill();

    ctx.font = "bold 26px Arial";
    ctx.fillStyle = "#FFFFFF";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(user.initial, size / 2, size / 2);
  }, [user.initial, user.username]);

  return (
    <div
      onClick={onClick}
      className="bg-white h-full rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer border border-gray-200"
    >
      <canvas
        ref={canvasRef}
        className="w-20 h-20 rounded-full mb-3 mx-auto"
        aria-label={`Avatar for ${user.username}`}
      />
      <h3 className="text-center text-base font-semibold text-gray-800">
        {user.username}
      </h3>
      <p className="text-center text-sm text-gray-500">{user.role}</p>
      <div className="w-full border-t border-gray-200 my-2" />
      <div className="flex justify-between space-y-2 text-sm">
        <div className="flex flex-col space-y-2">
          <Mail size={16} className="text-blue-500" />
          <span className="text-gray-600">
            {user.email}
          </span>
        </div>
        <div className="flex flex-col space-y-2">
          <Clock size={16} className="text-green-500" />
          <span className="text-gray-600">{user.timeAgo}</span>
        </div>
      </div>
    </div>
  );
};

export default function UserLog() {
  const { userLogData, isLoading, isError } = useUserLog();

  const transformedData = userLogData ? transformUserLogData(userLogData) : [];

  const today = new Date().toISOString().split("T")[0];
  const yesterday = new Date(new Date().setDate(new Date().getDate() - 1))
    .toISOString()
    .split("T")[0];

  const logs = transformedData.length
    ? [
        {
          day: "Today",
          users: transformedData.filter((log) => log.createdAt === today),
        },
        {
          day: "Yesterday",
          users: transformedData.filter((log) => log.createdAt === yesterday),
        },
      ].filter((logGroup) => logGroup.users.length > 0)
    : [];

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  const openDrawer = (user) => {
    setSelectedUser(user);
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedUser(null);
  };

  const filteredLogs = logs
    .map((logGroup) => ({
      ...logGroup,
      users: logGroup.users.filter(
        (user) =>
          user.username.toLowerCase().includes(searchQuery.toLowerCase()) &&
          (!dateFilter || user.createdAt === dateFilter)
      ),
    }))
    .filter((logGroup) => logGroup.users.length > 0);

  const groupActivitiesByDate = (activities) => {
    const grouped = activities.reduce((acc, activity) => {
      const dateLabel = activity.formattedDate;
      if (!acc[dateLabel]) {
        acc[dateLabel] = [];
      }
      acc[dateLabel].push({
        action: activity.action,
        timestamp: activity.timestamp,
      });
      return acc;
    }, {});
    return Object.entries(grouped).sort((a, b) => {
      if (a[0] === 

"Today") return -1;
      if (b[0] === "Today") return 1;
      if (a[0] === "Yesterday") return -1;
      if (b[0] === "Yesterday") return 1;
      return new Date(b[0]) - new Date(a[0]);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br">
      <div className="mx-auto p-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-gray-800">
              User Activity Logs
            </h1>
            <p className="text-sm text-gray-600">
              View and track user activity and login history.
            </p>
          </div>
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search by fullname..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full"
              />
            </div>
          </div>
          <div className="mb-6">
            <Input
              type="date"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              placeholder="Filter by creation date"
              className="w-full sm:w-48"
            />
          </div>
        </div>
        {isLoading && <LoadingSpinner />}
        {isError && (
          <div className="text-center text-red-500">
            Failed to load user logs.
          </div>
        )}
        {!isLoading && !isError && filteredLogs.length > 0
          ? filteredLogs.map((logGroup, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-sm font-medium text-gray-500 uppercase mb-4">
                  {logGroup.day}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {logGroup.users.map((user, idx) => (
                    <UserCard
                      key={idx}
                      user={user}
                      onClick={() => openDrawer(user)}
                    />
                  ))}
                </div>
              </div>
            ))
          : !isLoading &&
            !isError && (
              <div className="text-center text-gray-500">
                No users found matching your criteria.
              </div>
            )}
        <Drawer
          open={isDrawerOpen}
          onOpenChange={setIsDrawerOpen}
          direction="right"
        >
          <DrawerContent className="custom-drawer-content bg-white rounded-l-xl shadow-xl p-5">
            <DrawerHeader>
              <DrawerTitle >{selectedUser?.username}'s Activities</DrawerTitle>
              <DrawerClose asChild>
                <button className="absolute top-4 right-4 cursor-pointer text-gray-500 hover:text-gray-700">
                  <X size={24} />
                </button>
              </DrawerClose>
            </DrawerHeader>
            <div className="overflow-auto">
              {selectedUser ? (
                <div className="space-y-6">
                  {groupActivitiesByDate(selectedUser.activities).map(
                    ([dateLabel, actions], index) => (
                      <div key={index} className="border border-none p-2">
                        <h5 className="text-sm font-semibold text-gray-800 mb-3">
                          {dateLabel}
                        </h5>
                        <ul className="space-y-2">
                          {actions.map((action, idx) => (
                            <li
                              key={idx}
                              className="text-gray-700 text-sm hover:bg-gray-100 p-1 rounded-md transition-colors duration-200 flex items-center justify-between"
                            >
                              <span className="flex-1">{action.action}</span>
                              <span className="text-xs text-gray-500 text-right min-w-[100px]">
                                {action.timestamp}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  )}
                </div>
              ) : (
                <p className="text-gray-500 text-sm">No activities selected.</p>
              )}
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}