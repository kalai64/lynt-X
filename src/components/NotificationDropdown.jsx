'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bell, Mail, AlertTriangle, CheckCircle2 } from "lucide-react"

export default function NotificationDropdown() {
  const notifications = [
    {
      id: 1,
      type: 'message',
      title: 'New message received',
      description: 'You have 3 unread messages',
      time: '2 hours ago',
      read: false
    },
    {
      id: 2,
      type: 'alert',
      title: 'System update required',
      description: 'Please update to the latest version',
      time: '1 day ago',
      read: true
    },
    {
      id: 3,
      type: 'success',
      title: 'Task completed',
      description: 'Your batch processing job is finished',
      time: '3 days ago',
      read: true
    }
  ]

  const unreadCount = notifications.filter(n => !n.read).length

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative cursor-pointer">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              {unreadCount}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 p-0" align="end" forceMount>
        <DropdownMenuLabel className="px-4 py-3 border-b">
          <div className="flex justify-between items-center">
            <span className="font-semibold">Notifications</span>
            <Button variant="link" size="sm" className="h-auto p-0 text-primary">
              Mark all as read
            </Button>
          </div>
        </DropdownMenuLabel>
        
        <div className="max-h-96 overflow-y-auto">
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <DropdownMenuItem 
                key={notification.id} 
                className={`px-4 py-3 border-b ${!notification.read ? 'bg-gray-50' : ''}`}
              >
                <div className="flex gap-3 w-full">
                  <div className={`flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full ${
                    notification.type === 'message' ? 'bg-blue-100 text-blue-600' :
                    notification.type === 'alert' ? 'bg-amber-100 text-amber-600' :
                    'bg-green-100 text-green-600'
                  }`}>
                    {notification.type === 'message' ? <Mail className="h-5 w-5" /> :
                     notification.type === 'alert' ? <AlertTriangle className="h-5 w-5" /> :
                     <CheckCircle2 className="h-5 w-5" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{notification.title}</p>
                    <p className="text-sm text-gray-500 truncate">{notification.description}</p>
                    <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                  </div>
                  {!notification.read && (
                    <div className="flex-shrink-0 ml-2">
                      <span className="h-2 w-2 rounded-full bg-red-500"></span>
                    </div>
                  )}
                </div>
              </DropdownMenuItem>
            ))
          ) : (
            <div className="px-4 py-6 text-center text-sm text-gray-500">
              No new notifications
            </div>
          )}
        </div>

        <DropdownMenuItem className="justify-center border-t">
          <Link href="/notifications" className="text-sm font-medium text-primary">
            View all notifications
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}