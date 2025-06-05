"use client";

import { Settings, Menu, X } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import { useState, useEffect } from "react";
import { useUserData } from "@/hooks/dashboard";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import FTPManagement from "@/components/Settings/FTPManagement";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { data: dbUser } = useUserData();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const fullUrl = `${
      window.location.origin
    }${pathname}?${searchParams.toString()}`;

    if (dbUser?.role === "user" && !fullUrl.includes("/client")) {
      window.location.href = "/client";
    }
  }, [dbUser, pathname, searchParams]);

  const capitalizeName = (name) => {
    if (!name) return "";
    return name.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const user = {
    name: capitalizeName(dbUser?.full_data?.username),
    role: capitalizeName(dbUser?.role),
    hasImage: dbUser?.full_data?.hasImage,
    imageUrl: dbUser?.full_data?.imageUrl,
    logoUrl: "/Lyt-X-Labs.png",
  };

  const avatarSrc = user.hasImage
    ? user.imageUrl
    : `https://ui-avatars.com/api/?name=${encodeURIComponent(
        user.name || "User"
      )}&size=40&background=3B82F6&color=fff`;

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="sticky top-0 z-50 bg-white flex justify-between items-center px-4 py-3 shadow">
      <div className="flex items-center gap-6">
        <Link href="/">
          <img src={user.logoUrl} alt="Logo" className="w-32 h-12" />
        </Link>
        <div className="border-l pl-2">
          <h1 className="text-2xl font-bold text-gray-800 ml-3">
            Welcome Back,{" "}
            <span className="text-blue-600 font-semibold">
              {/* {user.name || "User"} */}
              Lynt-X
            </span>{" "}
            <span className="inline-block text-amber-500">👋</span>
          </h1>
          <p className="text-sm text-gray-500 ml-3">{user.role || "User"}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        {dbUser?.role !== "user" && (
          <Drawer
            open={drawerOpen}
            onOpenChange={setDrawerOpen}
            direction="right"
          >
            <DrawerTrigger asChild>
              <button className="p-2 text-gray-500 hover:text-gray-700 cursor-pointer" title="FTP Management Settings">
                <Settings size={20} />
              </button>
            </DrawerTrigger>
            <DrawerContent className="custom-drawer-content bg-white rounded-l-xl shadow-xl p-6">
              <DrawerHeader>
                <DrawerTitle> FTP Management</DrawerTitle>
                <DrawerClose asChild>
                  <button className="absolute top-4 right-4 cursor-pointer text-gray-500 hover:text-gray-700">
                    <X size={24} />
                  </button>
                </DrawerClose>
              </DrawerHeader>
              <FTPManagement />
            </DrawerContent>
          </Drawer>
        )}
        <button className="relative w-10 h-10 rounded-full overflow-hidden shadow-md transition cursor-pointer">
          <img
            src={avatarSrc}
            alt="User"
            className="object-cover w-full h-full"
          />
        </button>
        {dbUser?.role !== "user" && (
          <button
            className="p-2 text-gray-500 hover:text-gray-700 cursor-pointer"
            onClick={toggleSidebar}
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
      </div>
      <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
}
