import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        pulseBtn: "bg-primary text-primary-foreground hover:bg-primary/90 animate-pulseGlow",
        spinner: "inline-flex border border-[4px] animate-spinner rounded-full border-r-primary",
        skeleton: "bg-skeleton bg-[length:400%_100%] animate-skeleton text-transparent",
        hover1: "bg-primary text-primary-foreground border-b-[4px] border-b-border-secondary hover:bg-primary/90 border-t-0 transition-all duration-100 ease-in-out hover:border-b-0 hover:border-t-[4px]",
        clickIn: "bg-primary hover:scale-[1.05] text-primary-foreground active:scale-[0.95] hover:bg-primary/90 transition",
        ringHover:"bg-primary text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:ring-2 hover:ring-primary/90 hover:ring-offset-2",
        popUp: "bg-primary text-primary-foreground transition-all hover:shadow-[4px_4px_0px_1px] hover:shadow-primary/50 dark:shadow-gray-600 hover:-translate-x-1 hover:-translate-y-1",
        popIn: "bg-primary text-primary-foreground transition-all shadow-[4px_4px_0px_1px] shadow-primary/50 dark:shadow-gray-600 hover:translate-x-1 hover:translate-y-1 hover:shadow-[0px_0px_0px_0px]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
