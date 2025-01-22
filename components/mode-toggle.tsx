"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Only render theme toggle after mounting to avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Memoize the click handler
  const handleThemeToggle = React.useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme, setTheme]);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon">
        <div className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleThemeToggle}
      aria-label="Toggle theme"
    >
      <div className="relative w-[1.2rem] h-[1.2rem]">
        <Moon 
          className="absolute inset-0 transform transition-transform duration-200 ease-in-out"
          style={{
            opacity: theme === 'dark' ? 0 : 1,
            transform: `scale(${theme === 'dark' ? 0 : 1}) rotate(${theme === 'dark' ? '-90deg' : '0deg'})`
          }}
        />
        <Sun 
          className="absolute inset-0 transform transition-transform duration-200 ease-in-out"
          style={{
            opacity: theme === 'dark' ? 1 : 0,
            transform: `scale(${theme === 'dark' ? 1 : 0}) rotate(${theme === 'dark' ? '0deg' : '90deg'})`
          }}
        />
      </div>
    </Button>
  );
}