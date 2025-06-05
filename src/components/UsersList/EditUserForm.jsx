"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function EditUserForm({ userData, onSubmit, onClose }) {
  const [formData, setFormData] = useState({
    id: userData.id,
    fullname: userData.full_data.fullName || "",
    username: userData.full_data.username || "",
    email: userData.email || "",
    designation: userData.designation || "",
    tl: userData.tl || "",
    am: userData.am || "",
    manager: userData.manager || "",
    shift: userData.shift || "",
    datapopulation: userData.datapopulation || "",
    role: userData.role || "user",
  });

  useEffect(() => {
    // console.log("Form Data Changed:", formData);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      onSubmit(formData);
    } catch (err) {
      console.error("Request failed:", err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto bg-white space-y-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <InputField
          label="Full Name"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
        />
        <InputField
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <InputField
          label="Email"
          name="email"
          value={formData.email}
          disabled
        />
        <InputField
          label="Designation"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
        />
        <InputField
          label="TL"
          name="tl"
          value={formData.tl}
          onChange={handleChange}
        />
        <InputField
          label="AM"
          name="am"
          value={formData.am}
          onChange={handleChange}
        />
        <InputField
          label="Manager"
          name="manager"
          value={formData.manager}
          onChange={handleChange}
        />
        <InputField
          label="Shift"
          name="shift"
          value={formData.shift}
          onChange={handleChange}
        />
        <InputField
          label="Data Population"
          name="datapopulation"
          value={formData.datapopulation}
          onChange={handleChange}
        />

        {/* Role Dropdown */}
        <div className="flex flex-col gap-1">
          <label htmlFor="role" className="text-sm font-medium text-gray-700">
            Role
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="border rounded px-3 py-2 text-sm"
          >
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
      </div>

      <div className="flex gap-4 pt-6">
        <Button
          type="submit"
          variant="default"
          className="bg-gray-800 hover:bg-gray-900 cursor-pointer"
        >
          Update User
        </Button>
        <Button
          type="button"
          variant="secondary"
          onClick={onClose}
          className="cursor-pointer"
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}

function InputField({ label, name, value, onChange, disabled = false }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <Input
        type="text"
        id={name}
        name={name}
        value={value}
        disabled={disabled}
        onChange={onChange}
      />
    </div>
  );
}
