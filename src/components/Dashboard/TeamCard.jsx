'use client';

import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { motion } from 'framer-motion';

const TeamAccordion = ({ users }) => {
  const [openItem, setOpenItem] = useState(null);

  const toggleOpen = (value) => {
    setOpenItem(openItem === value ? null : value);
  };

  if (!users || users.length === 0) {
    return <p className="text-sm text-gray-500 capitalize">No users found</p>;
  }

  return (
    <div className="relative overflow-hidden rounded-2xl">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Team Members</h2>
        <div className="max-h-[340px] overflow-y-scroll pr-2 custom-scrollbar">
          <Accordion 
            type="single" 
            collapsible 
            value={openItem} 
            onValueChange={toggleOpen}
            className="space-y-3"
          >
            {users.map((user, index) => {
              const name = user.full_data?.username || user.email || 'Unknown User';
              const avatar = user.full_data?.hasImage
                ? user.full_data.imageUrl
                : `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=40&background=3B82F6&color=fff`;
              const fullName = user.full_data?.fullName || 'N/A';
              const email = user.email || 'N/A';
              const designation = user.designation || 'N/A';
              const shift = user.shift || 'N/A';
              const manager = user.manager || 'N/A';

              return (
                <motion.div
                  key={user.id || index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-sm transition-shadow bg-white"
                  >
                    <AccordionTrigger className="flex items-center gap-4 w-full p-4 text-left focus:outline-none focus:ring-2 focus:ring-gray-500/30 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="relative">
                        <img
                          src={avatar}
                          alt={name}
                          className="w-12 h-12 rounded-full object-cover flex-shrink-0 border-2 border-white shadow-sm"
                        />
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                      </div>
                      <div className="flex-1 text-left min-w-0">
                        <span className="font-semibold text-gray-900 capitalize block truncate">{name}</span>
                        <span className="text-sm text-gray-500 truncate block">{designation}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 pt-0 text-gray-700">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                        <div className="space-y-3">
                          <DetailItem label="Full Name" value={fullName} />
                          <DetailItem label="Email" value={<span className="break-all">{email}</span>} />
                          <DetailItem label="Designation" value={designation} />
                        </div>
                        <div className="space-y-3">
                          <DetailItem label="Shift" value={shift} />
                          <DetailItem label="Manager" value={<span className="break-words">{manager}</span>} />
                          <DetailItem 
                            label="Status" 
                            value={
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                Active
                              </span>
                            } 
                          />
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

const DetailItem = ({ label, value }) => (
  <div className="break-words">
    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">{label}</p>
    <p className="text-sm font-medium text-gray-900 mt-1">{value}</p>
  </div>
);

export default TeamAccordion;
