"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Bot } from "lucide-react"

const features: { title: string; href: string; description: string }[] = [
  {
    title: "Quick Notes",
    href: "/features/quick-notes",
    description:
      "Capture your thoughts instantly with quick and easy note-taking.",
  },
  {
    title: "Tag Management",
    href: "/features/tags",
    description:
      "Organize your notes with tags for easier retrieval and categorization.",
  },
  {
    title: "Reminders",
    href: "/features/reminders",
    description:
      "Set reminders for important notes to never miss a deadline.",
  },
  {
    title: "Rich Text Editor",
    href: "/features/editor",
    description:
      "Enhance your notes with a rich text editor for better clarity and style.",
  },
  {
    title: "Cloud Sync",
    href: "/features/cloud-sync",
    description:
      "Keep your notes safe and accessible across all devices with cloud sync.",
  },
  {
    title: "Collaboration",
    href: "/features/collaboration",
    description:
      "Share and collaborate on notes with your team or friends.",
  },
]

const NavMenuBox = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About GS Notes</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-primary text-secondary" >
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Bot className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      GS Notes
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Your ultimate companion for organized, efficient, and
                      productive note-taking. Simple. Secure. Powerful.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Discover how GS Notes can transform the way you take and manage notes.
              </ListItem>
              <ListItem href="/docs/installation" title="Getting Started">
                Learn how to set up and start using GS Notes effortlessly.
              </ListItem>
              <ListItem href="/docs/features" title="Features Overview">
                Explore the robust features of GS Notes that boost productivity.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Features</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-primary text-secondary" >
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {features.map((feature) => (
                <ListItem
                  key={feature.title}
                  title={feature.title}
                  href={feature.href}
                >
                  {feature.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default NavMenuBox