"use client"

import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

function ThemeToggle({
  className,
  variant = "ghost"
}: {
  className?: string
  variant?: React.ComponentProps<typeof Button>["variant"]
}) {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Button
      variant={variant}
      size="icon"
      className={className}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      title="Toggle theme"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] dark:hidden" />
      <Moon className="h-[1.2rem] w-[1.2rem] hidden dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

export default ThemeToggle