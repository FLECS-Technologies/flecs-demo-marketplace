"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, Globe } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const marketplace = [
  {
    title: "App Store",
    href: "/marketplace/app-store",
    description: "Browse and install apps for your automation hardware.",
  },
  {
    title: "Developer Portal",
    href: "/marketplace/developer",
    description: "Create and publish your own apps on the marketplace.",
  },
];

const solutions = [
  {
    title: "Hardware Integration",
    href: "/solutions/hardware",
    description: "Connect your automation hardware to our digital platform.",
  },
  {
    title: "White Label Platform",
    href: "/solutions/white-label",
    description: "Customize the marketplace with your own branding.",
  },
];

const resources = [
  {
    title: "Documentation",
    href: "/docs",
    description: "Comprehensive guides and API references.",
  },
  {
    title: "Blog",
    href: "/blog",
    description: "Latest news, updates, and technical articles.",
  },
];

export function Navbar() {
  return (
    <>
      <div className="border-b bg-background/95" style={{ position: 'relative', zIndex: 60 }}>
        <div className="mx-auto flex h-8 max-w-[1300px] items-center justify-end gap-2 px-4 sm:px-6 lg:px-8">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-7 gap-1 text-xs text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              >
                <Globe className="h-3 w-3" />
                English
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-background">
              <DropdownMenuItem className="hover:bg-muted">English</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-muted">Deutsch</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-muted">Français</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-muted">Español</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <ModeToggle />
        </div>
      </div>
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <nav className="mx-auto flex h-16 max-w-[1300px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logos/flecs-logo.svg"
                alt="FLECS Logo"
                width={90}
                height={28}
                priority
                className="h-7"
              />
            </Link>

            <div className="hidden lg:flex lg:gap-x-8">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="h-9 px-3 text-sm font-medium">
                      Marketplace
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-1">
                        {marketplace.map((item) => (
                          <li key={item.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={item.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">{item.title}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                                  {item.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="h-9 px-3 text-sm font-medium">
                      Solutions
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-1">
                        {solutions.map((item) => (
                          <li key={item.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={item.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">{item.title}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                                  {item.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="h-9 px-3 text-sm font-medium">
                      Resources
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-1">
                        {resources.map((item) => (
                          <li key={item.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={item.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">{item.title}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                                  {item.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          <div className="flex items-center gap-x-5">
            <div className="hidden md:flex md:items-center md:gap-x-4">
              <Button variant="ghost" className="text-sm font-medium">
                Sign In
              </Button>
              <Button size="sm" className="bg-[#FF2E63] text-white hover:bg-[#ff2e63]/90">
                Get Started
              </Button>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild className="md:hidden">
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuItem>
                  <Link href="/marketplace/app-store" className="w-full">App Store</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/marketplace/developer" className="w-full">Developer Portal</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/solutions/hardware" className="w-full">Hardware Integration</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/solutions/white-label" className="w-full">White Label Platform</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/docs" className="w-full">Documentation</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/sign-in" className="w-full">Sign In</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/get-started" className="w-full">Get Started</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </header>
    </>
  );
}