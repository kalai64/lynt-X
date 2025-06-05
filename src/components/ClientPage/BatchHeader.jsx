"use client";
import { Button } from "@/components/ui/button";
import { useUserData } from "@/hooks/dashboard";
import { useClerk } from "@clerk/nextjs";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function BatchHeader({ image }) {
  const { data: dbUser } = useUserData();
  const { signOut } = useClerk();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  let batchname = "N/A";
  let imagename = "N/A";

  if (image) {
    const parts = image.split("/");
    if (parts.length >= 4) {
      batchname = parts[2];
      imagename = parts[3];
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
    <div className="flex items-center justify-between p-2 bg-white">
      <div className="flex gap-4 text-sm">
        <div className="border rounded-md px-3 py-1 bg-gray-100 shadow">
          <span className="font-semibold">Batch:</span> {batchname}
        </div>
        <div className="border rounded-md px-3 py-1 bg-gray-100 shadow">
          <span className="font-semibold">File:</span> {imagename}
        </div>
      </div>
       {dbUser?.role === 'user' ? (
        <Button
          variant="outline"
          className="flex items-center gap-1"
          onClick={handleSignOut}
        >
          Logout
        </Button>
      ) : (
        <Button
          variant="outline"
          className="flex items-center gap-1"
          onClick={() => router.back()}
        >
          <ChevronLeft size={16} />
          Back
        </Button>
      )}
    </div>
  );
}