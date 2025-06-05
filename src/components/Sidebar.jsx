"use client";

import {
  X,
  LogOut,
  ChevronRight,
  Home,
  FileText,
  EyeOff,
  User,
  ListChecks,
  Timer,
  UserRoundCog,
  UserCheck,
  History,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useClerk } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

const navItems = [
  {
    icon: <Home className="w-5 h-5" />,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: <FileText className="w-5 h-5" />,
    label: "Template Management",
    href: "/template-management",
  },
  {
    icon: <User className="w-5 h-5" />,
    label: "Users",
    href: "/users-list",
  },
  {
    icon: <ListChecks className="w-5 h-5" />,
    label: "Work Monitor",
    href: "/work-monitor",
  },
  {
    icon: <Timer className="w-5 h-5" />,
    label: "Task Monitor",
    href: "/task-monitor",
  },
  {
    icon: <EyeOff className="w-5 h-5" />,
    label: "Hidden Batches",
    href: "/hidden-batches",
  },
  {
    icon: <UserRoundCog className="w-5 h-5" />,
    label: "Client",
    href: "/client",
  },
  {
    icon: <UserCheck className="w-5 h-5" />,
    label: "QC Client",
    href: "/qc-client",
  },
  {
  icon: <History className="w-5 h-5" />,
  label: "User Log",
  href: "/user-log",
}
];

export default function Sidebar({ open, toggleSidebar }) {
  const { signOut } = useClerk();
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  const handleSignOut = async () => {
    setIsLoading(true);
    try {
      await signOut();
      localStorage.clear();
      toast.success("Logged out successfully!");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        open &&
        !document.getElementById("sidebar-panel")?.contains(event.target)
      ) {
        toggleSidebar();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, toggleSidebar]);

  return (
    <>
      {open && <div className="fixed inset-0 bg-gray-900/30 z-40" />}
      <div
        id="sidebar-panel"
        className={`fixed top-0 right-0 h-full w-76 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold">Menu</h2>
            <button
              className="p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
              onClick={toggleSidebar}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex-1">
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors duration-200 ${
                      pathname === item.href
                        ? "bg-blue-50 text-blue-600"
                        : "text-black hover:bg-gray-100"
                    }`}
                    onClick={toggleSidebar}
                  >
                    <span
                      className={
                        pathname === item.href ? "text-blue-600" : "text-black"
                      }
                    >
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                    {pathname === item.href && (
                      <ChevronRight className="w-4 h-4 ml-auto" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="pt-6 border-t border-gray-200">
            <button
              onClick={handleSignOut}
              className="flex items-center gap-2 cursor-pointer text-black hover:text-gray-900 transition-colors duration-200"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
