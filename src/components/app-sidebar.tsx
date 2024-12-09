'use client'
import { Calendar, Home, Globe, Inbox,LogOut, Search, RotateCw, Settings , LayoutDashboard } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useRouter } from "next/router";
import Link from "next/link";
// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/home",
    icon: LayoutDashboard,
  },
  {
    title: "Quiz History",
    url: "/quiz-history",
    icon: RotateCw,
  },
  {
    title: "Logout",
    url: "#",
    icon: LogOut,
  }
]

export function AppSidebar() {

  // const router = useRouter()
  // console.log(router)
  return (
    <Sidebar>
      <SidebarContent className="p-5">
        <SidebarGroup>
          <SidebarGroupLabel>
            <Link href='/home'>
              <div className="flex items-center gap-1">
                <h1 className="text-2xl font-bold text-blue-500">EXAM APP</h1>
                <span className="spin-in-2 spinner animate-spin "><Globe className="text-blue-500"/></span>
              </div>
            </Link>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="mt-5">
              {items.map((item) => {
                return (
                  <SidebarMenuItem className="my-2" key={item.title}>
                  <SidebarMenuButton className="" asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
