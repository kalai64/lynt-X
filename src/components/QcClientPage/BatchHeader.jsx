"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useClerk } from "@clerk/nextjs";
import { useState } from "react";
import toast from "react-hot-toast";

export default function BatchHeader({ image }) {
  const router = useRouter();
  const { signOut } = useClerk();
  const [isLoading, setIsLoading] = useState(false);
  const role = localStorage.getItem("user_role:");
  let batchname = "N/A";
  let imagename = "N/A";

  if (image) {
    const parts = image.split("/");
    if (parts.length >= 3) {
      batchname = parts[2];
      imagename = parts[3].replace(".pdf", "");
    }
  }

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

  return (
    <div className="flex items-center justify-between bg-white">
      <div className="flex gap-4 text-sm">
        <div className="border rounded-md px-3 py-1 bg-gray-100 shadow">
          <span className="font-semibold">Batch:</span> {batchname}
        </div>
        <div className="border rounded-md px-3 py-1 bg-gray-100 shadow">
          <span className="font-semibold">File:</span> {imagename}
        </div>
      </div>
      <div className="flex gap-2">
        <Button
          variant="outline"
          className="flex items-center gap-1"
          onClick={() => router.back()}
        >
          <ChevronLeft size={16} />
          Back
        </Button>
        {role === "user" && (
          <Button
            variant="outline"
            className="flex items-center gap-1"
            onClick={handleSignOut}
            disabled={isLoading}
          >
            <LogOut size={16} />
            {isLoading ? "Logging out..." : "Logout"}
          </Button>
        )}
      </div>
    </div>
  );
}