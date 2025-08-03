"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <Button
      size="icon"
      className="h-9 w-9"
      variant="outline"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
    >
      {resolvedTheme === "light" ? (
        <Moon className="!h-4 !w-4" />
      ) : (
        <Sun className="!h-4 !w-4" />
      )}
    </Button>
  );
}
