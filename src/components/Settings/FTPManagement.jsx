"use client";

import { useFTPManagement, useOrganizations, useFTPData } from "@/hooks/ftp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Save, TestTube } from "lucide-react";
import { useState, useEffect } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function FTPManagement() {
  const { dbUser, isLoading: isUserLoading, isLoaded } = useFTPManagement();
  const { organizations, isLoading: isOrgsLoading } = useOrganizations();
  const [selectedOrgId, setSelectedOrgId] = useState("");
  const [ftpForm, setFtpForm] = useState({
    host: "",
    port: "",
    username: "",
    password: "",
    ftppath: "",
    organizationId: "",
    ocr: false,
  });
  const [isSaving, setIsSaving] = useState(false);
  const [isTesting, setIsTesting] = useState(false);

  const orgId =
    dbUser?.role === "superadmin" ? selectedOrgId : dbUser?.organizationId;
  const {
    ftpData,
    isLoading: isFTPLoading,
    saveFTP,
    testFTP,
  } = useFTPData(orgId);

  useEffect(() => {
    if (ftpData) {
      setFtpForm({
        host: ftpData.host || "",
        port: ftpData.port || "",
        username: ftpData.username || "",
        password: ftpData.password || "",
        ftppath: ftpData.ftppath || "",
        organizationId: String(orgId),
        ocr: ftpData.ocr ?? false,
      });
    } else {
      setFtpForm({
        host: "",
        port: "",
        username: "",
        password: "",
        ftppath: "",
        organizationId: String(orgId || ""),
        ocr: false,
      });
    }
  }, [ftpData, orgId]);

  const organization =
    dbUser?.role === "superadmin"
      ? organizations.find((org) => org.id === parseInt(selectedOrgId))
      : { id: dbUser?.organizationId, name: dbUser?.organization?.name || "" };

  const handleSubmitFTP = async () => {
    if (!ftpForm.organizationId) {
      alert("Please select an organization before submitting.");
      return;
    }
    setIsSaving(true);
    try {
      await saveFTP(ftpForm);
    } finally {
      setIsSaving(false);
    }
  };

  const handleTestFTP = async () => {
    if (!ftpForm.organizationId) {
      alert("Please select an organization before testing.");
      return;
    }
    setIsTesting(true);
    try {
      await testFTP(ftpForm);
    } finally {
      setIsTesting(false);
    }
  };

  return (
    <div className="max-w-2xl p-5">
      <div className="gap-4">
        {isUserLoading || isOrgsLoading || isFTPLoading ? (
          <LoadingSpinner/>
        ) : (
          <>

            <CardContent>
              <>
                {organization?.name && (
                  <p className="mb-4 text-sm text-gray-600">
                    <strong>Organization:</strong> {organization.name}
                  </p>
                )}

                {dbUser?.role === "superadmin" && (
                  <div className="mb-6 space-y-2">
                    <Label
                      htmlFor="organization"
                      className="text-sm font-medium"
                    >
                      Select Organization
                    </Label>
                    <Select
                      value={selectedOrgId}
                      onValueChange={(value) => {
                        setSelectedOrgId(value);
                        setFtpForm((prev) => ({
                          ...prev,
                          organizationId: value,
                        }));
                      }}
                      disabled={isSaving || isTesting}
                    >
                      <SelectTrigger id="organization" className="w-full">
                        <SelectValue placeholder="Select Organization" />
                      </SelectTrigger>
                      <SelectContent>
                        {organizations.map((org) => (
                          <SelectItem key={org.id} value={String(org.id)}>
                            {org.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <Label htmlFor="host" className="text-sm font-medium">
                      Host
                    </Label>
                    <Input
                      id="host"
                      placeholder="Enter FTP host"
                      value={ftpForm.host}
                      onChange={(e) =>
                        setFtpForm({ ...ftpForm, host: e.target.value })
                      }
                      disabled={isSaving || isTesting}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="port" className="text-sm font-medium">
                      Port
                    </Label>
                    <Input
                      id="port"
                      placeholder="Enter FTP port"
                      value={ftpForm.port}
                      onChange={(e) =>
                        setFtpForm({ ...ftpForm, port: e.target.value })
                      }
                      disabled={isSaving || isTesting}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="username" className="text-sm font-medium">
                      Username
                    </Label>
                    <Input
                      id="username"
                      placeholder="Enter FTP username"
                      value={ftpForm.username}
                      onChange={(e) =>
                        setFtpForm({ ...ftpForm, username: e.target.value })
                      }
                      disabled={isSaving || isTesting}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="password" className="text-sm font-medium">
                      Password
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter FTP password"
                      value={ftpForm.password}
                      onChange={(e) =>
                        setFtpForm({ ...ftpForm, password: e.target.value })
                      }
                      disabled={isSaving || isTesting}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="ftppath" className="text-sm font-medium">
                      FTP Path
                    </Label>
                    <Input
                      id="ftppath"
                      placeholder="Enter FTP path"
                      value={ftpForm.ftppath}
                      onChange={(e) =>
                        setFtpForm({ ...ftpForm, ftppath: e.target.value })
                      }
                      disabled={isSaving || isTesting}
                    />
                  </div>
                  <div className="flex items-center space-x-2 mt-6">
                    <input
                      type="checkbox"
                      id="ocr"
                      checked={ftpForm.ocr}
                      onChange={(e) =>
                        setFtpForm({ ...ftpForm, ocr: e.target.checked })
                      }
                      className="form-checkbox"
                      disabled={isSaving || isTesting}
                    />
                    <label htmlFor="ocr" className="text-sm font-medium">
                      Enable OCR
                    </label>
                  </div>
                </div>
              </>
            </CardContent>

            <CardFooter className="flex gap-3 mt-4">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-3">
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={handleSubmitFTP}
                  disabled={isSaving || isTesting}
                >
                  {isSaving ? (
                    <LoadingSpinner className="mr-2 h-4 w-4" />
                  ) : (
                    <Save className="mr-2 h-4 w-4" />
                  )}
                  {ftpData ? "Update FTP" : "Save FTP"}
                </Button>
                <Button
                  variant="secondary"
                  className="bg-gray-500 hover:bg-gray-600 text-white"
                  onClick={handleTestFTP}
                  disabled={isSaving || isTesting}
                >
                  {isTesting ? (
                    <LoadingSpinner className="mr-2 h-4 w-4" />
                  ) : (
                    <TestTube className="mr-2 h-4 w-4" />
                  )}
                  Test Connection
                </Button>
              </div>
            </CardFooter>
          </>
        )}
      </div>
    </div>
  );
}
