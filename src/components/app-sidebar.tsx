"use client";

import * as React from "react";
import {
  BookOpen,
  Bot,
  Command,
  Frame,
  LifeBuoy,
  Map,
  PencilIcon,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Semester A",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Civil Mechanics",
          url: "/dashboard/mechanics",
        },
        {
          title: "Mathematics A",
          url: "/dashboard/mathematics",
        },
        {
          title: "Physics",
          url: "/dashboard",
        },
        {
          title: "Engineering Drawing",
          url: "/dashboard/graphics",
        },
        {
          title: "Electrical",
          url: "/dashboard/electrical",
        },
      ],
    },
    {
      title: "Semester B",
      icon: Bot,
      items: [
        {
          title: "Chemistry",
          url: "/dashboard/sem-b/chemistry",
        },
        {
          title: "Electronics",
          url: "/dashboard/sem-b/electronics",
        },
        {
          title: "Technical English",
          url: "/dashboard/sem-b/english",
        },
        {
          title: "Programming",
          url: "/dashboard/sem-b/programming",
        },
        {
          title: "Mathematics 2",
          url: "/dashboard/sem-b/mathematics",
        },
      ],
    },
    {
      title: "Code-Editior",
      url: "/dashboard/code-editior",
      icon: BookOpen,
    },
    {
      title: "Text-editior",
      url: "/dashboard/sem-a/physics",
      icon: Settings2,
    },
    {
      title: "Assigmnet-solve",
      url: "/dashboard/sem-a/physics",
      icon: Settings2,
    },
    {
      title: "More",
      url: "/dashboard/sem-a/physics",
      icon: Settings2,
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "/dashboard/sem-a/physics",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "/dashboard/sem-a/physics",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "/dashboard/sem-a/physics",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "/dashboard/sem-a/physics",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "/dashboard/sem-a/physics",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu className="rounded border border-white bg-black text-secondary">
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <PencilIcon className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">GS-NOTES-X</span>
                  <span className="truncate text-xs">Shivam Anand</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
